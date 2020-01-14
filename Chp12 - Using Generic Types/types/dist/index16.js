"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Creating Generic Classes
const dataTypes_1 = require("./dataTypes");
//The ArrayCollection<T> class is abstract and provides a partial implementation of 
//the Collection<T> interface
//leaving subclasses to provide the get method.
class ArrayCollection {
    constructor() {
        this.items = [];
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    get count() {
        return this.items.length;
    }
}
//The ProductCollection and PersonCollection classes extend ArrayCollection<T>
//narrowing the generic type parameter to specific types and
//implementing the get method to use the properties of the type they operate on.
class ProductCollection extends ArrayCollection {
    get(searchTerm) {
        return this.items.find(item => item.name === name);
    }
}
class PersonCollection extends ArrayCollection {
    get(searchTerm) {
        return this.items.find(item => item.name === name || item.city === name);
    }
}
let peopleCollection = new PersonCollection();
peopleCollection.add(new dataTypes_1.Person("Bob Smith", "London"), new dataTypes_1.Person("Dora Perters", "New York"));
let productCollection = new ProductCollection();
productCollection.add(new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25));
[peopleCollection, productCollection].forEach(c => console.log(`Size: ${c.count}`));
