//Creating Generic Classes
import { City, Person, Product, Employee } from "./dataTypes";

//An abstract class can provide a partial implementation of an interface
//This can be completed by subclasses

//The abstract class has the same set of options for dealing with type parameters as 
// regular classes:pass it on to subclasses unchanged, apply further restrictions, 
// or fix for specific types.

type shapeType = { name: string };

interface Collection<T extends shapeType> {
    add(...newItems: T[]): void;
    get(name: string): T;
    count: number;
}

//The ArrayCollection<T> class is abstract and provides a partial implementation of 
//the Collection<T> interface

//leaving subclasses to provide the get method.
abstract class ArrayCollection<T extends shapeType> implements Collection<T> {
    protected items: T[] = [];

    add(...newItems: T[]): void {
        this.items.push(...newItems);
    }

    abstract get(searchTerm: string): T;

    get count(): number {
        return this.items.length;
    }
}


//The ProductCollection and PersonCollection classes extend ArrayCollection<T>
//narrowing the generic type parameter to specific types and
//implementing the get method to use the properties of the type they operate on.

class ProductCollection extends ArrayCollection<Product> {
    get(searchTerm: string): Product {
        return this.items.find(item => item.name === name);
    }
}

class PersonCollection extends ArrayCollection<Person> {
    get(searchTerm: string): Person {
        return this.items.find(item => item.name === name || item.city === name);
    }
}

let peopleCollection: Collection<Person> = new PersonCollection();

peopleCollection.add(
    new Person("Bob Smith", "London"),
    new Person("Dora Perters", "New York")
);

let productCollection: Collection<Product> = new ProductCollection();

productCollection.add(new Product("Running Shoes", 100), new Product("Hat", 25));

[peopleCollection, productCollection].forEach(c => console.log(`Size: ${c.count}`));





