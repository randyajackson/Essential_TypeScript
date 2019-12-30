//Adding Support for another type
import { Person, Product } from "./dataTypes";

let people = [new Person("Bob Smith", "London"),
              new Person("Dora Peters", "New York")];

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

//now we are using a type union to add support for the Product Class
type dataType = Person | Product;

class DataCollection{
    private items: dataType[] = [];

    constructor(initialItems: dataType[]) {
        this.items.push(...initialItems);
    }

    add(newItem: dataType) {
        this.items.push(newItem);
    }

    getNames(): string[] {
        return this.items.map(item => item.name);
    }

    getItem(index: number): dataType {
        return this.items[index];
    }
}

let peopleData = new DataCollection(people);

console.log(`Names: ${peopleData.getNames().join(", ")}`);

let firstPerson = peopleData.getItem(0);

if(firstPerson instanceof Person) {
    console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
}
