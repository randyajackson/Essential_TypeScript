interface Person4 {
    name: string;
    getDetails(): string;
}
interface Product4 {
    name: string;
    price: number;
}
declare class Employee4 implements Person4 {
    name: string;
    company: string;
    constructor(name: string, company: string);
    getDetails(): string;
}
declare class SportsProduct4 implements Product4 {
    name: string;
    category: string;
    price: number;
    constructor(name: string, category: string, price: number);
}
declare let data4: (Person4 | Product4)[];
