var number = undefined;


do {

	if (number !== undefined) {
		if (number % 2) {
			console.log("Broj " + number + " je neparan");
		}
		else {
			console.log("Broj " + number + " je paran");
		}
	}
	number = Number(window.prompt("Enter a number", ""));
}
while (Number.isInteger(number) && number !== 0);
console.log("Unijeli ste 0 ili nevaljani broj, prekid");

