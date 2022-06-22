import * as fs from "fs/promises";

const scriptFile = process.argv[1];

fs.readFile(scriptFile)
  .then((fileConntent) => {
    console.log(fileConntent.toString());
    copyFile(fileConntent);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  })
  .finally(() => {
    console.log("Terminado");
  });

function copyFile(fileConntent) {
  fs.writeFile(`${scriptFile}.copy.txt`, fileConntent)
    .then(() => console.log("Archivo copiado"))
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .finally(() => {
      console.log("Terminado");
    });
}