//Write a function to alphabetize a string, i.e. sort the letters alphabetically. Remove the whitespace.
//Write a function to alphabetize a string, i.e. sort the letters alphabetically. Remove the whitespace.



function alphabetizeString(text){
    var result = "";
    text = text.replace(/\s/g, "");
    return text.split('').sort().join('');
}

console.log(alphabetizeString('   Lorem i ps um  '));  // Leimmoprsu
console.log(alphabetizeString('gfedcba'));  // abcdefg