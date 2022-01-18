let args = process.argv.slice(2);

const beeps = (delay) => {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, 1000 * delay);
};

for (let i of args) {
  beeps(i);
}
