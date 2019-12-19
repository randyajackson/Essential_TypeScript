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

type UnionType = {
    id: number | string,
    name: string
};

let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "bsmith", name: "Bob", city: "London" };

//Replacing with a Union Type
// let dataItems: UnionType[] = [hat, gloves, umbrella, bob];
let dataItems: (Product | Person)[] = [hat, gloves, umbrella, bob];

// dataItems.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`));

dataItems.forEach(item => {
    if ("city" in item) 
    {
        console.log(`Person: ${item.name}: ${item.city}`); // Compiler infers Person
    } 
    else 
    {
        console.log(`Product: ${item.name}: ${item.price}`); // Compiler infers Product
    }
});