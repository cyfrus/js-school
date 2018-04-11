var a = 1;
function foo() {
    console.log(a); // kojoj varijabli se pristupa? koja vrijednost ce se ispisati? zasto?

    var a = 2;
}
foo();
// Pristupa se varijabli unutar funkcije foo, odnosno varijabli sa vrijednoscu 2. No s obzirom da je njena deklaracija "pomaknuta" na vrh funkcije foo ispisati ce se "undefined" jer je inicializacija na vrijednost 2 napravljena nakon funcije console.log()