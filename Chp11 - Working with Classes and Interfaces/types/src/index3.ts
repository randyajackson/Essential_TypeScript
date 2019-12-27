interface Person3{
    name: string; //defines a name property
    getDetails(): string; //defines a getDetails method

    dogName?: string; //optional properties
    getDogDetails?(): string;
}
//Employee3 and Customer3 must have a name property and getDetails method 

//extending an interface
// interface DogOwner extends Person3{
//     dogName: string;
//     getDogDetails(): string;
// }
//added these properties as optional in Person3 interface


// class Employee3 implements Person3{

//     constructor(public readonly id: string, public name: string,
//         private dept: string, public city: string){}

//     getDetails() {
//         return `${this.name} works in ${this.dept}`;
//     }
// }

//Abstract Interface Implementation

abstract class AbstractDogOwner implements Person3 {
    abstract name: string;
    abstract dogName?: string;

    abstract getDetails();

    getDogDetails() {
        if(this.dogName) {
            return `${this.name} has a dog called ${this.dogName}`;
        }
    }
}

// //class Customer3 implements Person3, DogOwner {
// // class Customer3 implements DogOwner{ // this works as DogOwner extends Person3 
// class Customer3 implements Person3{ //DogOwner properties are now optional Person3 properties
//     //since Customer3 implements 2 interfaces it must contain the properties and methods
//     //from those interfaces
//     constructor(public readonly id: string, public name: string,
//     public city: string, public creditLimit: number, public dogName) {}

//     getDetails() {
//         return `${this.name} has ${this.creditLimit} limit`;
//     }

//     getDogDetails(){
//         return `${this.name} has a dog named ${this.dogName}`;
//     }
// }

//Abstract Interface Implementation

class DogOwningCustomer extends AbstractDogOwner{

    constructor(public readonly id: string, public name: string,
                public city: string, public creditLimit: number,
                public dogName){
                    super();
                }
    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
}

//Interface Person3 can be used in type annotations
//data3 can contain any object created from a class that implements
// let data3: Person3[] = [
// new Employee3("fvega", "Fidel Vega", "Sales", "Paris"),
// new Customer3("ajones", "Alice Jones", "London", 500, "Fido")];

// let alice = new Customer3("ajones", "Alice Jones", "London", 500, "Fido");
let alice = new DogOwningCustomer("ajones", "Alice Jones", "London", 500, "Fido");

if(alice.getDogDetails){
    console.log(alice.getDogDetails());
    console.log(alice.getDetails());
}

// let dogOwners: DogOwner[] = [alice];
// dogOwners.forEach(item => console.log(item.getDogDetails()));

// let data3: Person3[] = [new Employee3("fvega", "Fidel Vega", "Sales", "Paris"), alice];

// //the function passed in forEach is able to access only the features defined by the interface
// //unless objects are narrowed to a more specific type
// data3.forEach(item =>{
//     console.log(item.getDetails());
    
//     if(item.getDogDetails) {
//         console.log(item.getDogDetails());
//     }
// });

