const person = {"name": "bill", "number":24};

// Save data to sessionStorage
sessionStorage.setItem('json_item', JSON.stringify(person));
console.log("Stored person in session");
document.getElementById("message").innerHTML = "Stored person in session: " + JSON.stringify(person);
// Get saved data from sessionStorage
// let data = sessionStorage.getItem('json_item');

// Remove saved data from sessionStorage
// sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
// sessionStorage.clear();
