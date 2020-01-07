//Creating Generic Classes
import { City, Person, Product } from "./dataTypes";

let people = [new Person("Bob Smith", "London"),
              new Person("Dora Peters", "New York")];

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];

//Defining multiple type parameters
//adding a second type parameter to the DataCollection<T> class and use it to correlate
//data values

//this will now collage people with cities

//class DataCollection<T extends { name: string}> {
    class DataCollection< T extends { name: string }, U > {

        private items: T[] = [];

        constructor(initialItems: T[]) {
            this.items.push(...initialItems);
        }

//The new parameter,
// named U, is used to define the type of an argument passed to the collate method, which compares the
// properties on an array of objects and intersections between those T and U objects that have the same
// property values.

        collate(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
        
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
//When the generic class is instantiated, arguments must be supplied for each 
//of the generic type parameters, separated by commas, like this:
let peopleData = new DataCollection<Person, City>(people);
let collatedData = peopleData.collate(cities, "city", "name");
collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));



