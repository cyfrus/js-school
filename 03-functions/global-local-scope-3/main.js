var a = 1;
function foo() {
    var a = 2;
    function bar1() {
        console.log(a); // Pristupa se lokalno deklariranoj varijabli "a" sa vrijednoscu  2
    }
    var bar2 = function() {
        console.log(a); // Pristupa se lokalno deklariranoj varijabli "a" sa vrijednoscu 2
    };
    bar3 = function() {
        console.log(a); // Pristupa se lokalno deklariranoj varijabli "a" sa vrijednoscu 2
    }
    window.bar4 = function() {
        console.log(a); // Pristupa se lokalno deklariranoj varijabli "a" sa vrijednoscu 2
    }
    bar1();
    bar2();
    bar3();
    bar4();
}
console.log(window);


// mozemo li odavde pozvati funkciju bar1()? zasto? Nemozemo funkcija se nalazi unutar scope-a funkcije foo a ne nalazi se u globalnom scope-u.
// mozemo li odavde pozvati funkciju bar2()? zasto? Nemozemo funkcija se nalazi unutar scope-a funkcije foo a ne nalazi se u globalnom scope-u.
// mozemo li odavde pozvati funkciju bar3()? zasto? Nemozemo funkcija se nalazi unutar scope-a funkcije foo a ne nalazi se u globalnom scope-u.
// mozemo li odavde pozvati funkciju bar4()? zasto? Nemozemo funkcija se nalazi unutar scope-a funkcije foo a ne nalazi se u globalnom scope-u.