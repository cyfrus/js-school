var a = 1;
function foo() {
    var a = 2;
    function bar() {
        var a = 3;
        console.log(a); // koja vrijednost ce se ispisati? zasto?
        // mozemo li odavde pristupiti i ispisati varijablu "a" koja ima vrijednost "2"
    }
    bar();
}
foo();
// Ispisati ce se vrijednost 3 zbog toga što sve 3 varijable imaju isti naziv a zadnja inicijalizacija variable na vrijednost 3 je u scope-u funkcije u kojoj se nalazi console.log
// Pristupiti i ispisati varijablu "a" iz funkcije foo nije moguce