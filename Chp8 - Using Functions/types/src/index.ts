// function calculateTax(amount) 
// {
//     return amount * 1.2;
// }

// function calculateTax(amount, discount) 
// {
//     return calculateTax(amount) - discount;
// }

//consolidating both above into one function
function calculateTax(amount, discount?) {
    return (amount * 1.2) - (discount || 0);
}

function calculateTax2(amount, discount = 0, something = 0) {
    return (amount * 1.2) - (discount);
}

function calculateTax3(amount, discount = 0, ...extraFees : number[]) {
    return (amount * 1.2) - discount
    + extraFees.reduce((total, val) => total + val, 0);
}

function calculateTax4(amount: number, discount: number = 0, ...extraFees: number[]): number {
    return (amount * 1.2) - discount
    + extraFees.reduce((total, val) => total + val, 0);
}

let taxValue = calculateTax(100, 0);
console.log(`2 args: ${taxValue}`);
taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);
// taxValue = calculateTax(100, 10, 20);
// console.log(`3 args: ${taxValue}`);

taxValue = calculateTax2(100, 0);
console.log(`2 args: ${taxValue}`);
taxValue = calculateTax2(100);
console.log(`1 arg: ${taxValue}`);
taxValue = calculateTax2(100, 10, 20);
console.log(`3 args: ${taxValue}`);

taxValue = calculateTax3(100, 10, 20, 1, 30, 7);
console.log(`6 args: ${taxValue}`);

function calculateTax5(amount: number): number;
function calculateTax5(amount: null): null;
function calculateTax5(amount: number | null): number | null {
if (amount != null) {
return amount * 1.2;
}
return null;
}
function writeValue(label: string, value: number): void {
console.log(`${label}: ${value}`);
}
let taxAmount: number = calculateTax(100);
//if (typeof taxAmount === "number") {
writeValue("Tax value", taxAmount);
//}
