"use strict";
// function printMessage(msg: string): void {
//     console.log(`Message: ${ msg }`);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// printMessage("Hello, TypeScript");
// printMessage("Hello, TypeScript2");
// //forcing an error
// printMessage(100);
// printMessage(700);
var calc_1 = require("./calc");
var printMessage = function (msg) { return console.log("Message: " + msg); };
var message = ("Hello, TypeScript");
printMessage(message);
var data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach(function (val, key) { return console.log(key + " lives in " + val); });
var total = calc_1.sum(100, 200, 300);
console.log("Total: " + total);
