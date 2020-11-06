const link = document.querySelector('a'); 
// Using querySelector only gives you the first 'a' tag; however, 
//   it allows you to select elements using CSS selectors.
// You could use Document.querySelectorAll(), which matches every element in the document 
//    that matches the selector,  and stores references to them in an array-like object called a NodeList.

link.textContent = 'Mozilla Developer Network 2';
link.href = 'https://developer.mozilla.org';