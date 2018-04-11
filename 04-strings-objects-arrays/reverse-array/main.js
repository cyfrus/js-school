// Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.


console.log(reverseArray(['A', 'B', 'C'])); // ['C', 'B', 'A'];

var arr = [1];
reverseArrayInPlace(arr);
console.log(arr); // [5, 4, 3, 2, 1,]

function reverseArray(array) {
    var result = [];
    for (let index = array.length - 1; index >= 0; index--) {
        result.push(array[index]);
    }
    return result;
}

function reverseArrayInPlace(array) {
    var temp;
    for (let index = 0; index < Math.floor((array.length)/2) ; index++) {
        temp = array[index];
        array[index] = array[array.length - 1 - index];
        array[array.length - 1 - index] = temp;
    }
    return array;
}