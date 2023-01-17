// Pass by value
let a = 10;
let b = 5;
b = a;
b--;
console.log(b);

// Pass by reference
// saves time & memory
// everything can be changed at once (dangerous)
const obj1 = {
    user: 'Ming',
    password: 12345
}

const obj2 = obj1;

let c = ['a', 'b', 'c', 'd'];
let d = [].concat(c);
d.pop();

let obj3 = {
    value1: 19,
    value2: 20,
    value3: {
        deepValue: 200,
    }
}
let clone = Object.assign({}, obj3);
let clone2 = { ...clone };

obj3.value3.deepValue = 150;
console.log(obj3);
console.log(clone);
console.log(clone2);
let superClone = JSON.parse(JSON.stringify(obj3));

console.log(superClone);

