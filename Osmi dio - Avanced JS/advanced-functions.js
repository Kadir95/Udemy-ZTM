// CLOSURE - function is executed and will never be executed again; it will remember variables and references so its child scope can use them
// child has acces to parent scope; parent doesn't have access to child scope

const declareNumbers = () => {
    let a = 5;
    let b = 10;
    const addNumbers = () => {
        alert(a + b);
    }
    return addNumbers();
}

declareNumbers();

// CURYING - making function accept one parametar at a time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyByB = curriedMultiply(5);

// COMPOSE
const compose = (f, g) => (a) => f(g(a));
const addOne = (number) => number + 1;
compose(addOne, addOne)(5);

// Funtional purity - your functions doenst affect anything else
// Avoiding side effects
// DETERMINISTIC - a function always has a return value; always produces the same results given the same inputs


// EXERCISE 

//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const oneLine = (x, y) => x + y;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10);
addToTen(3); // 13


//Currying: What does the last line return?
const sum1 = (a, b) => a + b
const curriedSum1 = (a) => (b) => a + b;
curriedSum(30)(1); // 31

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const addFive = curriedSum(5)
addFive(12); // 17

//Composing: What does the last line return?
const composeF = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) // 16

//What are the two elements of a pure function?
// no side effects
// determistic

