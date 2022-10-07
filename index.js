  let numArray = process.argv[2].split(',').map(Number);
  if (numArray.every((num) => Number.isNaN(num))) {
    console.log('Please enter array of numbers only\n');
  } else {
    const sum = numArray.reduce((a, b) => a + b, 0);
    console.log(`The sum of the numbers is ${sum}`);
    return;
  }

