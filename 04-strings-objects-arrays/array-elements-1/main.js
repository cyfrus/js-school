var arr = [1, 2, 3];

console.log(arr[0]); // kojem elementu pristupamo? kojem indexu pristupamo? Pristupamo prvom elementu odnosno vrijednosti 1 odnosno indexu 0 

console.log(arr[10]);
console.log(arr.length);
// koju vrijednost dobijemo kada pristupamo indexu kojeg nema u arrayu? undefined
// da li dobijemo error? ne
// hoce li se array prosirit (hoce li se promijeniti length) ako pristupimo indexu kojeg nema? Niz se nece proširiti ako mu pristupimo. Ako ga promjenimo odnosno dodamo mu vrijenost svi indexi do tog ce biti dodani i niz ce se proširiti.