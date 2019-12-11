// function printMessage(msg: string): void {
//     console.log(`Message: ${ msg }`);
// }

// printMessage("Hello, TypeScript");
// printMessage("Hello, TypeScript2");
// //forcing an error
// printMessage(100);
// printMessage(700);

import {sum} from "./calc";

let printMessage = (msg: string): void => console.log(`Message: ${ msg }`);
let message = ("Hello, TypeScript");
printMessage(message);

let data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach((val, key) => console.log(`${key} lives in ${val}`));

let total = sum(100,200,300);
console.log(`Total: ${total}`);