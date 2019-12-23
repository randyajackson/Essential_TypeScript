// enum Feature { Waterproof, Insulated };
function correlateData(peopleData, staff) {
    const defaults = { company: "None", dept: "None" };
    return peopleData.map(p => ({ ...p,
        ...staff.find(e => e.id === p.id) || { ...defaults, id: p.id } }));
}
let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "bsmith", name: "Bob", city: "London",
    company: "Acme Co", dept: "Sales" };
let people = [{ id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" }];
let employees = [{ id: "bsmith", company: "Acme Co", dept: "Sales" },
    { id: "dpeters", company: "Acme Co", dept: "Development" }];
let dataItems4 = correlateData(people, employees);
//Replacing with a Union Type
// let dataItems: UnionType[] = [hat, gloves, umbrella, bob];
let dataItems = [hat, gloves, umbrella, bob];
let dataItems2 = [bob];
function writePerson(per) {
    console.log(`Person: ${per.id}, ${per.name}, ${per.city}`);
}
function writeEmployee(emp) {
    console.log(`Employee: ${emp.id}, ${emp.company}, ${emp.dept}`);
}
function isPerson(testObj) {
    return testObj.city !== undefined;
}
// dataItems.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`));
dataItems.forEach(item => {
    if (isPerson(item)) {
        console.log(`Person: ${item.name}: ${item.city}`); // Compiler infers Person
    }
    else {
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
