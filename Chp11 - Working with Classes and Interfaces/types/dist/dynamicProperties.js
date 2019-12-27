class SportsProduct {
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}
class ProductGroup {
    constructor(...initialProducts) {
        initialProducts.forEach(p => this[p[0]] = p[1]);
    }
}
let group = new ProductGroup(["shoes", new SportsProduct("Shoes", "Running", 90.50)]);
group.hat = new SportsProduct("Hat", "Skiing", 20);
Object.keys(group).forEach(k => console.log(`Property Name: ${k}`));
// The ProductGroup class receives an array of [string, Product] tuples through its constructor,
// each of which is used to create a property using the string value as its name and the Product as its value. The
// compiler will allow the constructor to create the property and give it the any type, unless the noImplicitAny
// or strict compiler options are enabled, when an error is thrown.
// Classes can define an index signature to allow properties to be created dynamically outside the
// constructor (and to prevent noImplicitAny compiler errors). An index signature uses square brackets to
// specify the type of the property keys, followed by a type annotation that restricts the types that can be used to
// create dynamic properties
