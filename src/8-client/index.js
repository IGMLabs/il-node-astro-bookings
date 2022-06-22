import * as https from "https";
import * as http from "http";
import * as fs from "fs";

/*https.get("https://www.google.com", (res) => {
  let body = "";
  res.on("data", (data) => {
    body += data;
    //console.log(data.toString());
  });
  res.on("end", () => {
    console.log(body);
  });
});*/

http.get("http://localhost:3000/agencies", (res) => {
  let body = "";
  res.on("data", (data) => {
    body += data;
    //console.log(data.toString());
  });
  res.on("end", () => {
    //console.log(body);
    const agencies = JSON.parse(body);
    console.log(agencies[1]);
  });
});

/*https.get("https://www.google.com", (res) => {
  let body = "";
  res.on("data", (data) => {
    body += data;
    //console.log(data.toString());
  });
  res.on("end", () => {
    fstat.writeFile("www.google.com.html", body);
  });
});*/

/*https.get("https://www.google.com", (res) => {
  let writeStream = fs.createWriteStream("www.google.com.html");
  res.on("data", (data) => {
    writeStream += data;
    //console.log(data.toString());
    writeStream.write(data);
  });
  res.on("end", () => {
    writeStream.close();
  });
});*/

https.get("https://www.google.com", writePipe);

function writePipe(response) {
  let writeStream = fs.createWriteStream("www.google.com.html");
  response.pipe(writeStream);
}
