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


// koju vrijednost obj ima sada? zasto? obj ima i dalje vrijednost {name: 'Chris'} zbog toga što je kada proslijedimo referencu funkciji updateObject() nemozemo promjeniti na što pokazuje originalna referenca jer je proslijeđena kopija reference. Mozemo samo promjeniti njena svojstva. U funkciji updateObject() samo smo promjenili na što pokazuje parametar i ta promjena je vidljiva samo u scope-u funkcije. 
// koju vrijednost arr ima sada? zasto? arr ima vrijednost [1, 2, 3] zbog toga što kada smo proslijedili referencu funkciji updpateArray() nemozemo promjeniti na što pokazuje originalna referenca jer je proslijeđena kopija reference. 