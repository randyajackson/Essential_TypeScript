//Creating Generic Classes
import { City, Person, Product } from "./dataTypes";

let people = [new Person("Bob Smith", "London"),
              new Person("Dora Peters", "New York")];

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];

//Using a type union may not scale well, you can also use a shape to constrain the type
//parameter

//class DataCollection<T extends (Person | Product)> { 
class DataCollection<T extends { name: string}> {

    private items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    add(newItem: T) {
        this.items.push(newItem);
    }

    //restricting the generic type because only Person has names
    getNames(): string[] {
        return this.items.map(item => item.name);
    }

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
console.log(`Person Names: ${peopleData.getNames().join(", ")}`);

let productData = new DataCollection<Product>(products);
let firstProduct = productData.getItem(0);
console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`);
console.log(`Product Names: ${productData.getNames().join(", ")}`);

let cityData = new DataCollection<City>(cities);
console.log(`City Names: ${cityData.getNames().join(", ")}`);




