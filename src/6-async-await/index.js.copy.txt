import * as fs from "fs/promises";

//readFile();
writeFile();

async function readFile() {
  const scriptFile = process.argv[1];
  try {
    const fileContent = await fs.readFile(scriptFile);
    console.log(fileContent.toString());
  } catch (err) {
    console.log(`💣: ${err}`);
  }
}

async function writeFile() {
  const scriptFile = process.argv[1];
  try {
    const fileContent = await fs.readFile(scriptFile);
    fs.writeFile(`${scriptFile}.copy.txt`, fileContent);
  } catch (err) {
    console.log(`💣: ${err}`);
  }
}
