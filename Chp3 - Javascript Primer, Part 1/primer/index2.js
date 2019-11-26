let names = ["Hat", "Boots", "Gloves"];
let prices = [];

prices.push(100);
prices.push("100");
prices.push(50.25);

console.log(`First Item: ${names[0]}: ${prices[0]}`);

let sumPrices = (...numbers) => numbers.reduce((total, val) =>
    total + (Number.isNaN(Number(val)) ? 0 : Number(val)));

let totalPrice = sumPrices(...prices);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

let combinedArray = [...names, ...prices];
combinedArray.forEach(element => console.log(`Combined Array Element: ${element}`));

//hat is using getters and setters
let hat = {
    name: "Hat",
    _price: 100,
    priceIncTax: 100 * 1.2,

    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },

    get price() {
        return this._price;
    },

    //below is a method
    writeDetails: function() {
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
    } 
};

//boots is using just a getter
let boots = {
    name: "Boots",
    price: "100",

    get priceIncTax() {
        return Number(this.price) * 1.2;
    }
}

let gloves = {
    productName: "Gloves",
    price: 40
}

gloves.name = gloves.productName;
delete gloves.productName;
gloves.price = 20;

totalPrice = sumPrices(hat.price, boots.price, gloves.price);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

let propertyCheck = hat.price || 0;
let objectAndPropertyCheck = (hat || {}).price || 0;
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`);

let otherHat = {...hat};
console.log(`Spread: ${otherHat.name}, ${otherHat.price}`);

console.log(`Hat: ${hat.price}, ${hat.priceIncTax}`);
hat.price = 120;
console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);
boots.price = "120";
console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);

hat.price = 180;
hat.writeDetails();
hat.price = 120;
hat.writeDetails();










