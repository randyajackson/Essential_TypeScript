"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Creating Generic Classes
const dataTypes_1 = require("./dataTypes");
// Some classes need to define functionality that is only available using a subset of the types 
// that are supported by the superclass. In these situations, a subclass can use a fixed type for 
// the superclass’s type parameter, such that the subclass is not a generic class
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
// The SearchableCollection class extends DataCollection<Employee>, which fixes the generic 
// type parameter so that the SearchableCollection can deal only with Employee objects
// class SearchableCollection<T extends { name: string}> extends DataCollection<T> {
class SearchableCollection extends DataCollection {
    // constructor(initialItems: T[]){
    //     super(initialItems);
    // }
    // find(name: string): T | undefined {
    //     return this.items.find(item => item.name === name);
    // }
    constructor(initialItems) {
        super(initialItems);
    }
    find(searchTerm) {
        return this.items.filter(item => item.name === searchTerm || item.role === searchTerm);
    }
}
//No type parameter can
// be used to create a SearchableCollection object, and the code in the find 
// method can safely access the properties defined by the Employee class
let employeeData = new SearchableCollection(employees);
employeeData.find("Sales").forEach(e => console.log(`Employee ${e.name}, ${e.role} `));
// let peopleData = new SearchableCollection<Person>(people);
// let foundPerson = peopleData.find("Bob Smith");
// if(foundPerson !== undefined){
//     console.log(`Person ${ foundPerson.name }, ${ foundPerson.city }`);
// }
