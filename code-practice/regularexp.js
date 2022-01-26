//Regular expression (Regx)

// Regular expressions are patterns used to match character combinations in strings. In JavaScript, 
// regular expressions are also objects. These patterns are used with the exec() and test() methods of RegExp,
// and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String. .

// Creating a regular expression
// Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:
//   let re = /ab+c/;
// Or calling the constructor function of the RegExp object, as follows:
//   let re = new RegExp('ab+c');
// Using the constructor function provides runtime compilation of the regular expression. Use the constructor 
// function when you know the regular expression pattern will be changing, or you don't know the pattern and are 
// getting it from another source, such as user input.
