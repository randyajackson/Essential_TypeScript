function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
// let prices = [];
// prices.push(...[100, 75, 42, "20"]);
let prices = [10, 75, 42];
let names = ["Hat", "Gloves", "Umbrella"];
// writePrice(names[0], calculateTax(prices[0]));
// writePrice(names[1], calculateTax(prices[1]));
// writePrice(names[2], calculateTax(prices[2]));
//below does same as above
//forEach(currentValue, index)
prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});
//using inferred typing works in this example
//enable the declaration option in tsconfig if you are not sure
//of the typing that is being generated from inferring
//index.d.ts in the src folder
prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});
//Tuples
let hat = ["Hat", 100];
let gloves = ["Gloves", 75];
// writePrice(hat[0], hat[1]);
// writePrice(gloves[0], gloves[1]);
//below does same as above
hat.forEach((h) => {
    if (typeof h === "string") {
        console.log(`String: ${h}`);
    }
    else {
        console.log(`Number: ${h.toFixed(2)}`);
    }
});
let products = [["Hat", 100], ["Gloves", 75]];
let tupleUnion = [true, false, hat, ...products];
tupleUnion.forEach((elem) => {
    if (elem instanceof Array) {
        elem.forEach((tupleElem) => {
            if (typeof tupleElem === "string") {
                console.log(`String Value: ${tupleElem}`);
            }
            else {
                console.log(`Number Value: ${tupleElem}`);
            }
        });
    }
    else if (typeof elem === "boolean") {
        console.log(`Boolean Value: ${elem}`);
    }
});
var Product;
(function (Product) {
    Product[Product["Hat"] = 0] = "Hat";
    Product[Product["Gloves"] = 1] = "Gloves";
    Product[Product["Umbrella"] = 2] = "Umbrella";
})(Product || (Product = {}));
let items = [[Product.Hat, 100], [Product.Gloves, 75]];
items.forEach((prod) => {
    switch (prod[0]) {
        case Product.Hat:
            writePrice("Hat", calculateTax(prod[1]));
            break;
        case Product.Gloves:
            writePrice("Gloves", calculateTax(prod[1]));
            break;
        case Product.Umbrella:
            writePrice("Umbrella", calculateTax(prod[1]));
            break;
    }
});
