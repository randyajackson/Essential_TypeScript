"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Creating Generic Classes
const dataTypes_1 = require("./dataTypes");
let people = [new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York")];
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
let cities = [new dataTypes_1.City("London", 8136000), new dataTypes_1.City("Paris", 2141000)];
let employees = [new dataTypes_1.Employee("Bob Smith", "Sales"), new dataTypes_1.Employee("Alice Jones", "Sales")];
// SearchableCollection<T> class in Listing 12-16 used the instanceof keyword to identify Employee
// and Person objects
// This is manageable because the restriction applied to the type parameter means that
// there are only a small number of types to deal with.
// For classes with type parameters that are not restricted,
// narrowing to a specific type can be difficult
// class DataCollection< T extends { name: string }> {
class DataCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    // the filter method’s generic type parameter, named V, is defined with the extend keyword,
    // telling the compiler that it can only accept types that can be assigned to the class generic 
    // type T, which prevents the compiler from treating V as any
    // src/index.ts(18,58): error TS2693: 'V' only refers to a type, but is being used as a
    // value here.
    // There is no JavaScript feature that is equivalent to generic types, so they are removed from the
    // TypeScript code during the compilation process
    // which means that there is no information available at
    // runtime to use generic types with the instanceof keyword. 
    // filter<V extends T>(): V[] {
    //     return this.items.filter(item => item instanceof V) as V[];
    // }    
    // The predicate function for the required type is provided as an argument to the filter method 
    //using JavaScript features that are available when the code is executed
    filter(predicate) {
        return this.items.filter(item => predicate(item));
    }
}
let mixedData = new DataCollection([...people, ...products]);
// let filteredProducts = mixedData.filter<Product>();
function isProduct(target) {
    return target instanceof dataTypes_1.Product;
}
let filteredProducts = mixedData.filter(isProduct);
filteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
