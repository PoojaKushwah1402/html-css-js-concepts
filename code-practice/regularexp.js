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


/*

A regular expression pattern is composed of simple characters, such as /abc/, or a 
combination of simple and special characters, such as /ab*c/ or /Chapter (\d+)\.\d*/
/*
Using simple patterns
/abc/ matches character combinations in strings only when the exact sequence "abc" occurs 
(all characters together and in that order). Such a match would succeed in the strings "abc's?" 

Using special characters
/ab*c/: the * after "b" means "0 or more occurrences of the preceding item." In the string 
"cbbabbbbcdebc", this pattern will match the substring "abbbbc"
match a single "a" followed by zero or more "b"s followed by "c"

Modifiers
Modifiers are used to perform case-insensitive and global searches:
Modifier	Description
g	    Perform a global match (find all matches rather than stopping after the first match)
i	    Perform case-insensitive matching
m	    Perform multiline matching

[abc]	Any of the characters a, b, or c
[A-Z]	Any character from uppercase A to uppercase Z
[a-z]	Any character from lowercase a to lowercase z
[A-z]	Any character from uppercase A to lowercase z
/[h]/g will perform a match on whole string and will not stop when first h found

[^abc]	Not any of the characters a, b, or c
[^A-Z]	Not any character from uppercase A to uppercase Z
[^a-z]	Not any character from lowercase a to lowercase z
[^A-z]	Not any character from uppercase A to lowercase z

The (x|y) expression is used to find any of the alternatives specified.
let text = "re, green, red, green, gren, gr, blue, yellow";
let pattern= /(red|green)/g;
let text = "01234567890123456789";
let pattern = /(0|5|7)/g; 


Assertions:
Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other 
patterns indicating in some way that a match is possible (including look-ahead, look-behind, and 
conditional expressions).

The ^n quantifier matches any string with n at the beginning of it.
/^c/.test('cdsd')=true

The . metacharacter is matches any character, except newline or other line terminators.
let text = "That's hot!";
let pattern = /h.t/g;

The \w metacharacter matches word characters.
A word character is a character a-z, A-Z, 0-9, including _ (underscore).
/\w /.test('aAAbBzZ ') = true

The \W metacharacter matches non-word characters:
A word character is a character a-z, A-Z, 0-9, including _ (underscore).
/\W /g.test('aAAbBzZ fds s') = false

The \d metacharacter matches digits from 0 to 9.
/\d/g.test('aAAbBzZ fd33 s 3s') = true

The \D metacharacter matches non-digit characters.
/\D/g.test('dsd')=true
/\D/g.test('11') = false

The \s metacharacter matches whitespace character.
Whitespace characters can be:
A space character
A tab character
A carriage return character
A new line character
A vertical tab character
A form feed character
/\s/g.test('\n') = true
/\s/g.test(' ') = true

The \S metacharacter matches non-whitespace characters.
/\S/g.test(' \n ') = false
/\S/g.test(' \n fdf') = true

The \b metacharacter matches at the beginning or end of a word.
Search for the pattern LO at the beginning of a word like this:
\bLO
Search for the pattern LO at the end of a word like this:
LO\b
/\b ytt\b /g.test('yttcd ytt ') = true

The \0 metacharacter maches NUL characters.

The \n character matches newline characters.

The \xxx metacharacters matches the Latin character by an octal number (xxx).

The \xdd metacharacters matches Latin characters specified by a hexadecimal number (dd).

The \udddd metacharacters matches Unicode characters specified by a hexadecimal number (dddd).

The n+ quantifier matches any string that contains at least one n.

The n* quantifier matches any string that contains zero or more occurrences of n.

The n? quantifier matches any string that contains zero or one occurrences of n.

The n{X} quantifier matches any string that contains a sequence of X n's.
X must be a number.
/c{3}/.test('33cdcscccd') = true

The n{X,Y} quantifier matches any string that contains a sequence of X to Y n's.
X and Y must be a number.
/c{2,5}/.test('33cdcscdcccccc') = true

The n{X,} quantifier matches any string that contains a sequence of at least X n's.
X must be a number.
/c{4,}/.test('33cdcscdcccc') = true

The n$ quantifier matches any string with n at the end of it.
Tip: Use the ^n quantifier to match any string with n at the BEGINNING of it.

The ?=n quantifier matches any string that is followed by a specific string n.
/a(?=dd)/.test('addc') = true

The ?!n quantifier matches any string that is not followed by a specific string n.
/a(?!d)/.test('afddc') = true

check if string contain only alphabet : /^[a-z]+$/i
check if string containe only alphabet with hyphen :  /^[a-z]+(-[a-z]+)*$/i

*/

let str = 'hello you there 123 hd-hjer 678';
let str1= 'jds dsaf lkdf kdsa fkldsf, adsbf ldka ads? asd bfdal ds bf[l. akf dhj ds 878 dwa WE DE 7475 dsfh ds RAMU 748 dj'

const findStr = str => {
  let newStr = str.split(' ');
  let count = 0;
  let patt = /^[a-z]+(-[a-z]+)*([?,]*)$/i
  
  for(let x in newStr) {
    let len = newStr[x].length;
    let word = newStr[x]
    if(/[,.?]/.test(newStr[x][len-1])){
       word = word.slice(0,-1)
       }
    
      if(patt.test(word)){
        count++
      }else {
        //console.log(newStr[x],word)
      }
  }
  
  console.log(count)
}

findStr(str1)