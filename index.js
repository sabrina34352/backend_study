let numArray = process.argv.slice(2);

if (numArray.length === 1) {
  numArray = process.argv[2].split(',');
}

if (numArray.some((num) => Number.isNaN(num)) || numArray.length === 0) {
  console.log('Please enter array of numbers in correct format\n');
} else {
  const sum = numArray.map(Number).reduce((a, b) => a + b, 0);
  console.log(`The sum of the numbers is ${sum}`);
  return;
}
