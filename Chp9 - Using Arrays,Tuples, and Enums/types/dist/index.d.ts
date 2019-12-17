declare function calculateTax(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare let prices: number[];
declare let names: string[];
declare let hat: [string, number];
declare let gloves: [string, number];
declare let products: [string, number][];
declare let tupleUnion: ([string, number] | boolean)[];
declare enum Product {
    Hat = 0,
    Gloves = 1,
    Umbrella = 2
}
declare let items: [Product, number][];
