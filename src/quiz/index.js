const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const fs = require('fs').promises;
let correctAnswers = 0;
let totalQuestions = 0;

const writeDownAnswers = (question, answer, extra) => {
  fs.appendFile(
    'src/quiz/questions/userAnswers.txt',
    `${question} - ${answer} (${extra})\n`,
    (err) => {
      if (err) throw err;
    }
  );
};
(async () => {
  try {
    const questionsFile = await fs.readFile('src/quiz/questions/questions.txt');
    const answersFile = await fs.readFile('src/quiz/questions/answers.txt');
    const questions = questionsFile.toString().split('\n');
    const answers = answersFile.toString().split('\n');
    totalQuestions = questions.length;

    for (const [index, question] of questions.entries()) {
      let abort = false;
      let incorrectAnswer = 0;
      console.log('Press q to finish the quiz');

      while (incorrectAnswer < 2) {
        let answer = await new Promise((resolve) =>
          readline.question(question, resolve)
        );

        if (answers[index].split(', ').includes(answer.toLowerCase().trim())) {
          writeDownAnswers(question, answer, 'correct');
          correctAnswers++;
          break;
        } else if (answer.toLowerCase().trim() === 'q') {
          abort = true;
          break;
        } else {
          incorrectAnswer < 1 && console.log('try again');
          writeDownAnswers(question, answer, 'wrong');
          incorrectAnswer++;
        }
      }
      if (abort) break;
    }

    readline.close();

    const score = `\nYou got ${correctAnswers} correct answers \nYou got ${
      totalQuestions - correctAnswers
    } wrong or not answered`;

    fs.appendFile('src/quiz/questions/userAnswers.txt', score, (err) => {
      if (err) throw err;
    });

    console.log(score);
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
})();
