let myFullName = "Bill Farmer"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
document.querySelector(".header").innerHTML="Gaurav's Lab 4.";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
const myContent = document.querySelector(".content");
const myFirstP = document.createElement("p");
myFirstP.className = "paragraph-one";
myContent.appendChild(myFirstP);

const mySecondP = document.createElement("p");
mySecondP.className = "paragraph-two";
myContent.appendChild(mySecondP);


// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
myFirstP.textContent= 'My name has 11 characters'

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
//mySecondP.textContent= 'Gaurav Dali';
let str = 'Gaurav Dali';
let res = str.charAt(2);
mySecondP.textContent = res.toUpperCase();
// 6 Add a new line to your second paragraph
mySecondP.textContent += "\n";

// 7 Return the final three characters of your last name to that new line
let mName = 'Gaurav Dali';
thirdChar = mName.substring(8, 11);
mySecondP.textContent = thirdChar;

let totalNum =str.length;
document.querySelector(".header").innerHTML="Gaurav's Lab 4. The total length of my first and last name together is " + totalNum + ".";
