var a = 1;
function foo() {
    var a = 2;

    function bar() {
        var a = 3;
    }
    bar();

    if (true) {
        console.log(a); // kojoj varijabli se pristupa? koja vrijednost ce se ispisati? zasto?
    }
}
foo();

// Pristupa se varijabli 'a' sa vrijednoscu 2 zbog toga što se nalazi u istom scope-u gdje se nalazi console.log funkcija. Varijabla "a" je redefinirana unutar funkcije bar() ali njoj mozemo samo pristupiti unutar funkcije bar(). Globalna varijabla je "a" je redefinirana nakon ponovne inicijalizacije u foo() funkciji.