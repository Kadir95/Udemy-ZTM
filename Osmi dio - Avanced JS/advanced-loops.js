const shoppingBag = ['Apples', 'Oranges', 'Watermelon', 'Dates'];
const detailedShoppingBag = {
    'Apples': 10,
    'Oranges': 10,
    'Watermelon': 1,
    'Dates ': 50,
}
// 1
for (let i = 0; i < shoppingBag.length; i++) {
    console.log(shoppingBag[i]);
}

// 2
let i = 0;
do {
    console.log(shoppingBag[i]);
    i++;
} while (i < shoppingBag.length)

// 3
shoppingBag.forEach(item => {
    console.log(item);
})

// FOR OF - ITERATING; arrays and strings; can't be used on objects
// ITERATING - looping over items one by one
for (item of shoppingBag) {
    console.log(item);
}

// FOR IN - ENUMERATING; objects; can be used on arrays;
// ENUMERATING - counting values
for (item in detailedShoppingBag) {
    console.log(item);
}

// You can iterate arrays; you can't iterate objects
// You can enumerate arrays/strings AND objects
// ITERAING - programm sees them as single items=value, while objects have property AND value
// ENUMERATING - programm sees them as multiple items, property and value


// EXERCISE
// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    return largest;
}

function biggestNumberInArray2(arr) {
    let largest = 0;
    arr.forEach(item => {
        if (largest < item) {
            largest = item;
        }
    })
    return largest;
}

function biggestNumberInArray3(arr) {
    let largest = 0;
    for (item of arr) {
        if (largest < item) {
            largest = item;
        }
    }
    return largest;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket(basket, lookingFor) {
    for (item in basket) {
        if (item === lookingFor) {
            return `${lookingFor} is in the basket`;
        }
        return 'that does not exist in your basket'
    }
}