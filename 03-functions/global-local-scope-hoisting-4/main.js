var a = 1;

foo(); // pozvali smo funkciju prije njene definicije u kodu. da li ovo radi? zasto? Ovo radi zbog toga šta function hoisting "pomakne" na vrhu scope-a kompletnu definiciju funkcije
bar(); // pozvali smo funkciju prije njene definicije u kodu. da li ovo radi? zasto? Ovo ne radi zbog toga funkcijski izraz nisu hoistani te pozivamo funkciju koju još nismo definirali

function foo() {
    console.log(a);
}
var bar = function() {
    console.log(a);
}

