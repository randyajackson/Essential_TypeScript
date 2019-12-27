interface Person4 {
    name: string;
    getDetails(): string;
}

interface Product4 {
    name: string;
    price: number;
}

class Employee4 implements Person4 {
    
    constructor(public name: string, public company: string) {
    // no statements required
    }

    getDetails() {
    return `${this.name} works for ${this.company}`;
    }
}

class SportsProduct4 implements Product4 {
    constructor(public name: string, public category: string,
    public price: number) {
    // no statements required
    }
}

let data4: (Person4 | Product4)[] = [new Employee4("Bob Smith", "Acme"),
                                  new SportsProduct4("Running Shoes", "Running", 90.50),
                                  new Employee4("Dora Peters", "BigCo")];

data4.forEach(item => {
    if ("getDetails" in item) {
        console.log(`Person: ${item.getDetails()}`);
    } else {
        console.log(`Product: ${item.name}, ${item.price}`);
    }
});