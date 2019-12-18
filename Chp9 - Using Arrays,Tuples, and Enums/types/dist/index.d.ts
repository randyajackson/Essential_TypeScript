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
declare function getRandomValue(): 1 | 2 | 3 | 4;
declare enum City {
    London = "LON",
    Paris = "PAR",
    Chicago = "CHI"
}
declare function getMixedValue(): 1 | "Hello" | true | City.London;
