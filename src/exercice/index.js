import * as cp from "child_process";

const child =  cp.fork("./src/exercice/child.js");

let numbers = [0, 1, 2, 3, 5, 6, 7, 11, 13];

numbers.forEach(){

});

child.on("message", (arg) => console.log(`Received from child ${arg.msg}`));
child.send({ msg: "I am a parent child working" });
child.on("close", (code) => console.log("child closed, code: " + code));
child.send({ close: true });
console.log("parent started working");
