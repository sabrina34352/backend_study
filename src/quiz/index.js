const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  {
    question: 'What is the Capital of Italy:',
    answer: 'Rome',
    correct: false,
  },
  {
    question: 'When was author Pushkin born(month, date):',
    answer: 'June 6',
    correct: false,
  },
  {
    question: 'Last President of USSR(name, surname):',
    answer: 'Mikhail Gorbachev',
    correct: false,
  },
  {
    question: 'Who was 14th president of USA:',
    answer: 'Franklin Pierce',
    correct: false,
  },
  {
    question: 'Who is the author of Crime and Punishment:',
    answer: 'Fyodor Dostoevsky',
    correct: false,
  },
  {
    question: 'What is 2+2:',
    answer: '4',
    correct: false,
  },
  {
    question: 'What is the first color of the flag Columbia:',
    answer: 'yellow',
    correct: false,
  },
  {
    question: 'The county which has the only flag which is not square:',
    answer: 'Nepal',
    correct: false,
  },
  {
    question: "Maximum age of Leonardo Decaprio's girlfriends: ",
    answer: '25',
    correct: false,
  },
  {
    question: 'Who won in trial of Jonny Depp and Amber Heard:',
    answer: 'Jonny Depp',
    correct: false,
  },
];

(async () => {
  for (let q of questions) {
    let answer = await new Promise((resolve) =>
      readline.question(q.question, resolve)
    );
    if (answer.toLowerCase() === q.answer.toLowerCase()) {
      q.correct = true;
    }
  }
  readline.close();

  console.log(
    `You got ${questions.filter((q) => q.correct).length} correct answers`
  );
})();
