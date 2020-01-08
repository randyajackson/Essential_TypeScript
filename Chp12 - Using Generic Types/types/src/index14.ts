//Creating Generic Classes
import { City, Person, Product, Employee } from "./dataTypes";

// Generic interfaces can be extended just like regular interfaces, and the options for dealing with its type
// parameters are the same as when extending a generic class.

//Some examples of extending the Collection<T> interface.
type shapeType = { name: string };

interface Collection<T extends shapeType> {
    add(...newItems: T[]): void;
    get(name: string): T;
    count: number;
}

interface SearchableCollection<T extends shapeType> extends Collection<T> {
    find(name: string): T | undefined;
}

interface ProductCollection extends Collection<Product> {
    sumPrices(): number;
}

interface PeopleCollection<T extends Product | Employee> extends Collection<T> {
    getNames(): string[];
}

// When a class implements a generic interface, it must implement all of the interface 
// properties and methods, but it has some choices about how to deal with type parameters, 
// as described in the following sections.

//Passing on the Generic Type Parameter
//The simplest approach is to implement the interface properties and methods without changing the type
//parameter, creating a generic class that directly implements the interface

class ArrayCollection<DataType extends shapeType> implements Collection<DataType> {
    
    private items: DataType[] = [];

    add(...newItems): void {
        this.items.push(...newItems);
    }

    get(name: string): DataType {
        return this.items.find(item => item.name === name);
    }

    get count(): number {
        return this.items.length;
    }

}

let peopleCollection: Collection<Person> = new ArrayCollection<Person>();

peopleCollection.add(
    new Person("Bob Smith", "London"),
    new Person("Dora Perters", "New York")
);

console.log(`Collection size: ${peopleCollection.count}`);

//The ArrayCollection<DataType> class uses the implements keyword to declare that it conforms 
//to the interface.

// The interface has a generic type parameter, so the ArrayCollection<DataType> class must define
// a compatible parameter.


