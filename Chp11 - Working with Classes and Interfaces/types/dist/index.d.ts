declare type Product = {
    id: number;
    name: string;
    price?: number;
};
declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare type Employee = {
    id: string;
    company: string;
    dept: string;
};
declare type UnionType = {
    id: number | string;
    name: string;
};
declare type EmployedPerson = Person & Employee;
declare function correlateData(peopleData: Person[], staff: Employee[]): EmployedPerson[];
declare let hat: {
    id: number;
    name: string;
    price: number;
};
declare let gloves: {
    id: number;
    name: string;
    price: number;
};
declare let umbrella: {
    id: number;
    name: string;
    price: number;
};
declare let bob: {
    id: string;
    name: string;
    city: string;
    company: string;
    dept: string;
};
declare let people: Person[];
declare let employees: Employee[];
declare let dataItems4: EmployedPerson[];
declare let dataItems: (Product | Person)[];
declare let dataItems2: (Person & Employee)[];
declare function writePerson(per: Person): void;
declare function writeEmployee(emp: Employee): void;
declare function isPerson(testObj: any): testObj is Person;
