var arr = [1, 2, 3, 4, 5];
console.log(arr.length); // sto je length property? Length svojstvo vraca broj elemenata u nizu 

// arr.push(...) Metoda push dodaje jedan ili vise elemenata na kraj niza. Primjer:
var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers) // [1,2,3,4]

// arr.unshift(...) Metoda unshift dodaje jedan ili vise elemenata na pocetak niza. Primjer:
var a = [1, 2, 3];
a.unshift(4, 5);
console.log(a); // [4, 5, 1, 2, 3]

// arr.pop(...) Metoda pop uklanja zadnji element u nizu i vraca taj element.
var plants = ['brocolli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); // ispisuje se tomato, a plants niz je ['brocolli', 'cauliflower', 'cabbage', 'kale']

// arr.shift(...) Metoda shift uklanja prvi element iz niza te vraca taj element
var a = [1, 2, 3];
var b = a.shift();
console.log(a); // [2, 3]
console.log(b); // 1

// arr.splice(...) Metoda splice uklanja elemente i/ili dodaje nove. Broj elemenata koji ce biti uklonjeni je definiran kao drugi parametar od indexa (prvi parametar), treci cetvrti itd parametar definiraju elemente koji ce biti dodani
var randomNiz = ['prvi', 'test', 'treci', 'cetvrti'];
randomNiz.splice(1, 1, 'drugi'); // ['prvi', 'drugi', 'treci', 'cetvrti']
console.log(randomNiz);

// arr.reverse(...) Metoda reverse okrene redoslijed elemenata u nizu. Prvi element postane zadnji. Metoda mijenja array in place.
var a = [1, 2, 4, 3];
a.reverse(); 
console.log(a); // [3, 4, 2, 1]

// arr.sort(...) Metoda sort sortira niz po Unicode znakovnom redoslijedu ako funkcija koja definira sortiranje nije proslijeđena kao parametar. Metoda mijenja array in place. Primjer
var scores = [1, 10, 21, 2]; 
scores.sort(); // [1, 10, 2, 21]  10 dolazi prije nego 2 jer je 10 skup znamenki '1' i '0'

// arr.join(...) Methoda join spoji sve elemente niza u jedan string te vrati taj string. Metoda prima samo jedan parametar koji odvaja elemente. Ako parametar nije proslijeđen elementi ce biti odvojeni zarezom.
var elements = ['jedan', 'dva', 'tri'];
console.log(elements.join());//  jedan,dva,tri

// arr.indexOf(...) Metoda indexOf vraca index elementa koji se nalazi u nizu. Element se proslijeđuje kao prvi parametar. Drugi parametar je od kojeg indexa pocinje pretraga.
var array = [2, 9, 9];
array.indexOf(2);     // 0

// arr.filter(...) Metoda filter kreira novi niz sa svim elementima koji prođu uvjete definirane u callback funkciji koja je proslijeđena kao parametar
var niz = [1, 2, 3,];
console.log(niz.filter(function(element){
    return element >= 3;
}));  // ispisuje se niz sa samo jednim elementom 3


// opisi i demonstriraj sto radi svaka od metoda nabrojanih gore. koje od ovih metoda mijenjaju array in place a koje ne? Reverse i sort mijenjaju array in place.
// koje od ovih metoda nerade u IE8? zasto nerade? IndexOf i filter.