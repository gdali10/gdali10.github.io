// Function to save data to localStorage
function setLocalStorage(){
    let firstName = document.getElementById("fname").value;
    console.log("firstName : " + firstName);
    let lastName = document.getElementById("lname").value;
    localStorage.setItem('firstName',firstName);
    localStorage.setItem('lastName',lastName);
}

// Get saved data from localStorage
// let data = localStorage.getItem('json_item');

// Function to Remove saved data from localStorage
function removeLocalStorage(){
    
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
}
// Remove all saved data from sessionStorage
// localStorage.clear();
