    let ProductProto = {
    toString: function() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
   }

    let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax() {
    return Number(this.price) * 1.2;
    }
   };

   let boots = {
    name: "Boots",
    price: 100,
    getPriceIncTax() {
    return Number(this.price) * 1.2;
    }
   }

   let hatPrototype = Object.getPrototypeOf(hat);
   console.log(`Hat Prototype: ${hatPrototype}`);

   hatPrototype.toString = function() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
   }

   console.log(hat.toString());
   console.log(boots.toString());


   let bootsPrototype = Object.getPrototypeOf(boots);
   console.log(`Boots Prototype: ${bootsPrototype}`);
   
   console.log(`Common prototype: ${ hatPrototype === bootsPrototype}`);

   console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax() }`);
   console.log(`toString: ${hat.toString()}`);

   Object.setPrototypeOf(hat, ProductProto);
   Object.setPrototypeOf(boots, ProductProto);

   console.log(hat.toString());
   console.log(boots.toString());

   //constructor function
   let Product = function(name, price) {
    this.name = name;
    this.price = price;
   }

   Product.prototype.toString = function() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
   }

let car = new Product("Car", 100);
let wheel = new Product("Wheel", 100);
console.log(car.toString());
console.log(wheel.toString());