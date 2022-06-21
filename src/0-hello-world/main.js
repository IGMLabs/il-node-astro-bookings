//import { getGreetings } from "./lib.js";
//import * as saludos from "./lib.js";
import { empresa, getGreetings } from "./lib.js";

//const greetings = saludos.getGreetings("IGM labs");
const greetings = getGreetings(empresa);

console.log(greetings);
