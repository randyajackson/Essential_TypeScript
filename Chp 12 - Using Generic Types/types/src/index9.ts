//Creating Generic Classes
import { City, Person, Product, Employee } from "./dataTypes";

// Some classes need to define functionality that is only available using a subset of the types 
// that are supported by the superclass. In these situations, a subclass can use a fixed type for 
// the superclass’s type parameter, such that the subclass is not a generic class

let people = [new Person("Bob Smith", "London"),
              new Person("Dora Peters", "New York")];

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];
let employees = [ new Employee("Bob Smith", "Sales"), new Employee("Alice Jones", "Sales")];


    class DataCollection< T extends { name: string }> {
        
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

    // The SearchableCollection class extends DataCollection<Employee>, which fixes the generic 
    // type parameter so that the SearchableCollection can deal only with Employee objects

    // class SearchableCollection<T extends { name: string}> extends DataCollection<T> {
    class SearchableCollection extends DataCollection<Employee> {
        
        // constructor(initialItems: T[]){
        //     super(initialItems);
        // }

        // find(name: string): T | undefined {
        //     return this.items.find(item => item.name === name);
        // }

        constructor(initialItems: Employee[]){
            super(initialItems);
        }

        find(searchTerm: string): Employee[] {
            return this.items.filter(item =>
                item.name === searchTerm || item.role === searchTerm);
        }

    }

    //No type parameter can
    // be used to create a SearchableCollection object, and the code in the find 
    // method can safely access the properties defined by the Employee class
    
    let employeeData = new SearchableCollection(employees);

    employeeData.find("Sales").forEach(e =>
        console.log(`Employee ${e.name}, ${e.role} `));

// let peopleData = new SearchableCollection<Person>(people);

// let foundPerson = peopleData.find("Bob Smith");

// if(foundPerson !== undefined){
//     console.log(`Person ${ foundPerson.name }, ${ foundPerson.city }`);
// }



