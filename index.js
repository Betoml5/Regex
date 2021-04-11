// Regex

//Test Method
let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr));

// Or operator ||

// With this operator we can use differents vars as regex

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

// Ignore case with "i" we can ignore case.

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; //  Without i return false
let result = console.log(fccRegex.test(myString)); //  Return true

// Match method.
// The test method just return true / false.
// But with this method we extract the matches.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

// g flag. It returns the patterns more than once if it is in.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Returns [ 'Twinkle', 'twinkle' ]
let result = console.log(twinkleStar.match(starRegex)); // Change this line

// The dot . with the dot will match any one character.

// Example hu. could match with hug, hut, hum, huh,

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

// Match single charcter with multiple possibilities
// regex example /b[aiu]g/

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiuo]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

// We can use a regex for a sets os a groups of characters
// For example [a-e] a, b, c, d, e;

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//Match Numbers and Letters of the Alphabet

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

// Match Single Characters Not Specified
//For example, /[^aeiou]/gi matches all characters
//that are not a vowel. Note that characters like
// ., !, [, @, / and white space are matched -
//the negated vowel character set only excludes the vowel characters.

let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line

// Match Single Characters Not SpecifiedPassed
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//Match Characters that Occur One or More TimesPassed

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);

// Match Characters that Occur Zero or More TimesPassed

// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

//Find Characters with Lazy Matching

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

// Find One or More Criminals in a Hunt

let reCriminals = /C+/; // Change this line
