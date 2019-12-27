declare type Person2 = {
    id: string;
    name: string;
    city: string;
};
declare class Employee2 {
    id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
declare let salesEmployee2: Employee2;
declare let data2: (Person2 | Employee2)[];
