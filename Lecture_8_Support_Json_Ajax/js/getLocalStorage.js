
// Get saved data from sessionStorage
let firstName = localStorage.getItem('firstName');
let lastName = localStorage.getItem('lastName');
console.log("HERE : " + firstName);

document.getElementById("fname").innerHTML = firstName;
document.getElementById("lname").innerHTML = lastName;

// Remove saved data from sessionStorage
// sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
// sessionStorage.clear();
