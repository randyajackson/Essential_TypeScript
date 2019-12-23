// enum Feature { Waterproof, Insulated };

// type Product = {
//     name: string,
//     price?: number,
//     hasFeature?(Feature): boolean
//     };

// let hat = { name: "Hat", price: 100 };
// let gloves = { name: "Gloves", price: 75 };
// // let umbrella = { name: "Umbrella"};
// //Property 'price' does not exist on type '{ name: string; }'.
// let umbrella = { 
//                  name: "Umbrella", 
//                  price: 30, 
//                  hasFeature: (feature) => feature === Feature.Waterproof 
//                 };

// let mirrorShades = { name: "Sunglasses", price: 54, finish: "mirrored"};
// let darkShades: Product = { name: "Sunglasses", price: 54, finish: "flat"};

// let products: Product[] = [hat, gloves, umbrella, mirrorShades, darkShades];
// // let products = [hat, gloves, umbrella];
// // let products: Product[] = [hat, gloves, umbrella];

// products.forEach(prod => console.log(`${prod.name}: ${prod.price} 
// Waterproof?: ${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false"}`));

//Alternate Comments above and below this line
//--------------------------------------------------

type Product = {
    id: number,
    name: string,
    price?: number
};

type Person = {
    id: string,
    name: string,
    city: string
};

type Employee = {
    id: string,
    company: string,
    dept: string
};

type UnionType = {
    id: number | string,
    name: string
};

type EmployedPerson = Person & Employee;

function correlateData(peopleData: Person[], staff: Employee[]): EmployedPerson[] {
    const defaults = { company: "None", dept: "None"};
    return peopleData.map(p => ({ ...p,
    ...staff.find(e => e.id === p.id) || { ...defaults, id: p.id } }));
}

let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "bsmith", name: "Bob", city: "London",
            company: "Acme Co", dept: "Sales" };
let people: Person[] =
            [{ id: "bsmith", name: "Bob Smith", city: "London" },
            { id: "ajones", name: "Alice Jones", city: "Paris"},
            { id: "dpeters", name: "Dora Peters", city: "New York"}];

let employees: Employee[] =
            [{ id: "bsmith", company: "Acme Co", dept: "Sales" },
            { id: "dpeters", company: "Acme Co", dept: "Development" }];

let dataItems4: EmployedPerson[] = correlateData(people, employees);
    
//Replacing with a Union Type
// let dataItems: UnionType[] = [hat, gloves, umbrella, bob];
let dataItems: (Product | Person)[] = [hat, gloves, umbrella, bob];
let dataItems2: (Person & Employee)[] = [bob];

function writePerson(per: Person): void {
    console.log(`Person: ${per.id}, ${per.name}, ${per.city}`);
    }

function writeEmployee(emp: Employee): void {
    console.log(`Employee: ${emp.id}, ${emp.company}, ${emp.dept}`);
    }

function isPerson(testObj: any): testObj is Person {
    return testObj.city !== undefined;
    }

// dataItems.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`));

dataItems.forEach(item => {
    if (isPerson(item)) 
    {
        console.log(`Person: ${item.name}: ${item.city}`); // Compiler infers Person
    } 
    else 
    {
        console.log(`Product: ${item.name}: ${item.price}`); // Compiler infers Product
    }
});

dataItems2.forEach(item => {
    console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
    console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`);
    });

dataItems4.forEach(item => {
        writePerson(item);
        writeEmployee(item);
        });





