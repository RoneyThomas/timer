const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Press b for instant beep or enter from 1 to 9 for setting timer for x seconds. To end ctrl + c");
rl.prompt();

rl.on('line', function(line) {
  line = line.trim();
  if (line === 'b') {
    process.stdout.write('\x07');
  } else if (!isNaN(parseFloat(line)) && !isNaN(line - 0) && line >= 0) {
    console.log(`setting timer for ${line} second...`);
    setTimeout(() => {
      console.log(`Alarm at ${line} second`);
      process.stdout.write('\x07');
    }, 1000 * line);
  } else {
    console.log("Press b for instant beep or enter from 1 to 9 for setting timer for x seconds. To end ctrl + c");
  }
  rl.prompt();
}).on('close', function() {
  console.log('Have a great day!');
  process.exit(0);
});

rl.on("close", function() {
  console.log("\nThanks for using me, ciao!");
  process.exit(0);
});