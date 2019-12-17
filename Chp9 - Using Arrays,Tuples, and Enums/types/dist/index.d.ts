declare function calculateTax(amount: any, discount?: any): number;
declare function calculateTax2(amount: any, discount?: number, something?: number): number;
declare function calculateTax3(amount: any, discount?: number, ...extraFees: number[]): number;
declare function calculateTax4(amount: number, discount?: number, ...extraFees: number[]): number;
declare let taxValue: number;
declare function calculateTax5(amount: number): number;
declare function calculateTax5(amount: null): null;
declare function writeValue(label: string, value: number): void;
declare let taxAmount: number;
