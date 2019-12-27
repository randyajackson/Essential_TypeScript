//Using classes
//Replaced with type inheritence below
// type Person2 = {
//     id: string,
//     name: string,
//     city: string
// };
//The syntax for a TypeScript class requires the declaration 
//of instance properties and their types.
//Has the advatage of allowing the constructor parameter types to be different from the 
//types of the instance properties that they are assigned.
// class Employee2 {
//     public readonly id: string;
//     public name: string;
//     private dept: string;
//     public city: string;
//     constructor(id: string, name: string, dept: string, city: string){
//         this.id = id;
//         this.name = name;
//         this.dept = dept;
//         this.city = city;
//     }
//     writeDept(){
//         console.log(`${this.name} works in ${this.dept}`);
//     }
// }
//Alternative way to declare a class without using the "define and assign" pattern
// class Employee2 {
//     constructor(public readonly id: string, public name: string, 
//                     private dept: string, public city: string){
//     }
//     writeDept(){
//         console.log(`${this.name} works in ${this.dept}`);
//     }
// }
//Using type inheritence and condensed constructors
// class Person2{
//     constructor(public id: string, public name: string, public city: string)
//     {};
// }
//changing Person2 to an abstract class
class Person2 {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    getDetails() {
        return `${this.name}, ${this.getSpecificDetails()}`;
    }
}
class Employee2 extends Person2 {
    constructor(id, name, dept, city) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    ;
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
    getSpecificDetails() {
        return `works in ${this.dept}`;
    }
}
// class Customer extends Person2 {
//     constructor(public readonly id: string, public name: string,
//                 public city: string, public creditLimit: number){
//                     super(id, name, city);
//                 }
//     getSpecificDetails(){
//         return `has ${this.creditLimit} limit`;
//     }
// }
//type guarding customer that does not extend Person2
class Customer {
    constructor(id, name, city, creditLimit) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
    }
}
class Supplier extends Person2 {
    constructor(id, name, city, companyName) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.city = city;
        this.companyName = companyName;
    }
    getSpecificDetails() {
        return `works for ${this.companyName}`;
    }
}
//Objects are created using the "new" keyword
let salesEmployee2 = new Employee2("fvega", "Fidel Vega", "Sales", "Paris");
// console.log(`Dept balue: ${salesEmployee2.dept}`); // commmand does not work as dept is private
// salesEmployee2.writeDept(); // method is located in Employee2 so this does work with a private variable
//salesEmployee2.id = "fidel"; //id cannot be changed after constructor due to readonly keyword
// let data2: (Person2 | Employee2)[] =
// [{id: "bsmith", name: "Bob Smith", city: "London"},
//  {id: "ajones", name: "Alice Jones", city: "Paris"},
//  {id : "dpeters", name: "Dora Peters", city: "New York"},
//  salesEmployee2];
//Using type inheritence to define data2
// let data2: Person2[] = [ //this explicitly sets the type
// //let data2 = [//new Person2("bsmith", "Bob Smith", "London"), //does not work if commented out
// //the TypeScript compiler has inferred the type for the data array based on the types of
// //objects it contains and has not reflected the shared superclass Person2
// //in index2.d.ts declare let data: (Employee | Customer)[];
//              new Employee2("fvega", "Fidel Vega", "Sales", "Paris"),
//              new Customer("ajones", "Alice Jones", "London", 500)];
let data2 = [
    new Employee2("fvega", "Fidel Vega", "Sales", "Paris"),
    new Customer("ajones", "Alice Jones", "London", 500)
];
data2.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));
//forEach using type inheritence             
data2.forEach(item => {
    //type guarding when a mix of classes that don't extend
    if (item instanceof Person2) {
        console.log(item.getDetails());
    }
    else {
        console.log(`Customer: ${item.name}`);
    }
    // console.log(`Person: ${item.name}, ${item.city}`);
    // if(item instanceof Employee2){
    //     item.writeDept();
    // }
    // else if(item instanceof Customer){
    //     console.log(`Customer ${item.name} has ${item.creditLimit} limit`);
    // }
    // else if(item instanceof Supplier){
    //     console.log(`Supplier ${item.name} works for ${item.companyName}`);
    // }
});
//  data2.forEach(item => {
//      //instanceof understands that Employee2 is a class using this structure.
//      if(item instanceof Employee2) {
//          item.writeDept();
//      }
//      else{
//          console.log(`${item.id} ${item.name}, ${item.city}`);
//      }
//  });
