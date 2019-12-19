// enum Feature { Waterproof, Insulated };
let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "bsmith", name: "Bob", city: "London" };
//Replacing with a Union Type
// let dataItems: UnionType[] = [hat, gloves, umbrella, bob];
let dataItems = [hat, gloves, umbrella, bob];
// dataItems.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`));
dataItems.forEach(item => {
    if ("city" in item) {
        console.log(`Person: ${item.name}: ${item.city}`); // Compiler infers Person
    }
    else {
        console.log(`Product: ${item.name}: ${item.price}`); // Compiler infers Product
    }
});
