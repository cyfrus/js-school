var a = 1;
function foo() {
    var a = 2;
    console.log(window.a); // koja vrijednost ce se ispisati? zasto? sto treba dodati da se ispise globalna varijabla?
}
foo();
// Ispisati ce se vrijednost 2. Zbog toga što se console.log nalazi unutar funkcije foo isto kao i varijabla "a" koja ima isti naziv kao globalna varijabla pa je varijabla "a" redefinirana unutar funkcije foo
// Da se ispise globalna varijabla potrebno je napisati "window.a" odosno referencirati na varijablu "a" unutar globalnog objekta window