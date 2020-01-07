//Creating Generic Classes
import { City, Person, Product, Employee } from "./dataTypes";

let people = [new Person("Bob Smith", "London"),
              new Person("Dora Peters", "New York")];

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];
let employees = [ new Employee("Bob Smith", "Sales"), new Employee("Alice Jones", "Sales")];

// The second type parameter in Listing 12-11 isn’t as flexible as it could be because it 
//requires the data type
// used by the collate method to be specified when the DataCollection object is 
//created, meaning that’s the
// only data type that can be used with that method.

//class DataCollection< T extends { name: string }, U > {
    class DataCollection< T extends { name: string }> {

        private items: T[] = [];

        constructor(initialItems: T[]) {
            this.items.push(...initialItems);
        }

        // collate(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
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

let peopleData = new DataCollection<Person>(people);
// let collatedData = peopleData.collate(cities, "city", "name");
let collatedData = peopleData.collate<City>(cities, "city", "name");
collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));
let empData = peopleData.collate<Employee>(employees, "name", "name");
empData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.role}`));



