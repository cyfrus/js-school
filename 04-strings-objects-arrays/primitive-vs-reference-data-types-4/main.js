var obj1 = {name: 'John'};
var obj2 = obj1;

obj1 = 5;

// koja je vrijednost obj2 sada? zasto? Vrijednost obj2 je 5 zbog toga što obj2 je referenca na obj1. Odnosno pokazuje na lokaciju u memoriji gdje se nalazi vrijednost obj1. Što bi znacilo bilo koja promjena koja se izvrši na obj1 izvršit ce se na obj2.

console.log(obj1); 