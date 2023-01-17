// EXCERCISE

var database = [
    {
        username: 'Kadir',
        password: 'tajna123'
    }
];

var feed = [
    {
        username: 'Equipe de France',
        timeline: 'Benzema is out of the WC',
    },
    {
        username: 'SkySport',
        timeline: 'Qatar lost their opening game as hosts',
    }
]

var usernamePrompt = prompt("Enter your username  : ");
var passwordPromnpt = prompt("Enter your password : ");


function singIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(feed);
    } else {
        alert("Sorry, wrong credentials. Please try again");
    }
}

singIn(usernamePrompt, passwordPromnpt);



