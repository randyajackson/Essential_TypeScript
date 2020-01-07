"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Creating Generic Classes
const dataTypes_1 = require("./dataTypes");
let people = [new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York")];
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
let cities = [new dataTypes_1.City("London", 8136000), new dataTypes_1.City("Paris", 2141000)];
let employees = [new dataTypes_1.Employee("Bob Smith", "Sales"), new dataTypes_1.Employee("Alice Jones", "Sales")];
// The second type parameter in Listing 12-11 isn’t as flexible as it could be because it 
//requires the data type
// used by the collate method to be specified when the DataCollection object is 
//created, meaning that’s the
// only data type that can be used with that method.
//class DataCollection< T extends { name: string }, U > {
class DataCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    // collate(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
    collate(targetData, itemProp, targetProp) {
        let results = [];
        this.items.forEach(item => {
            let match = targetData.find(d => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
}
let peopleData = new DataCollection(people);
//The type parameter U is applied directly to the collate method, allowing a type to be provided 
//when the method is invoked, like this:
//As opposed to setting U for the whole class. ***
//This requires the situation "when a type is used by only one method"
// let collatedData = peopleData.collate(cities, "city", "name");
let collatedData = peopleData.collate(cities, "city", "name");
collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));
let empData = peopleData.collate(employees, "name", "name");
empData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.role}`));
