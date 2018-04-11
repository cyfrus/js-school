//Write a function to truncate a string to a certain number of words.

function truncateWords(text, num) {
    var arr = [];
    var word = "";
    var cnt = 0;
    for (let index = 0; index < text.length; index++) {
        if (cnt === num || num < 0)
        break;
            if (text[index] === " " || text.length - 1 === index) {
                if (text.length - 1 === index) {
                    word = word + text[index];
                }
                if (word !== "") {
                    arr.push(word);
                    cnt++;
                }
                word = "";
            }
        else {
            word = word + text[index];
        }
    }
    return arr;
}

console.log(truncateWords('Lorem ipsum dolor sit amet.', 3));   // Lorem ipsum dolor


