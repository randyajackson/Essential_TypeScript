"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Creating Generic Classes
const dataTypes_1 = require("./dataTypes");
let people = [new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York")];
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
let cities = [new dataTypes_1.City("London", 8136000), new dataTypes_1.City("Paris", 2141000)];
let employees = [new dataTypes_1.Employee("Bob Smith", "Sales"), new dataTypes_1.Employee("Alice Jones", "Sales")];
class DataCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    filter(predicate) {
        return this.items.filter(item => predicate(item));
    }
    static reverse(items) {
        return items.reverse();
    }
}
let mixedData = new DataCollection([...people, ...products]);
function isProduct(target) {
    return target instanceof dataTypes_1.Product;
}
let filteredProducts = mixedData.filter(isProduct);
filteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
let reversedCities = DataCollection.reverse(cities);
reversedCities.forEach(c => console.log(`City: ${c.name}, ${c.population}`));
