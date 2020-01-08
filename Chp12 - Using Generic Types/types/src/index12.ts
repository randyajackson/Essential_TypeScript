//Creating Generic Classes
import { City, Person, Product, Employee } from "./dataTypes";

// Only instance properties and methods have a generic type, which can be different for each 
//object. Static methods are accessed through the class

let people = [new Person("Bob Smith", "London"),
              new Person("Dora Peters", "New York")];

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];
let employees = [ new Employee("Bob Smith", "Sales"), new Employee("Alice Jones", "Sales")];

    class DataCollection<T> {   

        protected items: T[] = [];

        constructor(initialItems: T[]) {
            this.items.push(...initialItems);
        }

        filter<V extends T>(predicate: (target) => target is V): V[] {
            return this.items.filter(item => predicate(item)) as V[];
        }


        //Adding a Type Parameter in the index.ts File in the src Folder        
        static reverse<ArrayType>(items: ArrayType[]): ArrayType[] {
            return items.reverse();
        }
        
    }

    let mixedData = new DataCollection<Person | Product >([...people, ...products]);
    
    function isProduct(target): target is Product {
        return target instanceof Product;
    }

    let filteredProducts = mixedData.filter<Product>(isProduct);
    filteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`));

//The static reverse method is accessed through the DataCollection class without the use of a type
//argument, like this:
    // let reversedCities: City[] = DataCollection.reverse(cities);

    //Adding a Type Parameter in the index.ts File in the src Folder
    let reversedCities = DataCollection.reverse<City>(cities);
    reversedCities.forEach(c => console.log(`City: ${c.name}, ${c.population}`));

//The type parameters defined by static methods are separate from those defined 
//by the class for use by its instance properties and methods.



    




