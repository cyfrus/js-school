var arr1 = [135, 2, 5, 1, 23, 10];
var arr2 = numericSort(arr1);

function numericSort(arr)
{
    var cpy = arr.slice();
    var temp;
    for (let i = 0; i < cpy.length; i++) {
        for (let z = 1; z < cpy.length; z++) {
           if(cpy[z-1] > cpy[z])
           {
                temp = cpy[z-1];
                cpy[z-1] = cpy[z];
                cpy[z] = temp;
           }
            
        }
    }
    return cpy;
}


console.log(arr1); // [135, 2, 5, 1, 23, 10]
console.log(arr2); // [1, 2, 5, 10, 23, 135]
