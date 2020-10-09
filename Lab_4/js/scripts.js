let myFullName = "Bill Farmer"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
//document.getElementsByClassName("header")[0].innerHTML="Gauravs Lab 4";

document.querySelector(".header").innerHTML="Gaurav's Lab 4";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
document.querySelector(".content").innerHTML="My name has 10 characters.";





var para = document.createElement("p");
var node = document.createTextNode("New");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name

// 6 Add a new line to your second paragraph

// 7 Return the final three characters of your last name to that new line

// 8 Substring your first and last name into two separate variables

// 9 Add the total length of your first and last names together

// 10 Display that total next to your name in your header
