//Creating Generic Classes
import { City, Person, Product, Employee } from "./dataTypes";

//A generic class can be extended, and the subclass can choose to deal with the generic 
//type parameters in several ways, as described in the following sections.

//Adding Extra Features to the Existing Type Parameters
let people = [new Person("Bob Smith", "London"),
              new Person("Dora Peters", "New York")];

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];
let employees = [ new Employee("Bob Smith", "Sales"), new Employee("Alice Jones", "Sales")];


    class DataCollection< T extends { name: string }> {
        
        //protected, allowing it to be accessed by subclasses
        //private items: T[] = [];
        protected items: T[] = [];

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

    //*** new class ***/
    //SearchableCollection<T> class is derived from DataCollection<T>

    //The type of a generic class includes its type parameters so that the 
    //superclass is DataCollection<T>.

    //The type parameter defined by the SearchableCollection<T> class must be compatible with 
    //the type parameter of the superclass

    class SearchableCollection<T extends { name: string}> extends DataCollection<T> {
        
        constructor(initialItems: T[]){
            super(initialItems);
        }

        //find method that locates an object by its name property
        find(name: string): T | undefined {
            return this.items.find(item => item.name === name);
        }
    }

// export let peopleData = new DataCollection(people);
let peopleData = new SearchableCollection<Person>(people);

let foundPerson = peopleData.find("Bob Smith");

if(foundPerson !== undefined){
    console.log(`Person ${ foundPerson.name }, ${ foundPerson.city }`);
}



