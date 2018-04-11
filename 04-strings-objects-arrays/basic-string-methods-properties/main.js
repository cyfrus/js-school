var str = '  Lorem ipsum, lorem ipsum.  ';

console.log(str.length); // sto vraca length property? Vraca duzinu stringa. Duzina je 29.

console.log(str.toUpperCase()); // Vraca '  LOREM IPSUM, LOREM IPSUM.  '
console.log(str.toLowerCase()); // Vraca '  lorem ipsum, lorem ipsum.  '
console.log(str.indexOf('ipsum')); // Vraca 8 odnosno poziciju na kojoj se pojavljuje string 'ipsum'
console.log(str.split(' ')); // ["", "", "Lorem", "ipsum,", "lorem", "ipsum.", "", ""]
console.log(str.slice(-8, -3)); // 'ipsum.  '
console.log(str.trim()); // 'Lorem ipsum, lorem ipsum.'
console.log(str.charAt(2)); // 'L'

// sto vraca svaka od ovih metoda? koje od ovih metoda nerade u IE8? zasto nerade?
