// INCLUDES
"ES7 features are super cool!".includes("cool");
"Hello World!".includes("o", [4]);

const arr1 = [1, 2, 3, 4, 5];
arr1.includes(1);
arr1.includes(1, [0]);

// EXPONENTIOnAL OPERATOR
const squared = (x) => {
    return x ** 2;
}
const forth = (squared) => {
    return squared ** 2;
}
const cubed = (y) => y ** 3;


// EXCERCISE
// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes("John");

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that name/names
const check = dragons.filter(item => item.includes("John"));
if (check) {
    console.log(check);
}

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (num) => num ** 100;

// #4) Using your function from #3, put in the paramter 10000. What is the result?
const power1000 = (power100) => power100 ** 100;