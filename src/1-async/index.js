const fourseconds = 4000;
console.log("Before with inner function");
setTimeout(() => {
  console.log("Hello after 4 seconds");
}, fourseconds);


console.log("Before with declared function");
function printHello() {
  console.log("Hello");
}

setTimeout(printHello, fourseconds);

console.log("Before with arrow function expression");
const printHello2 = () => console.log("Hello2");
setTimeout(printHello2, fourseconds);

console.log("Before with inner arrow function expression");
setTimeout(() => console.log("Hello4"), fourseconds);

console.log("Before with parameters");
setTimeout((name) => console.log("Hello" + name), fourseconds, "IGM");

function sumar(a, b) {
  console.log(a + b);
}
setTimeout(sumar, fourseconds, 3, 4);

// eslint-disable-next-line no-magic-numbers
const id = setInterval(() => console.log("Hello"), 2000);
clearInterval(id);

console.log("After all the code");

console.log("Before with async iterator");
let counter = 0;
const maxCounter = 4;

function printCounter() {
  console.log(`Hello ${counter}`);
  counter++;
  if (counter === maxCounter) {
    clearInterval(intervalId);
  }
}
const intervalId = setInterval(printCounter, fourseconds);

console.log("After all the code");
