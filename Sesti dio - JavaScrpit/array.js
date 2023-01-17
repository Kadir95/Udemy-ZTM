var name = 'Kadir';
var names = ['Kadir', 'John', 'Bob', 'Rok'];
var numbers = [1, 2, 3, 4];
var booleans = [true, false, false];
var functions = [function prompt() { prompt("Enter you name"); }, function console() { console.log("Hello there!"); }];



var updateNames = names.concat(["Joe", "Donald"]);


// EXCERCISE
//1
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift();
array.sort();
array.push("Kiwi");
array.splice(0, 1);
array.reverse();

//2
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
array2[1][1][0];