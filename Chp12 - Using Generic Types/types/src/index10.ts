//Creating Generic Classes
import { City, Person, Product, Employee } from "./dataTypes";

// The third approach strikes a balance between the previous two examples, providing a 
//generic type variable but restricting it to specific types

// This allows functionality that can depend on
// features of particular classes without fixing the type parameter completely.

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

    //The type parameter specified by the subclass must be assignable to the type parameter it 
    //inherits
    // In the example, the Employee | Person union can be
    // assigned to the shape used to restrict the DataCollection<T> type parameter

    // class SearchableCollection extends DataCollection<Employee> {
    class SearchableCollection<T extends Employee | Person> extends DataCollection<T> { 

        // constructor(initialItems: Employee[]){
        constructor(initialItems: T[]){
            super(initialItems);
        }

        // find(searchTerm: string): Employee[] {
        //     return this.items.filter(item =>
        //         item.name === searchTerm || item.role === searchTerm);
        // }

        find(searchTerm: string): T[] {
            return this.items.filter(item => {
                if(item instanceof Employee) {
                    return item.name === searchTerm || item.role === searchTerm;
                } else if (item instanceof Person) {
                    return item.name === searchTerm || item.city === searchTerm;
                }
            });
        }

    }

//     SearchableCollection class in Listing 12-16
// can be instantiated with a type parameter of Employee, Product, and Employee | Product
    
// let employeeData = new SearchableCollection(employees);
    let employeeData = new SearchableCollection<Employee>(employees);

    employeeData.find("Sales").forEach(e =>
        console.log(`Employee ${e.name}, ${e.role} `));



