//Typescript compiler may not understand significance of the constructor function
//It is able to match the objects it creates by shape
//Using type Employee above, the shape type helps the compiler apply types
let Employee = function (id, name, dept, city) {
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.city = city;
};
Employee.prototype.writeDept = function () {
    console.log(`${this.name} works in ${this.dept}`);
};
//creates Employee objects
//when the new keywork is used, the compiler uses the any type for the object assigned
//to the salesEmployee variable
//this is fixed by providing additional info about the shapes of the objects used.
let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
//now includes Person and Employee Objects
let data = [{ id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" },
    salesEmployee];
data.forEach(item => {
    // if("item instanceof Employee")
    if ("dept" in item) //now thhe type guard checks for a property instead
     
    //Typescript compiler is not able to use instanceof as a type guard for objects
    //creted by a constructor function
    {
        item.writeDept();
    }
    else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});
