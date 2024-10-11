const bigNum = BigInt(123456789012345678901234567890);
console.log(bigNum); // 123456789012345678901234567890n



const isRainy = true;
const isSunny = false;

if (isRainy) {
    console.log("Umbrella needed!");
} else {
    console.log("No umbrella needed.");
}


const uniqueSymbol = Symbol('description');
const anotherSymbol = Symbol('description');

console.log(uniqueSymbol === anotherSymbol); // false
