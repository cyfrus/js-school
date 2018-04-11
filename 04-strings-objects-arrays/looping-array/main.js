var arr = [1, 2, 3, 4, 5];

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

for (let index = arr.length-1; index > -1; index--) {
    console.log(arr[index]);
}

// napisi petlju koja ce proci kroz sve elemente (od prvog do zadnjeg) array-a i ispisati ih u konzoli.
// napisi drugu petlju koja radi isto samo obrnutim redosljedom (od zadnjeg do prvog).