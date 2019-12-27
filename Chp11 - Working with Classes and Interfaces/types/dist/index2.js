//Using classes
//The syntax for a TypeScript class requires the declaration 
//of instance properties and their types.
//Has the advatage of allowing the constructor parameter types to be different from the 
//types of the instance properties that they are assigned.
class Employee2 {
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}
//Objects are created using the "new" keyword
let salesEmployee2 = new Employee2("fvega", "Fidel Vega", "Sales", "Paris");
// console.log(`Dept balue: ${salesEmployee2.dept}`); // commmand does not work as dept is private
salesEmployee2.writeDept(); // method is located in Employee2 so this does work with a private variable
let data2 = [{ id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" },
    salesEmployee2];
data2.forEach(item => {
    //instanceof understands that Employee2 is a class using this structure.
    if (item instanceof Employee2) {
        item.writeDept();
    }
    else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});
