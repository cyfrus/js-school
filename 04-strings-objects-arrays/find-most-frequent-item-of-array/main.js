//Write a function to find the most frequent item of an array of primitive types.
console.log(findMostPopularItem([1, 1, 1, 2, 2,3,3,3]));      // 1
console.log(findMostPopularItem(['a', 'b', 'b', 'c', 'c', 'c'])); // b

function findMostPopularItem(array) {
    if (array.length <= 1)
        return array;
    var result;
    var max = 0;
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        for (var z = i; z < array.length; z++) {
            if(array[i] === array[z])
            counter++;
        }
        if(counter > max)
        {   
            max = counter;
            result = array[i];
        }
        counter = 0;
    }
    return result;
}