const [, , ...params] = process.argv;

// Only keep the number from params input and number shouldn't be negative.
let numArray = params.filter(n => !isNaN(parseFloat(n)) && !isNaN(n - 0) && n >= 0);

// Sort our array
numArray.sort(function(a, b) {
  return a - b;
});

for (const i of numArray) {
  setTimeout(() => {
    console.log(`Alarm at ${i} second`);
    process.stdout.write('\x07');
  }, 1000 * i);
}