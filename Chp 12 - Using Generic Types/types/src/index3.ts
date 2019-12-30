//Creating Generic Classes
import { Person, Product } from "./dataTypes";

let people = [new Person("Bob Smith", "London"),
              new Person("Dora Peters", "New York")];

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

//type dataType = Person | Product;

//A generic class is a class that has a generic type parameter

//a generic type parameter is a placeholder for a type that is specified when the class is
//used to create a new object

//Generic type parameters allow classes to be written that operate on a specific type without
//knowing what type will be in advance

//A generic type parameter is <T>
//The result is a generic class, meaning a class that has at least one generic type parameter.
//T can be used in place of a specific type.
class DataCollection<T>{
    private items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    add(newItem: T) {
        this.items.push(newItem);
    }

    // getNames(): string[] {
    //     return this.items.map(item => item.name);
    // }

    getItem(index: number): T {
        return this.items[index];
    }
}

let peopleData = new DataCollection<Person>(people);

// console.log(`Names: ${peopleData.getNames().join(", ")}`);

let firstPerson = peopleData.getItem(0);

// if(firstPerson instanceof Person) {
//     console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
// }

console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
