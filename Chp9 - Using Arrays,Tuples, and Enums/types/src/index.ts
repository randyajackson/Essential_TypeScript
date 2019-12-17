function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

// let prices = [];
// prices.push(...[100, 75, 42, "20"]);
let prices: number[] = [10,75,42];
let names: string[] = ["Hat", "Gloves", "Umbrella"];

// writePrice(names[0], calculateTax(prices[0]));
// writePrice(names[1], calculateTax(prices[1]));
// writePrice(names[2], calculateTax(prices[2]));

//below does same as above
//forEach(currentValue, index)
prices.forEach((price: number, index: number) => {
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
let hat: [string, number] = ["Hat", 100];
let gloves: [string, number] = ["Gloves", 75];

// writePrice(hat[0], hat[1]);
// writePrice(gloves[0], gloves[1]);

//below does same as above

hat.forEach((h: string | number) => {
    if (typeof h === "string") 
    {
    console.log(`String: ${h}`);
    } 
    else
    {
    console.log(`Number: ${h.toFixed(2)}`);
    }
    });

let products: [string, number][] = [["Hat", 100], ["Gloves", 75]];
let tupleUnion: ([string, number] | boolean)[] = [true, false, hat, ...products];

tupleUnion.forEach((elem: [string, number] | boolean) => {
    
    if (elem instanceof Array) {
        elem.forEach((tupleElem: string | number) => {
            if (typeof tupleElem === "string") {
                console.log(`String Value: ${tupleElem}`);
            } else {
                console.log(`Number Value: ${tupleElem}`);
            }
    });

    } else if (typeof elem === "boolean") {
        console.log(`Boolean Value: ${elem}`);
    }

});

enum Product { Hat, Gloves, Umbrella }

let items: [Product, number][] = [[Product.Hat, 100], [Product.Gloves, 75]];

items.forEach((prod: [Product, number]) => {

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




