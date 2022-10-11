/* TODO: 2. Сделать программу для квиз-опроса на 10 вопросов.
 После каждого вопроса программа должна предлагать продолжить 
 игру или завершить. При неверном ответе
  давать еще одну попытку. При завершении
   показывать количество верных и неверных ответов.
*/
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  {
    question: 'a:',
    answer: 'a',
    correct: false,
  },
  {
    question: 'b:',
    answer: 'b',
    correct: false,
  },
  {
    question: 'c:',
    answer: 'c',
    correct: false,
  },
  {
    question: 'd:',
    answer: 'd',
    correct: false,
  },
  {
    question: 'e:',
    answer: 'e',
    correct: false,
  },
  {
    question: 'f:',
    answer: 'f',
    correct: false,
  },
  {
    question: 'g:',
    answer: 'g',
    correct: false,
  },
  {
    question: 'h:',
    answer: 'h',
    correct: false,
  },
  {
    question: 'j:',
    answer: 'j',
    correct: false,
  },
  {
    question: 'k:',
    answer: 'k',
    correct: false,
  },
];

(async () => {
  for (let q of questions) {
    let answer = await new Promise((resolve) =>
      readline.question(q.question, resolve)
    );
    if (answer === q.answer) {
      q.correct = true;
    }
  }
  readline.close();

  console.log(
    `You got ${questions.filter((q) => q.correct).length} correct answers`
  );
})();
