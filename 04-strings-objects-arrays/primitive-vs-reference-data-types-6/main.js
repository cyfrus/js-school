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

// koju vrijednost obj ima sada? zasto? Funkcija updateObject() je promjenila svojstvo name objekta obj u 'Mike'. Zbog toga što kada proslijeđujemo objekt funkciji, funkcija je "pass by reference" odnosno promjena objekta ce se vidjeti izvan funkcije
// koju vrijednost arr ima sada? zasto? Funkcija updateArray() je dodala broj 4 na kraj niza. Zbog istog razloga kao kod objekta kada proslijeđujemo niz funkciji mozemo promjeniti niz jer smo proslijedili referencu funkciji

