class Employee4 {
    constructor(name, company) {
        this.name = name;
        this.company = company;
        // no statements required
    }
    getDetails() {
        return `${this.name} works for ${this.company}`;
    }
}
class SportsProduct4 {
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
        // no statements required
    }
}
let data4 = [new Employee4("Bob Smith", "Acme"),
    new SportsProduct4("Running Shoes", "Running", 90.50),
    new Employee4("Dora Peters", "BigCo")];
data4.forEach(item => {
    if ("getDetails" in item) {
        console.log(`Person: ${item.getDetails()}`);
    }
    else {
        console.log(`Product: ${item.name}, ${item.price}`);
    }
});
