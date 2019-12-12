let myVar;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 12;
console.log(`${myVar} = ${typeof myVar}`);
myVar = "Hello";
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);
function calculateTax(amount) {
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
let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);
// function calculateTax(amount: number, format: boolean): string | number 
// {
//     if (amount === 0) {
//         return null;
//     }
//     const calcAmount = amount * 1.2;
//     return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
// }
//code calculateTax now causes an error as string and number types cannot be assigned null values
//since strictNullChecks : true in tsconfig
function calculateTax2(amount, format) {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
//adding a null output type to the type union will clarify this error
let testNull = calculateTax2(0, true);
if (testNull === null) {
    console.log(`testNull is null`);
}
//non-null assertion type
let taxValue = calculateTax2(100, false);
console.log(`taxValue is a ${typeof taxValue} type`);
