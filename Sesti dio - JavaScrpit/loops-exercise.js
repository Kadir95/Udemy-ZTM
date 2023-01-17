// EXERCISE

let database = [
    {
        username: 'Kadir',
        password: 'tajna123'
    },
    {
        username: 'John',
        password: '225883'
    },
    {
        username: 'sandra',
        password: 'mango'
    }
]

let feed = [
    {
        username: 'Equipe de France',
        timeline: 'Expected win against Australia!',
    },
    {
        username: 'BHFUDBAL',
        timeline: 'Slika dana ☝',
    },
    {
        username: 'Udemy',
        timeline: 'New Year\'s sale soon!',
    }
]

function userValidation(username, password) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    } return false;
}

function signIn(username, password) {
    if (userValidation(username, password)) {
        console.log(feed);
    } else {
        alert("Wrong credentials, please try again.");
    }
}

let userNamePrompt = prompt("Please enter your username : ");
let passwordPrompt = prompt("Please enter your password : ");
signIn(userNamePrompt, passwordPrompt); 