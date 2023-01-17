// If

var name = "Kadir";
if (name === "Kadir") {
    alert("Selam, Kadir");
}

// Else

var surname = "Alibasic";
if (surname === "Alibasic") {
    alert("Selam, Alibasicu");
} else {
    alert("Hmmm, ne poznajem te.")
}

// Else If

var footballer = 'Ronaldo';
if (footballer === 'Ronaldo') {
    alert("Hey Ronaldo, what's up?");
} else if (footballer === 'Muller') {
    alert("Hallo Muller, wie geht's?");
} else {
    alert("I don't know you.");
}

// Logic operator OR - ||

var userName = 'John';
if (userName === 'John' || userName === 'Bob') {
    alert("Welcome John or Bob, enjoy your stay!");
} else {
    alert("Wrong username, try again!");
}

// Logic operator AND - &&

var firstName = 'John';
var secondName = 'Smith';
if (firstName === 'John' && secondName === 'Smith') {
    alert("Hello, John Smith");
}

// Logic Operator NOT - !

var phone = 'Samsung';
if (!(phone === 'iPhone')) {
    alert("You are an Android user!");
}