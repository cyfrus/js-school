var date1 = new Date(1991,9,11, 15,15,30,0);
var date2 = date1;
console.log(date1);
date2.setMonth(1); // By changing date2 we also changed date1
console.log(date1); // 
// demonstrate that the date object is a reference data type, i.e. show that both references change the same object in memory