// Write a range1 function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
// Write a range2 function to take an optional third argument that indicates the "step" value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to range1 behavior. Make sure it also works with negative step values.
// range1
// console.log(range1(2, 8));      // [2, 3, 4, 5, 6, 7, 8]
// console.log(range1(8, 2));      // [8, 7, 6, 5, 4, 3, 2]

//range2 without step parameter
console.log(range2(2, 8));      // [2, 3, 4, 5, 6, 7, 8]
console.log(range2(8, 2));      // [8, 7, 6, 5, 4, 3, 2]

// range2 with step parameter
console.log(range2(2, 8, 2));   // [2, 4, 6, 8]
console.log(range2(8, 2, 2));   // [8, 6, 4, 2]

// sum
console.log(sum([1, 2, 3, 4])); // 10
console.log(sum(range1(1, 4))); // 10

function range1 (first, second) {
    var array = [];
    var lower = (first < second) ? first : second;
    var higher = (first < second) ? second : first;
    for (let i = lower; i <= higher; i++) {
        array.push(i);
    }
    if (first > second)
        array.reverse();
    return array;
}

function range2(first, second, step) {
    var array = [];
    var lower = (first < second) ? first : second;
    var higher = (first < second) ? second : first;
    if (step === undefined)
        step = 1;
    for (let i = lower; i <= higher; i = i + step) {
        array.push(i);
    }
    if (first > second)
        array.reverse();
    return array;
}

function sum(array)
{
    var sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum = sum + array[index];  
    }
    return sum;
}