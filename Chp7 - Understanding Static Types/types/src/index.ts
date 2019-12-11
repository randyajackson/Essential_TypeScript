let myVar;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 12;
console.log(`${myVar} = ${typeof myVar}`);
myVar = "Hello";
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);

function calculateTax(amount: number): number {
    return amount * 1.2;
}

//Output is implicitly a number, does not cause compiler error
// function calculateTax(amount: number) {
//     return amount * 1.2;
// }

console.log(`${12} = ${calculateTax(12)}`);

//both below cause errors since argument does not match type
// console.log(`${"Hello"} = ${calculateTax("Hello")}`);
// console.log(`${true} = ${calculateTax(true)}`);

let price: number = 100;
let taxAmount: number = calculateTax(price);
let halfShare: number = taxAmount / 2;

console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);





