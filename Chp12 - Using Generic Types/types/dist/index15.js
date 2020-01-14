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
//Classes can provide an implementation of an interface that is specific to a type or a subset 
//of the types supported by the interface
//The PersonCollection class implements the Collection<Product> interface
class PersonCollection {
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
let peopleCollection = new PersonCollection();
// let peopleCollection: Collection<Person> = new ArrayCollection<Person>();
peopleCollection.add(new dataTypes_1.Person("Bob Smith", "London"), new dataTypes_1.Person("Dora Perters", "New York"));
console.log(`Collection size: ${peopleCollection.count}`);
