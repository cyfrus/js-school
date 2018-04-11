
# 02 Program Structure: Loops and Conditional Execution

### Introduction

* Procitat *Eloquent JavaScript > Program Structure*
* Pogledat video za Truthy i Falsy values: https://www.youtube.com/watch?v=FzNQ2USorGY
* Pogledat video za Conditional Execution: https://www.youtube.com/watch?v=TPDz_84UJGw
* Pogledat while loop, break, continue: https://www.youtube.com/watch?v=B6ArKUjrYlo
* Pogledat do...while loop: https://www.youtube.com/watch?v=RDLhSJVMJMY
* Pogledat for loop: https://www.youtube.com/watch?v=zpk6_dXiSog

### Truthy/Falsy values #1

Nabroji barem 6 Falsy vrijednosti. Nabroji barem 6 Truthy vrijednosti.

### Truthy/Falsy values #2

```js
if ('') {
	console.log('Block #1');
}
if (' ') {
	console.log('Block #2');
}
if ('  ') {
	console.log('Block #3');
}
if (0) {
	console.log('Block #4');
}
if ('0') {
	console.log('Block #5');
}
if (1) {
	console.log('Block #6');
}
if ('1') {
	console.log('Block #7');
}

// koji ce se blokovi ispisati na konzolu a koji nece? zasto?
```

### Multiples

Napisati program koji provjerava jesu li 2, 3, 5 i 7 višekratnici broja unesenog preko "prompt" funkcije.  
Output should look like this: http://take.ms/rSBNh

### Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

```js
#
##
###
####
#####
######
#######
```

### FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

### Even/odd number

Napisat program koji provjerava je li uneseni broj paran ili neparan. Omoguciti korisniku ponavljajuci unos brojeva preko petlje i "prompt" funkcije.  
Omoguciti prekid izvrsavanja programa kada je unesenea vrijednost jednaka 0 ili nije valjani broj.  
Output should look like this: http://take.ms/qRIG4

### Celsius to fahrenheit conversion table

Napisati program koji ispisuje pretvaracku tablicu Celsiusa u Fahrenhite. Temperature u tablici trebaju biti u rasponu od -50 do +50 Celsiusa s porastom od 5 stupnjeva.  
Fromula za pretvorbu Celsiusa u Fahrenhite je "f = (9/5) * c + 32".  
Output should look like this: http://take.ms/EMtpj

### Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

```js
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```

When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

### Leap year

Napisat program koji provjerava je li godina unesenea preko "prompt" prozora prijestupna. Prijestupna godina je svaka onda koja je djeljiva s 4 osim ako nije dijeljiva i sa 100.  
Međutim, prijestupna je i svaka ona koja je djeljiva s 400.

# 03 Functions

### Min of 2 numbers

Write a function minNumber that takes two numbers and returns their minimum.  
Ne koristiti native JS funkcije `Math.min()` i `Math.max()`.

```js
console.log(minNumber(0, 10));	// 0
console.log(minNumber(0, -10));	// -10
```

### Max of 3 numbers

Napisi funkciju koja prima 3 broja i vraca najveci.  
Ako se funkcija pozove bez argumenata neka vrati `-Infinity`.  
Ako se funckija pozove sa argumentom koji se nemoze pretvorit u broj neka vrati `NaN`.  
Parametre pokusati pretvoriti u broj pomocu `Number()` funkcije, npr. `var a = Number(a)`.  
Ne koristiti native JS funkcije `Math.min()` i `Math.max()`.  
Omoguciti da se funkcija moze pozvati i sa manje od 3 argumenta.  
Primjer outputa funkcije:

```js
console.log(maxNumber());						// -Infinity
console.log(maxNumber(1, 2, "lorem ipsum"));	// NaN
console.log(maxNumber(1, 2, 3));				// 3
console.log(maxNumber(5, 14));					// 14
console.log(maxNumber(5, "14"));				// 14
```

### Prime number

Write a JavaScript function that accepts a number as a parameter and checks if the number is prime or not.  
A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

```js
console.log(isPrimeNumber(-2));	// false
console.log(isPrimeNumber(1));	// false
console.log(isPrimeNumber(7));	// true
console.log(isPrimeNumber(13));	// true
```

### Bean counting

You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

```js
console.log(countBs("BBC"));				// 2
console.log(countChar("kakkerlak", "k"));	// 4
```

### Countdown

Write a JavaScript function that counts down from a number to 1 to console. Write a similar function that counts up from 1 to number. Use recursion to implement both functions.

```js
countDown(10);
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

countUp(10);
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
```

### Even/odd number

Operator % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

* Zero is even.
* One is odd.
* For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

```js
console.log(isEven(50));	// true
console.log(isEven(75));	// false
console.log(isEven(-1));	// ??
```

### Factorial

Using recursion write a JavaScript function to calculate the factorial of a number.  
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120  
The value of 0! is 1.

### Global and local scope #1

```js
<script>
var a = 1;
function foo() {
	var a = 2;
	console.log(a); // koja vrijednost ce se ispisati? zasto? sto treba dodati da se ispise globalna varijabla?
}
foo();
</script>
```

* Eloquent JavaScript > Functions > Parameters and scopes  
http://eloquentjavascript.net/03_functions.html#h_u4j2OhpYkg
* Eloquent JavaScript > Functions > Nested scope  
http://eloquentjavascript.net/03_functions.html#h_c/Ms2Ed/N0
* Pogledat video do 09:15 - https://www.youtube.com/watch?v=iSlSxDNarDY
* Pogledat video - https://www.youtube.com/watch?v=WqXeFiii9k0

### Global and local scope #2

```js
<script>
var a = 1;
function foo() {
	var a = 2;
	function bar() {
		var a = 3;
		console.log(a); // koja vrijednost ce se ispisati? zasto?
		// mozemo li odavde pristupiti i ispisati varijablu "a" koja ima vrijednost "2"
	}
	bar();
}
foo();
</script>
```

### Global and local scope #3

```js
<script>
var a = 1;
function foo() {
	var a = 2;
	function bar1() {
		console.log(a); // kojoj varijabli se pristupa?
	}
	var bar2 = function() {
		console.log(a); // kojoj varijabli se pristupa?
	};
	bar3 = function() {
		console.log(a); // kojoj varijabli se pristupa?
	}
	window.bar4 = function() {
		console.log(a); // kojoj varijabli se pristupa?
	}
	bar1();
	bar2();
	bar3();
	bar4();
}
foo();

// mozemo li odavde pozvati funkciju bar1()? zasto?
// mozemo li odavde pozvati funkciju bar2()? zasto?
// mozemo li odavde pozvati funkciju bar3()? zasto?
// mozemo li odavde pozvati funkciju bar4()? zasto?
</script>
```

### Global and local scope #4

```js
<script>
var a = 1;
function foo() {
	var a = 2;

	function bar() {
		var a = 3;
	}
	bar();

	if (true) {
		console.log(a); // kojoj varijabli se pristupa? koja vrijednost ce se ispisati? zasto?
	}
}
foo();
</script>
```

### Global and local scope #5

```js
<script>
var a = 1; // a je globalna varijabla

if (true) {
	var b = 1; // da li je b globalna varijabla? zasto?
}
</script>
```

### Global and local scope, hoisting #1

Explain what is variable hoisting. Write a simple example.  
Explain what is function hoisting. Write a simple example.

### Global and local scope, hoisting #2

```js
<script>
var a = 1;
function foo() {
	console.log(a); // kojoj varijabli se pristupa? koja vrijednost ce se ispisati? zasto?
	
	var a = 2;
}
foo();
</script>
```

### Global and local scope, hoisting #3

```js
<script>
var a = 1;
function foo() {
	function bar() {
		console.log(a); // kojoj varijabli se pristupa? koja vrijednost ce se ispisati? zasto?
	}
	bar();
	var a = 2;
}
foo();
</script>
```

### Global and local scope, hoisting #4

```js
<script>
var a = 1;

foo(); // pozvali smo funkciju prije njene definicije u kodu. da li ovo radi? zasto?
bar(); // pozvali smo funkciju prije njene definicije u kodu. da li ovo radi? zasto?

function foo() {
	console.log(a);
}
var bar = function() {
	console.log(a);
}
</script>
```

# 04 Strings, Arrays and Objects

* Pogledat video za string-ove: https://www.youtube.com/watch?v=O7KwWw3KLw4
* Pogledat video za array-ove: https://www.youtube.com/watch?v=H4Sf4suR3C4
* Pogledat objects, properties and methods: https://www.youtube.com/watch?v=8jkyqWSimDc
* Pogledat primitive types vs reference types: https://www.youtube.com/watch?v=mh-hPzDfb_Q
* Procitat *Eloquent JavaScript > Data Structures: Objects and Arrays*  
Preskocit ova poglavlja (ne trosit vrijeme na kompliciranu matematiku):
  * The lycanthrope’s log
  * Computing correlation
  * Objects as maps
  * The final analysis

```js
var obj1 = {name: 'John'};
var obj2 = obj1;

// `obj1` i `obj2` su varijable preko kojih mozemo doci do objekta `{name: 'John'}` koji je u memoriji.
// u memoriji postoji samo jedan objekt `{name: 'John'}`, preko varijabli `obj1` i `obj2` mozemo mijenjati taj objekt.
// kazemo da varijable `obj1` i `obj2` pokazuju na taj objekt. ovakve varijable nazivamo "referenca".
```

## Primitive vs reference data types

### Primitive vs reference data types #1

Nabroji koji su primitive data types a koji reference data types u Javascript-u.

### Primitive vs reference data types #2

```js
var obj1 = {name: 'John'};
var obj2 = obj1;

// koliko referenci imamo u programu?
// koliko objekata imamo u memoriji?

obj1.name = 'Mike';	// ako promijenimo obj1.name da li se promijenila vrijednost obj2.name? zasto?
obj2.name = 'Alex';	// ako promijenimo obj2.name da li se promijenila vrijednost obj1.name? zasto?

// koja je trenutacna vrijednost name property-a objekta {name: 'John'}?
```

### Primitive vs reference data types #3

```js
var obj1 = {name: 'John'};
var obj2 = obj1;
var obj3 = {name: 'John'};

// koliko referenci imamo u programu?
// koliko objekata imamo u memoriji?

if (obj1 === obj2) {
	// hoce li program uci u ovaj if block? zasto?
}

if (obj1 === obj3) {
	// hoce li program uci u ovaj if block? zasto?
}
```

### Primitive vs reference data types #4

```js
var obj1 = {name: 'John'};
var obj2 = obj1;

obj1 = 5;

// koja je vrijednost obj2 sada? zasto?
```

### Primitive vs reference data types #5

```js
var obj1 = {name: 'John'};
var obj2 = obj1;

obj1 = {name: 'Mike'};

// koliko objekata postoji u memoriji sada?
// koja je vrijednost varijable obj2 sada? zasto?

obj1 = obj2;

// na sto referenca obj1 pokazuje sada?
// mozemo li ikako pristupiti objektu "{name: 'Mike'};" kojeg smo stvorili u liniji 4?
// koliko objekata postoji u memoriji sada?
```

### Primitive vs reference data types #6

```js
function updateObject(param) {
	param.name = 'Mike';
}

function updateArray(param) {
	param.push(4);
}

var obj = {name: 'John'};
var arr = [1, 2, 3];

updateObject(obj);
updateArray(arr);

// koju vrijednost obj ima sada? zasto?
// koju vrijednost arr ima sada? zasto?
```

### Primitive vs reference data types #7

```js
function updateObject(param) {
	param = {name: 'John'};
}

function updateArray(param) {
	param = [1, 2, 3, 4];
}

var obj = {name: 'Chris'};
var arr = [1, 2, 3];

updateObject(obj);
updateArray(arr);

// koju vrijednost obj ima sada? zasto?
// koju vrijednost arr ima sada? zasto?
```

## Strings

### Basic string methods & properties

```js
var str = '  Lorem ipsum, lorem ipsum.  ';

console.log(str.length); // sto vraca length property?

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf('ipsum'));
console.log(str.split(' '));
console.log(str.slice(-8, -3));
console.log(str.trim());
console.log(str.charAt(2));

// sto vraca svaka od ovih metoda? koje od ovih metoda nerade u IE8? zasto nerade?
```

### String type check

Write a JavaScript function to check if an input is a string.

```js
console.log(isString());		// false
console.log(isString(2));		// false
console.log(isString(''));		// true
console.log(isString('abc'));	// true
```

### Blank string check

Write a JavaScript function to check whether a string is blank or not. If the user specifies an argument other than string return false.

```js
console.log(isBlank(2));		// false
console.log(isBlank(''));		// true
console.log(isBlank('abc'));	// false
```

### Extract part of string

Write a JavaScript function to remove specified number of characters from a string.

```js
console.log(extractString('Lorem ipsum dolor sit.', 5));	// Lorem
```

### Capitalize first letter

Write a JavaScript function to capitalize the first letter of a string.

```js
console.log(capitalizeString('lorem ipsum.'));	// Lorem ipsum.
```

### Check if letter upper case

Write a function to test if the character at the provided index is upper case.

```js
console.log(isUpperCase('Hello World.', 0));	// true
console.log(isUpperCase('Hello World.', 1));	// false
console.log(isUpperCase('Hello World.', 6));	// true
```

### Concatenate string n times

Write a function to concatenate a given string n times (make the default n = 1).

```js
console.log(concatenateString('lorem'));	// lorem
console.log(concatenateString('lorem', 0));	// 
console.log(concatenateString('lorem', 3));	// loremloremlorem
```

### Humanize number

Write a function to convert a Cardinal into an Ordinal number by adding a suffix.  
Suffix is added based on the last digit of a number: 1st, 2nd, 3rd.  
Other numbers are suffixed with th: 4th, 9th, 10th.  
Exception are numbers 11-13: 11th, 12th, 13th.

```js
console.log(humanizeNumber(1));		// 1st
console.log(humanizeNumber(2));		// 2nd
console.log(humanizeNumber(3));		// 3rd
console.log(humanizeNumber(4));		// 4th
console.log(humanizeNumber(9));		// 9th
console.log(humanizeNumber(10));	// 10th
console.log(humanizeNumber(11));	// 11th
console.log(humanizeNumber(12));	// 12th
console.log(humanizeNumber(13));	// 13th
console.log(humanizeNumber(21));	// 21st
console.log(humanizeNumber(302));	// 302nd
console.log(humanizeNumber(1103));	// 1103rd
```

### Pad string

Write a function to pad a string to specified length.

```js
console.log(padString('2', '-', 5));			// ----2
console.log(padString('cat', '-', 5));			// --cat
console.log(padString('house', '-', 5));		// house
console.log(padString('lorem ipsum', '-', 5));	// lorem ipsum

console.log(padString('2', '0', 7));			// 0000002
console.log(padString('15', '0', 7));			// 0000015
console.log(padString('3014', '0', 7));			// 0003014
```

## Arrays

### Basic array methods & properties

```js
var arr = [1, 2, 3, 4, 5];
console.log(arr.length); // sto je length property?

// arr.push(...)
// arr.unshift(...)
// arr.pop(...)
// arr.shift(...)
// arr.splice(...)
// arr.reverse(...)
// arr.sort(...)
// arr.join(...)
// arr.indexOf(...)
// arr.filter(...)

// opisi i demonstriraj sto radi svaka od metoda nabrojanih gore. koje od ovih metoda mijenjaju array in place a koje ne?
// koje od ovih metoda nerade u IE8? zasto nerade?
```

### Looping an array

```js
var arr = [1, 2, 3, 4, 5];

// napisi petlju koja ce proci kroz sve elemente (od prvog do zadnjeg) array-a i ispisati ih u konzoli.
// napisi drugu petlju koja radi isto samo obrnutim redosljedom (od zadnjeg do prvog).
```

### Array elements #1

```js
var arr = [1, 2, 3];

console.log(arr[0]); // kojem elementu pristupamo? kojem indexu pristupamo?

console.log(arr[10]);

// koju vrijednost dobijemo kada pristupamo indexu kojeg nema u arrayu?
// da li dobijemo error?
// hoce li se array prosirit (hoce li se promijeniti length) ako pristupimo indexu kojeg nema?
```

### Array elements #2

```js
var arr1 = [1, 2, 3];
arr1.pop();
arr1.pop();
arr1.pop();

var arr2 = [1, 2, 3];
arr2.length = 0;

// jesu li ova 2 bloka ekvivalentna? da li je stanje oba arraya sada isto?
```

### Array elements #3

```js
var arr = [1, 2, 3, 4];

arr.push(5);

// koliko elemenata array ima? koji su?

arr.length = 0;
arr.push(6);

// koliko elemenata array ima? koji su?

arr[3] = 7;

// koliko elemenata array ima? koji su? sto se nalazi na indexima 1 i 2?
// koja je vrijednost length property-a?

arr.length = 0;
arr[arr.length] = 8;

// koliko elemenata array ima? koji su? koja je vrijednost length property-a?

arr.push(8);

// u svakoj od zadnje 2 linije smo dodali novi element u array.
// ima li razlike izmedu ta 2 nacina dodavanja elementa u array?
```

### Split string into words

Write a JavaScript function to split a string and convert it into an array of words.

```js
console.log(splitString('Lorem ipsum dolor'));	// ["Lorem", "ipsum", "dolor"]
```

### Truncate words

Write a function to truncate a string to a certain number of words.

```js
console.log(truncateWords('Lorem ipsum dolor sit amet.', 3));	// Lorem ipsum dolor
```

### Alphabetize string

Write a function to alphabetize a string, i.e. sort the letters alphabetically. Remove the whitespace.

```js
console.log(alphabetizeString('Lorem ipsum'));	// Leimmoprsu
console.log(alphabetizeString('gfedcba'));	// abcdefg
```

### Extract name initials

Write a JavaScript function to convert a name into initials.

```js
console.log(getInitials('John Doe'));		// J. D.
console.log(getInitials('Donald Trump'));	// D. T.
```

### Clone array

Write a function to clone (make a shallow copy, not deep copy) an array.

```js
var arr1 = [1, 2, 3, 4];
var arr2 = arrayClone(arr1);

arr2.push(5);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4, 5]
```

### Sort array of numbers

Assume we have an array of numbers. Write a function that does a numeric sort on such array. Don't sort the array in place i.e. function should return a new array.

```js
var arr1 = [135, 2, 5, 1, 23, 10];
var arr2 = numericSort(arr1);
console.log(arr1); // [135, 2, 5, 1, 23, 10]
console.log(arr2); // [1, 2, 5, 10, 23, 135]
```

### Sum of a range

Write a `range1` function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a `sum` function that takes an array of numbers and returns the sum of these numbers.

Write a `range2` function to take an optional third argument that indicates the "step" value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to `range1` behavior. Make sure it also works with negative step values.

```js
// range1
console.log(range1(2, 8));		// [2, 3, 4, 5, 6, 7, 8]
console.log(range1(8, 2));		// [8, 7, 6, 5, 4, 3, 2]

// range2 without step parameter
console.log(range2(2, 8));		// [2, 3, 4, 5, 6, 7, 8]
console.log(range2(8, 2));		// [8, 7, 6, 5, 4, 3, 2]

// range2 with step parameter
console.log(range2(2, 8, 2));	// [2, 4, 6, 8]
console.log(range2(8, 2, 2));	// [8, 6, 4, 2]

// sum
console.log(sum([1, 2, 3, 4]));	// 10
console.log(sum(range1(1, 4)));	// 10
```

### Find the most frequent item of an array

Write a function to find the most frequent item of an array of primitive types.

```js
console.log(findMostPopularItem([1, 1, 1, 2, 2]));		// 2
console.log(findMostPopularItem(['a', 'b', 'b', 'c']));	// b
```

### Reverse an array

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

```js
console.log(reverseArray(['A', 'B', 'C'])); // ['C', 'B', 'A'];

var arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr);
console.log(arr); // [5, 4, 3, 2, 1]
```

## Objects

### Introduction

* Kod vjezbanja s objektima koristiti console.dir() metodu za uvid u stanje objekta, npr:
```js
var person = {
	'name': 'John Doe',
	'shoe size': 42
};

// u vecini browsera postoji razlika razliku izmedu console.log() i console.dir()
// tj. console.dir() ispisuje interaktivni pregled objekta u konzoli

// primjetiti da ce console.dir() pokazati i skriveni property "__proto__",
// to je sistemski property preko kojeg javascript implementira inheritance, zasad se ne obazirati na taj property

console.log(person);
console.dir(person);
```

### Object properties #1

```js
var person = {
	'name': 'John Doe',
	'shoe size': 42
};

// how many properties are there in the person object?

// there are 2 ways to access object properties: dot notation and bracket notation.

// change person's name and print it to console by using both notations.

// change persons's shoe size and print it to console. can we access shoe size by using both notations?
```

### Object properties #2

```js
var person = {
	'name': 'John Doe',
	'shoe size': 42
};

// what happens when we try to access a property that's undeclared (e.g. person.address)?
// do we get a reference error like when trying to access a variable that's undeclared?

// how can we remove properties from objects?
// remove all properties from the person object.
// show with console.dir() that the properties are really removed.
```

### Define a simple object

Make a simple object to represent a car. Make a function to print car data to console.
A car has these 3 properties:  
Name: Audi A1 1.6 TDI  
Price: 24.780 €  
Top speed: 200 km/h

```js
printCar(car); // Audi A1 1.6 TDI costs 24.780€ and has a top speed of 200 km/h.
```

### Array of objects

Make an array of car objects (from the previous exercise).  
Make a function to sort the array by car name and print all cars to console.  
Make a function to sort the array by car price and print all cars to console.  
Make a function that takes a `speed` parameter and prints all cars faster than given speed.

### Date object is a reference data type

* Pogledat video za Javascript Date object: https://www.youtube.com/watch?v=M3VEFVBRw-o

```js
var date1 = new Date(...);
var date2 = date1;

// demonstrate that the date object is a reference data type, i.e. show that both references change the same object in memory
```

### People database

Ministarstvo unutarnjih poslova nam je platio da im napravimo bazu podataka sa podacima građana Republike Hrvatske.  
Nadopuni dijelove koji nedostaju u programu ispod:

```js
var persons = [];

function addPersonToDatabase(person) {
	// add person to the persons array
	// make sure we don't add the same person twice (based on OIB)
	// if person with person.oib already exists in the array update the person with new data
}

function printPerson(person) {
	// print single person object to console
}

function printPersonsSortedByDateOfBirth(desc) {
	// sort persons by date of birth and print to console
	// sort ascending or descending depending if parameter is true or false - set default to ascending

	// how to compare dates:
	// http://stackoverflow.com/questions/492994/compare-two-dates-with-javascript/493018#493018

	// ascending sort example:
	// 22.04.1995
	// 23.04.1995
	// 24.04.1995
}

function printPersonsSortedByName(desc) {
	// sort persons by their full name and print to console
	// sort ascending or descending depending if parameter is true or false - set default to ascending

	// ascending sort example:
	// Bandic Zoran
	// Josipovic Ivo
	// Karamarko Tomislav
}

function printPersonsFilteredByZip(zip) {
	// print all persons with specific zip to console
}

// database usage:

var person = {
	name: 'Ivan',
	surname: 'Horvat',
	dateOfBirth: new Date(1995, 4, 23),
	city: 'Split',
	zip: '21000',
	oib: '12345678912'
};

printPerson(person); // #12345678912 - Horvat, Ivan - (23.04.1995) - Split 21000

addPersonToDatabase(person);

printPersonsSortedByDateOfBirth();
printPersonsSortedByDateOfBirth(true);

printPersonsSortedByName();
printPersonsSortedByName(true);

printPersonsFilteredByZip('21000');
```

# jQuery exercises

### Fixed section navigation

Implement rudimentary cutup of the page.  
Implement fixed section navigation menu to navigate the sections:

* When you click on the menu item it should scroll to the section.
* When you hover over the menu it should slide out (see PSD) and show the menu items.
* When you scroll the page, over the sections, the menu items should change active state to reflect what section you're currently on.
* Implement fancy menu transitions on hover and when scrolling the page.
* Make sure navigation works when there's a lot of images on the page, or slow loading images.

### Multistep form

Folder contains 2 PSD files containing 2 multistep forms, implement both forms each into its own html file. Don't implement 2 JS files, keep all JS code in main.js. Encapsulate JS code for each form properly into its own IIFE so it doesn't affect the logic/variables of the other form.
Use Select2 plugin to style the select elements.
At the end of the flow, i.e. after user completes the 3rd step, submit the form using GET request to the same page.  
Required functionality and UX: http://take.ms/7zNk4  
Required functionality and UX: http://take.ms/2AqAA  

Implement a data structure that holds data for select elements, if the user selects "Home or Condo" the second select should contain options under "Home or Condo":
```
Home or Condo
	Single Home or Condo (Valued up to $300K)
	Single Home or Condo ($300 to $500K)
	Single Home or Condo ($500K to $1 Million)
	Single Home or Condo (Over $1 Million)
Apartment Building
	Multi-Family (2-4 units)
	Multi-Family (5-19 units)
	Multi-Family (20-99 units)
	Multi-Family (100+ units)
HOA
	Homeowners Association (2-49 units)
	Homeowners Association (50-99 units)
	Homeowners Association (100+ units)
COA
	Condominium Association (2-49 units)
	Condominium Association (50-99 units)
	Condominium Association (100+ units)
Commercial
	Retail (Up to 9,999 sqft)
	Retail (10,000 - 100,000 sqft)
	Retail (100,000+ sqft)
	Office (Up to 9,999 sqft)
	Office (10,000 - 100,000 sqft)
	Office (100,000+ sqft)
	Warehouse/Distribution (Up to 100,000 sqft)
	Warehouse/Distribution (100,000+ sqft)
	Light Manufacturing (Up to 100,000 sqft)
	Light Manufacturing (100,000+ sqft)
	Parking Garage
	Biotech/Mission-Critical
Short-Term Stay
	Vacation (1-2 units)
	Vacation (3+ units)
Other Associations
	Other Associations (Hotel, Resort etc.)
	Mobile Home Community
```

### Form with progress bar & validation

Implement form:

* Only allow submission when all required fields pass validation
* Required fields & validation format:
  * First Name (not empty)
  * Last Name (not empty)
  * Email (must be valid email)
  * Industry (not empty)
  * Password (6+ characters)
  * Phone (must be in format: "(555) 555-5555" or "555-555-5555")
* When a required field passes validation advance the progress bar  
Required functionality and UX: http://take.ms/yQeD6

### Interactive troubleshooting page

Implementiraj interaktivnu troubleshooting stranicu:

* Podatke prebaciti iz PDFa u JS data strukturu
* Stranica se sastoji od serije pitanja
* Svako pitanje ima YES/NO odgovor
* Primjer kako treba radit je u screenshotovima u folderu
* Dizajn uzet sa screenshotova
* Implementirat sve botune sa screenshotova u folderu  
Required functionality and UX: http://take.ms/h7XKB

# Adaptive mobile menu

Implementiraj menu iz PSDa iz layera "burger menu".  
Menu se treba prilagodavati sirini zaslona, na nacin da se na kraju menija uvijek vidi otprilike pola burgera, tako da je korisniku jasno da ima jos burgera do kojih se moze doci ako se swipea desno.  
Za menu koristiti idangerous swiper plugin.  
Swipeanje ljevo/desno mora biti fluidno tj. menu nece snapat za nijedan item, nego se zavisno do momentuma swipea pomice ljevo/desno kao scroll.

# Pagination inside slider

Implementiraj slider iz PSDa. Slider ima paginaciju koja je unutar svakog slidea ispod sadrzaja slidea.  
Za slider koristiti slick slider (http://kenwheeler.github.io/slick/).

# Infinite scroll

Digni WordPress instancu na localhostu. Implementiraj team members custom post type.  
Implementiraj infinite scroll na team members stranici iz PSDa bez koristenja bilo kakvog infinite scroll plugina.  
Kad se dode na dno stranice ucitaju se novi team memberi automatski.  
Implementiraj jos jednu verziju gdje se na dnu stranice nalazi "Load More" botun, novi team memberi se ucitaju kad se klikne "Load More".

# Stackoverflow tags

Implementiraj tagove kao na StackOverflow. Kad se hovera preko taga trebaju se povuc podaci (followers, questions, description) iz WordPress CPTa preko AJAXa. Implementiraj AJAX request cache tako da se za isti tag ne povlace podaci vise od jednom. Neka tagovi imaju isti slide in efekt kao na StackOverflow.  
Primjer funkcionalnosti i UX: http://take.ms/S2PbY

# Autocomplete menu & CORS endpoint

Prvi dio zadataka je implementirati autocomplete menu na `#list` input polje. Ne koristiti vec postojece librarye za autocomplete vec implementirati svoj autocomplete. Aktivirati autocomplete samo ako je u inputu 2 ili vise znakova. Ne raditi AJAX requestove instantno nakon svakog keypress-a vec pricekati 300ms nakon svakog keypress-a tako da se ne radi previse requestova. Dok je AJAX request u tijeku prikazati nekakvu animaciju (loader) tako da korisnik dobije dojam da se u pozadini nesto dogada. Ako se treba izvest novi AJAX request a prosli AJAX request je jos u tijeku, otkazi prosli AJAX request prije nego startas novi.  
Primjer funkcionalnosti i UX: http://take.ms/B1O8K  

Drugi dio zadatka je implementirati AJAX endpoint koji ce vracat podatke za autocomplete u JSON formatu. Endpoint se mora moci kontaktirat sa bilo koje domene (omoguci CORS i testiraj na dev2). Lista podataka za autocomplete se mora vuci iz WordPress CPTa. Lista mora biti sortirana po abecedi.



# js-school
