function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const myEnvVar = process.env["MY_ENV_VAR"];

async function main() {
  while(true) {
    console.log(`${myEnvVar}!`);
    await sleep(5000);
  }
}

main();
