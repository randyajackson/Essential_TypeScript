//Creating Generic Classes
import { City, Person, Product, Employee } from "./dataTypes";

//The TypeScript compiler is able to infer generic type arguments based on the way that objects 
//are created or methods are invoked.

//useful way to write concise code but requires caution

//you must ensure that you initialize objects with the types that you would 
//have specified explicitly

//this example instantiates the DataCollection<T> class and invokes the collate method 
//without type arguments, leaving the compiler to infer the type.

let people = [new Person("Bob Smith", "London"),
              new Person("Dora Peters", "New York")];

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];
let employees = [ new Employee("Bob Smith", "Sales"), new Employee("Alice Jones", "Sales")];


    class DataCollection< T extends { name: string }> {

        private items: T[] = [];

        constructor(initialItems: T[]) {
            this.items.push(...initialItems);
        }

        collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
            let results = [];
            this.items.forEach(item => {
                let match = targetData.find(d => d[targetProp] === item[itemProp]);
                if (match !== undefined) {
                    results.push({...match, ...item});
                }
            });

            return results;
        }
    }

//The compiler is able to infer the type arguments based on the argument passed to the
//DataCollection<T> constructor and the first argument passed to the collate method.    

//inferred by the compiler:
// ...
// export declare let peopleData: DataCollection<Person>;
// export declare let collatedData: (Person & City)[];
// export declare let empData: (Person & Employee)[];
// ...

//let peopleData = new DataCollection<Person>(people);
export let peopleData = new DataCollection(people);

// let collatedData = peopleData.collate<City>(cities, "city", "name");
export let collatedData = peopleData.collate(cities, "city", "name");

collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));

// let empData = peopleData.collate<Employee>(employees, "name", "name");
export let empData = peopleData.collate(employees, "name", "name");

empData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.role}`));



