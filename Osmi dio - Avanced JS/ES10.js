// FLAT - unests nested arrays
const animalss = ['Dog', 'Cat', ['Shark'], [[[[[[[[['Polar Bear']]]]]]]]], ['Lion']];
animalss.flat(50);

const names = ['John', , , , , , , , , 'Bob', , , , , 'Milly', 'Marco'];
names.flat();

// FLATMAP
animalss.flatMap(animal => animal + " food and water");

// TRIM
const user1 = '        therokione@gmail.com           '
const user2 = '        johnstark123@yahoo.com'
const user3 = 'theamazon@gmail.com             ';
user1.trim(); // the best one
user2.trimStart();
user3.trimEnd();

// FROMENTRIES - from array to an object
let gameProfiles = [['MadMax', 187], ['Blazze', 98], ['Roki', 37]];
fromArrayToObject = Object.fromEntries(gameProfiles);
fromObjectToArray = Object.entries(fromArrayToObject);

// TRY-CATCH
// old
try {
    Name / "2";
} catch (error) {
    error
}

// new 
try {
    Nemo + fish
} catch {
    'Something went wrong';
}

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1], [2], [3], [[[4]]], [[[5]]]]
array.flat(3);


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
let greeting2 = greeting.flatMap(item => item.join(" "));

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
greeting2.join(" ").replace("!", "");

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
trapped.flat(50);

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   ';
const correctUserEmail3 = userEmail3.trim();

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
let users = { user1: 18273, user2: 92833, user3: 90315 };
users = Object.entries(users);

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
let updatedUsersID = users.map((item) => {
    return [item[0], item[1] * 2];
})

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const updatedUsers = Object.fromEntries(updatedUsersID);


































