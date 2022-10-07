const prompt = require('prompt-sync')();

while (true) {
  let numArray = prompt('Enter a list of numbers separated by commas: ')
    .split(',')
    .map(Number);
  if (numArray.every((num) => Number.isNaN(num))) {
    console.log('Please enter array of numbers only\n');
  } else {
    const sum = numArray.reduce((a, b) => a + b, 0);
    console.log(`The sum of the numbers is ${sum}`);
    return;
  }
}
