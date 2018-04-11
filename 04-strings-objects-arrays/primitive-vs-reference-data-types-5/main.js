var obj1 = {name: 'John'};
var obj2 = obj1;

obj1 = {name: 'Mike'};

// koliko objekata postoji u memoriji sada? 2
// koja je vrijednost varijable obj2 sada? zasto? {name: 'John'} Zbog toga što referenca obj2 i dalje pokazuje na memorijsku lokaciju na koju je pokazivao obj1 odnosno na {name: 'John'}. Nakon nove inicijalizacije obj1 pokazuje na novu vrijednost u memoriji {name: 'Mike'}.

obj1 = obj2;

// na sto referenca obj1 pokazuje sada? Referenca obj1 pokazuje na lokaciju u memoriji gdje se nalazi {name: 'Mike'}
// mozemo li ikako pristupiti objektu "{name: 'Mike'};" kojeg smo stvorili u liniji 4? Nemozemo, nemamo vise referenci koje pokazuju na taj objekt. 
// koliko objekata postoji u memoriji sada? 1 Zbog toga što je garbage collector oslobodio memorijsku lokaciju na kojoj se nalazio objekt {name: 'Mike'}
