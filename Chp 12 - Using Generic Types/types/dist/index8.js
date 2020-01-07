"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Creating Generic Classes
const dataTypes_1 = require("./dataTypes");
//A generic class can be extended, and the subclass can choose to deal with the generic 
//type parameters in several ways, as described in the following sections.
//Adding Extra Features to the Existing Type Parameters
let people = [new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York")];
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
let cities = [new dataTypes_1.City("London", 8136000), new dataTypes_1.City("Paris", 2141000)];
let employees = [new dataTypes_1.Employee("Bob Smith", "Sales"), new dataTypes_1.Employee("Alice Jones", "Sales")];
class DataCollection {
    constructor(initialItems) {
        //protected, allowing it to be accessed by subclasses
        //private items: T[] = [];
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
//*** new class ***/
//SearchableCollection<T> class is derived from DataCollection<T>
//The type of a generic class includes its type parameters so that the 
//superclass is DataCollection<T>.
//The type parameter defined by the SearchableCollection<T> class must be compatible with 
//the type parameter of the superclass
class SearchableCollection extends DataCollection {
    constructor(initialItems) {
        super(initialItems);
    }
    //find method that locates an object by its name property
    find(name) {
        return this.items.find(item => item.name === name);
    }
}
// export let peopleData = new DataCollection(people);
let peopleData = new SearchableCollection(people);
let foundPerson = peopleData.find("Bob Smith");
if (foundPerson !== undefined) {
    console.log(`Person ${foundPerson.name}, ${foundPerson.city}`);
}
