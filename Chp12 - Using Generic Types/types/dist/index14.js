"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Creating Generic Classes
const dataTypes_1 = require("./dataTypes");
// When a class implements a generic interface, it must implement all of the interface 
// properties and methods, but it has some choices about how to deal with type parameters, 
// as described in the following sections.
//Passing on the Generic Type Parameter
//The simplest approach is to implement the interface properties and methods without changing the type
//parameter, creating a generic class that directly implements the interface
class ArrayCollection {
    constructor() {
        this.items = [];
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    get(name) {
        return this.items.find(item => item.name === name);
    }
    get count() {
        return this.items.length;
    }
}
let peopleCollection = new ArrayCollection();
peopleCollection.add(new dataTypes_1.Person("Bob Smith", "London"), new dataTypes_1.Person("Dora Perters", "New York"));
console.log(`Collection size: ${peopleCollection.count}`);
//The ArrayCollection<DataType> class uses the implements keyword to declare that it conforms 
//to the interface.
// The interface has a generic type parameter, so the ArrayCollection<DataType> class must define
// a compatible parameter.
