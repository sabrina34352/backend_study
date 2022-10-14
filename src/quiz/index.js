const { exit } = require('process');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  {
    question: 'What is the Capital of Italy:',
    answers: ['rome'],
    correct: false,
  },
  {
    question: 'When was author Pushkin born(month, day):',
    answers: ['june 6', '10.6', '6.10', '6 june'],
    correct: false,
  },
  {
    question: 'Last President of USSR:',
    answers: [
      'mikhail gorbachev',
      'mikhail sergeyevich gorbachev',
      'gorbachev',
      'mikhail',
      'sergeyevich',
      'mikhaiil sergeyevich',
    ],
    correct: false,
  },
  {
    question: 'Who was 14th president of USA:',
    answers: ['franklin pierce', 'pierce', 'franklin', 'pierce franklin'],
    correct: false,
  },
  {
    question: 'Who is the author of Crime and Punishment:',
    answers: ['fyodor dostoevsky', 'dostoevsky', 'fyodor', 'dostoevsky fyodor'],
    correct: false,
  },
  {
    question: 'What is 2+2:',
    answers: ['4', 'four'],
    correct: false,
  },
  {
    question: 'What is the first color of the flag Columbia:',
    answers: 'yellow',
    correct: false,
  },
  {
    question: 'The county which has the only flag which is not square:',
    answers: 'nepal',
    correct: false,
  },
  {
    question: "Maximum age of Leonardo Decaprio's girlfriends: ",
    answers: ['25', 'twenty five'],
    correct: false,
  },
  {
    question: 'Who won in trial of Jonny Depp and Amber Heard:',
    answers: ['jonny depp', 'depp', 'jonny', 'depp jonny'],
    correct: false,
  },
];

(async () => {
  for (let q of questions) {
    let abort = false;
    let incorrectAnswer = 0;
    console.log('Press q to finish the quiz');

    while (incorrectAnswer < 2) {
      let answer = await new Promise((resolve) =>
        readline.question(q.question, resolve)
      );
      if (q.answers.includes(answer.toLowerCase().replace(/\s/g, ''))) {
        q.correct = true;
        break;
      } else if (answer.toLowerCase().replace(/\s/g, '') === 'q') {
        abort = true;
        break;
      } else {
        incorrectAnswer < 1 && console.log('try again');
        incorrectAnswer++;
      }
    }
    if (abort) break;
  }
  readline.close();

  console.log(
    `You got ${
      questions.filter((q) => q.correct).length
    } correct answers \nYou got ${
      questions.filter((q) => !q.correct).length
    } wrong`
  );
})();
