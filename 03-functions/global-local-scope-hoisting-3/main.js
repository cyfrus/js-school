var a = 1;
function foo() {
    function bar() {
        console.log(a); // kojoj varijabli se pristupa? koja vrijednost ce se ispisati? zasto?
    }
    bar();
    var a = 2;
}
foo();
// Pristupamo varijabli a koja je definirana u foo funkciji, zbog hoistanja varijabli deklaracija varijable "a" je "pomaknuta" na vrh funkcije foo te je zbog toga globalna varijabla nevidljiva unutar funkcije bar. Kako je njena inicijalizacija na vrijednost 2 ispod funkcije bar() te ispod console.log funkcije ispisati ce se "undefined" 