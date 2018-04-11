//Napisat program koji provjerava je li godina unesenea preko "prompt" prozora prijestupna. Prijestupna godina je svaka onda koja je djeljiva s 4 osim ako nije dijeljiva i sa 100.
//Međutim, prijestupna je i svaka ona koja je djeljiva s 400.

var year = prompt('Enter year: ');

if((year % 4 === 0 && year % 100) || year % 400 === 0)
{
    console.log("Year " + year + " is leap year !!");
}
else
{
    console.log("Year " + year + " is not a leap year !!");
}