/*
onst obj = {
    key: 6,
    key2: "Zebra",
    key3: (e) => e.toUpperCase()
};

console.log(obj.key);
console.log(obj.key2);
console.log(obj.key3("this is a sentence"));
 

let person = {"name": "bill", "number":24};
let p_json = JSON.stringify(person);
console.log(p_json);

const data = JSON.parse(p_json);
console.log(data.name);
*/
// Callback, just a sample, we want to use promises now

let animal;

setTimeout(() => {
    animal = "Cat";
    console.log(animal);
}, 2000);

console.log(animal); // Doing it this way we will get 'undefined' because 2 seconds haven't passed.

