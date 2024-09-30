console.log(12 * 8);
let x = 0; // Başlangic deyer
x += 10 / 2;
console.log(x);
let num1 = 20;
let num2 = 17;
console.log(num1 + num2);


let name = 'Javid';
let surname = 'Mammadov';
let year = '2001';
let info = `${'Javid'} ${'Mammadov'} ${'2001'}`;
console.log(info);
console.log(17 % 12);


let cityName = 'Baku';
cityName = 'Gence';
console.log(cityName);

console.log('test1', test); 
{
    let test = "something";
    console.log('test2', test); 
}
console.log('test3', test);  

console.log('test1', test); 
{
    var test = "something";
    console.log('test2', test); 
}
console.log('test3', test); 

let name = "Ulfat"; // string
let surname = 'Zakirli'; // string
let year = 2000; // number
year = "2000"; // string
let city; // undefined
let qualification = null; // object
let obj = { name: 'ulfat' }; // object
let arr = ['a', 'b', 'c']; // object 



const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];
const sum = arr1.reduce((acc, curr) => acc + curr, 0);
console.log(sum);



arr1.push(10, 88);
console.log(arr1);

arr1.splice(0, 2);
console.log(arr1);


arr1.unshift(0, 9, 11);
console.log(arr1);




arr1.splice(0, 4);
console.log(arr1);



const user = {
    name: 'Ulfat',
    surname: 'Zakirli',
    age: 25,
    city: 'Baku'
};





user.name = 'Jhon';

console.log(user);


console.log(Object.keys(user));


const mixedObject = {
    name: "ulfat",
    age: 25,
    isStudent: false,
    hobbies: null,
    year: 2024,
    address: undefined,
    surname: 'Zakirli',
    contactInfo: {
        email: "ulfat@example.com",
        phone: null
    },
    scores: [98, 87, 92],
};

for (const key in mixedObject) {
    if (typeof mixedObject[key] === 'string') {
        console.log(key);
    }
}

for (const key in mixedObject) {
    if (typeof mixedObject[key] === 'number') {
        console.log(key);
    }
}


for (const key in mixedObject) {
    if (typeof mixedObject[key] === 'boolean') {
        console.log(key);
    }
}


for (const key in mixedObject) {
    if (typeof mixedObject[key] === 'undefined') {
        console.log(key);
    }
}



for (const key in mixedObject) {
    if (typeof mixedObject[key] === 'object' && mixedObject[key] !== null) {
        console.log(key);
    }
}


