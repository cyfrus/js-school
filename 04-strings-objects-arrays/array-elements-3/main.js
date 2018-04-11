var arr = [1, 2, 3, 4];

arr.push(5);

// koliko elemenata array ima? koji su? Array ima 5 elemenata. To su [1,2,3,4,5]

arr.length = 0;
arr.push(6);

// koliko elemenata array ima? koji su? Ima samo jedan element zbog toga što smo izbrisali sve elemente sa arr.length = 0 i onda dodali jedan element sa push metodom.

arr[3] = 7;

// koliko elemenata array ima? koji su? sto se nalazi na indexima 1 i 2? Ima 4 elementa: 6, undefined, undefined, 7. Elementi na indexima 1 i 2 su tipa undefined.
// koja je vrijednost length property-a? 4

arr.length = 0;
arr[arr.length] = 8;

// koliko elemenata array ima? koji su? koja je vrijednost length property-a? Array ima jedan element. Element se nalazi na indexu 0 sa vrijednoscu 8. Vrijednost length svojstva je 1. 

arr.push(8);

// u svakoj od zadnje 2 linije smo dodali novi element u array.
// ima li razlike izmedu ta 2 nacina dodavanja elementa u array? Prvi nacin dodavanja elemenata u niz dodaje element na specifican index a svi elementi do tog niza biti ce dodani kao undefined. Element dodan sa metodom push biti uvijek dodan na kraj niza.