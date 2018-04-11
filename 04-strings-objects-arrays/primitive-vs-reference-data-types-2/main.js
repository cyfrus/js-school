var obj1 = {name: 'John'};
var obj2 = obj1;

// koliko referenci imamo u programu? Imamo 2 
// koliko objekata imamo u memoriji? 1

obj1.name = 'Mike'; // ako promijenimo obj1.name da li se promijenila vrijednost obj2.name? zasto? Da zbog toga što obj2 je referenca na isti objekt u memoriji
obj2.name = 'Alex'; // ako promijenimo obj2.name da li se promijenila vrijednost obj1.name? zasto? Da zbog toga što smo promjenili objekt na koji varijabla obj2 referencira odnosno vrijednost objekta 1

// koja je trenutacna vrijednost name property-a objekta {name: 'John'}? Alex
