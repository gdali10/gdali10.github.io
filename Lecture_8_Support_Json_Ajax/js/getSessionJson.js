//const person = {"name": "bill", "number":24};

// Save data to sessionStorage
//sessionStorage.setItem('json_item', JSON.stringify(person));

// Get saved data from sessionStorage
let data = sessionStorage.getItem('json_item');
console.log("HERE");
const person = JSON.parse(data);
document.getElementById("message").innerHTML = person.name + " number: " + person.number;

// Remove saved data from sessionStorage
// sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
// sessionStorage.clear();
