"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Creating Generic Classes
const dataTypes_1 = require("./dataTypes");
// The third approach strikes a balance between the previous two examples, providing a 
//generic type variable but restricting it to specific types
// This allows functionality that can depend on
// features of particular classes without fixing the type parameter completely.
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
//The type parameter specified by the subclass must be assignable to the type parameter it 
//inherits
// In the example, the Employee | Person union can be
// assigned to the shape used to restrict the DataCollection<T> type parameter
// class SearchableCollection extends DataCollection<Employee> {
class SearchableCollection extends DataCollection {
    // constructor(initialItems: Employee[]){
    constructor(initialItems) {
        super(initialItems);
    }
    // find(searchTerm: string): Employee[] {
    //     return this.items.filter(item =>
    //         item.name === searchTerm || item.role === searchTerm);
    // }
    find(searchTerm) {
        return this.items.filter(item => {
            if (item instanceof dataTypes_1.Employee) {
                return item.name === searchTerm || item.role === searchTerm;
            }
            else if (item instanceof dataTypes_1.Person) {
                return item.name === searchTerm || item.city === searchTerm;
            }
        });
    }
}
//     SearchableCollection class in Listing 12-16
// can be instantiated with a type parameter of Employee, Product, and Employee | Product
// let employeeData = new SearchableCollection(employees);
let employeeData = new SearchableCollection(employees);
employeeData.find("Sales").forEach(e => console.log(`Employee ${e.name}, ${e.role} `));
