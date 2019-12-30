//Understanding the problem

import { Person, Product } from "./dataTypes";
//Person and Product are imported from dataTyoes.ts

let people = [new Person("Bob Smith", "London"),
              new Person("Dora Peters", "New York")];

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

//This operates on Person objects
//The problem is that this only works with Person objects
//If you want to work on Products, you can create another class but this doesn't scale
class PeopleCollection{
    private items: Person[] = [];

    constructor(initialItems: Person[]) {
        this.items.push(...initialItems);
    }

    add(newItem: Person) {
        this.items.push(newItem);
    }

    getNames(): string[] {
        return this.items.map(item => item.name);
    }

    getItem(index: number): Person {
        return this.items[index];
    }
}

let peopleData = new PeopleCollection(people);

console.log(`Names: ${peopleData.getNames().join(", ")}`);

//getItem returns a Person object
let firstPerson = peopleData.getItem(0);

console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);