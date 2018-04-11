function splitString(text) {
    var arr = [];
    var word = "";
    for (let index = 0; index < text.length; index++) {
        if (text[index] === " " || text.length - 1 === index) {
            if (text.length - 1 === index) {
                word = word + text[index];
            }
            if (word !== "") {
                arr.push(word);
            }
            word = "";
        }
        else {
            word = word + text[index];
        }
    }
    return arr;
}

console.log(splitString('Lorem ipsum dolor'));  // ["Lorem", "ipsum", "dolor"]
