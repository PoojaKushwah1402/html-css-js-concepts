const DisplayData = data => {
    const mainDiv = document.querySelector('.main')
    const newDiv = document.createElement('div');
    newDiv.textContent = JSON.stringify(data);
    mainDiv.appendChild(newDiv)
}

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

*/



