declare abstract class Person2 {
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, city: string);
    getDetails(): string;
    abstract getSpecificDetails(): string;
}
declare class Employee2 extends Person2 {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
    getSpecificDetails(): string;
}
declare class Customer extends Person2 {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    constructor(id: string, name: string, city: string, creditLimit: number);
    getSpecificDetails(): string;
}
declare class Supplier extends Person2 {
    readonly id: string;
    name: string;
    city: string;
    companyName: string;
    constructor(id: string, name: string, city: string, companyName: string);
    getSpecificDetails(): string;
}
declare let salesEmployee2: Employee2;
declare let data2: Person2[];
