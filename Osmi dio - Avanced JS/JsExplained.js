// MEMORY HEAP - memory allocation; variable storage
// MEMORY LEAK - unused memory that blocks the memory heap; gets deleted if unused;
let a = 10;
let b = 100;
let c = 1000;


// CALL STACK - code gets executed line by line;
// STACK OVERFLOW - stack is full and can't empty itself
alert('First');
setTimeout(() => {
    alert('Second');
}, 3000);
alert('Third');

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

// RECURSION -  function calls itself; infinity loop
const foo = () => {
    foo();
}
foo();

// JS is a single threaded lang. that can be non blocking
// Single threaded - has only one stack
// SYNCHRONOUS programming - line by line; line 2 wont start unless line 1 is fully executed
// Non-blocking - not waiting for delayed/large code to be completed
// ASYNCHRONOUS programming - execuding code which is ready to be executed; not waiting; using callback to execute delayed code