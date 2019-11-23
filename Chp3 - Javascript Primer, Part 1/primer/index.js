let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);

let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

if (hatPrice == bootsPrice) {
    console.log("Prices are the same");
} else {
    console.log("Prices are different");
}

if (hatPrice === bootsPrice) {
    console.log("Prices are the same (Strict equality)");
} else {
    console.log("Prices are different (Strict equality)");
}

let totalPrice = hatPrice + bootsPrice;
console.log(`Total Price: ${totalPrice}`);

let totalPrice2 = Number(hatPrice) + Number(bootsPrice);
console.log(`Total Price (Casted): ${totalPrice2}`);

//comparing a string and a number succeeds
//concatinating a string in a number results in "100100"

console.log(`Type totalPrice 1: ${typeof totalPrice}`);
console.log(`Type totalPrice 2: ${typeof totalPrice2}`);
//the typeof null is an object
//it does this because it happened so long ago, a change would break legacy code
console.log(`Typeof null: ${typeof null}`);

//third = 0 is a way to provide a default value to prevent NaNs from occuring.
//anything + NaN is NaN
function sumPrices(first, second, third = 0) {
    return first + second + third;
}

//rest (...) must be on the last parameter
//rest is an array containing all the arguments which parameters are not defined

let sumPricesMoreFlexible = (...numbers) => {
    return numbers.reduce((total, val) => {
        return total + (Number.isNaN(Number(val)) ? 0: Number(val));
        //a way to check that all values are numbers
        //in arrow function return is only needed if returning more than one statement
    });
}
console.log(sumPrices(Number(hatPrice), Number(bootsPrice)));

console.log(sumPricesMoreFlexible(Number(hatPrice), Number(bootsPrice), "hello" , NaN, null));

l



