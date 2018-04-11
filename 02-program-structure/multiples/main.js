//Napisati program koji provjerava jesu li 2, 3, 5 i 7 višekratnici broja unesenog preko "prompt" funkcije.

var number = prompt("Unesite broj: ");
var multiples  = [2, 3, 5, 7];

// if(!(number % 2))
// { 
// 	console.log("2 je višekratnik broja " + number);
// }

// if(!(number % 3))
// {
// 	console.log("3 je višekratnik broja " + number);
// }

// if(!(number % 5))
// {
// 	console.log("5 je višekratnik broja " + number);
// }

// if(!(number % 7))
// {
// 	console.log("7 je višekratnik broja " + number);
// }

multiples.forEach(function(element){
	if(!(number % element))
	{
		console.log(element + " je višekratnik broja " + number);
	}
});