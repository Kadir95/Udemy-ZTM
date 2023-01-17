// IIFE - Immediately Invoked Funtion Export; wraps code in brackets; that way it doesnt polute global
//first.js
let myApp = {};

//second.js
(function () {
    myApp.add = function (a, b) {
        return a * b;
    }
})();

// MODULES - pieces of code; when bundled together they make apps;
// MODULE BUNDLER - bundles modules together into one large file before app goes online

// BROWSERIFY - used CommonJS; module bundler
//first.js
module.exports = function multiply(a, b) {
    return a + b;
}

//second.js
let multiply = require("./first.js");

// ES6 + WEBPACK2 -  import & export; 
//first.js
export let subtract = (a, b) => { // export - we can export multiple functions
    return a - b;
}
export default function subtract(a, b) { // export default - we can export only one funciton
    return a - b;
}

//second.js
import { subtract } from "./first.js";
import subtract from "./first.js";