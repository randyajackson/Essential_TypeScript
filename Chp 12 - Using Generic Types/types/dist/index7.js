"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Creating Generic Classes
const dataTypes_1 = require("./dataTypes");
//The TypeScript compiler is able to infer generic type arguments based on the way that objects 
//are created or methods are invoked.
//useful way to write concise code but requires caution
//you must ensure that you initialize objects with the types that you would 
//have specified explicitly
//this example instantiates the DataCollection<T> class and invokes the collate method 
//without type arguments, leaving the compiler to infer the type.
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
//The compiler is able to infer the type arguments based on the argument passed to the
//DataCollection<T> constructor and the first argument passed to the collate method.    
//inferred by the compiler:
// ...
// export declare let peopleData: DataCollection<Person>;
// export declare let collatedData: (Person & City)[];
// export declare let empData: (Person & Employee)[];
// ...
//let peopleData = new DataCollection<Person>(people);
exports.peopleData = new DataCollection(people);
// let collatedData = peopleData.collate<City>(cities, "city", "name");
exports.collatedData = exports.peopleData.collate(cities, "city", "name");
exports.collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));
// let empData = peopleData.collate<Employee>(employees, "name", "name");
exports.empData = exports.peopleData.collate(employees, "name", "name");
exports.empData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.role}`));
