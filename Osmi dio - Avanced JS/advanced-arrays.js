let array = [1, 2, 3, 4];
let arrayTimesFive = [];
let newArray = array.forEach((item) => {
    array.push(item * 5);
    arrayTimesFive.push(item * 5);
})
console.log(array, arrayTimesFive);

// MAP - makes a new array; requires a return; pure function; makes a new array

const stringArray = ['John', 'Bob', 'Ali', 'Nedim'];
const mappArray = stringArray.map((item) => {
    return item + '!';
})

console.log(mappArray);

// FILTER - makes a new array; requires a return; returns only if statement is true

const filterArray = array.filter(item => {
    return item >= 10;
})
console.log(filterArray);

// REDUCE - reduces array to single item

const reverseArray = array.reverse();

const reduceArray = reverseArray.reduce((accumulator, item) => {
    return accumulator + item; // adds all items to each other
}, 2)

console.log(reduceArray);

// EXCERCISE 

// Complete the below questions using this array:
const arrays = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const forEach = [];
arrays.forEach(item => forEach.push(item.username + '!'))
console.log(forEach);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mappedArray = arrays.map(item => item.username + '?')
console.log(mappedArray);


//Filter the array to only include users who are on team: red
const filteredArray = arrays.filter(item => item.team === 'red');
console.log(filteredArray);

//Find out the total score of all users using reduce

const reducedArray = arrays.reduce(((acc, item) => acc + item.score), 0);
console.log(reducedArray);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArrayj = arrayNum.map((num, i) => {
    return num * 2;
})

