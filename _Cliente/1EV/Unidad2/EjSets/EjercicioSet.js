let array = [100, 23, 23, 23, 23, 67, 45];
let outputArray = [];

array.forEach(element => {
    if (!outputArray.includes(element)) {
        outputArray.push(element);
    }
});

console.log("-- CONSOLE LOG ARRAY --");
console.log(outputArray);

let outputSet = new Set(Array.from(array));
let outputSet2 = new Set(array);
let outputSet3 = Array.from(new Set(array));

console.log("-- USANDO BUCLES CON SET --");
for (const element of outputSet2) {
    console.log(element);
}

console.log("-- CONSOLE LOG CON SET --");
console.log(outputSet);