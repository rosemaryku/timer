const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

console.log(
  "Beep timer options: \n 1) Press b to beep right away \n 2) Set a timer in seconds from 1-9 \n 3) Press ctrl + c to exit"
);

stdin.on("data", (key) => {
  process.stdout.write(key);

  if (key === "\u0003") {
    console.log("\nThanks for using me, ciao!");
    process.exit();
  } else if (key === "b") {
    process.stdout.write("\x07");
  } else if (key >= 1 && key <= 9) {
    console.log(`\nSetting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  } else {
    console.log("\nPlease enter a valid character");
  }
});
