var obj1 = {name: 'John'};
var obj2 = obj1;
var obj3 = {name: 'John'};

// koliko referenci imamo u programu? 1
// koliko objekata imamo u memoriji? 20

if (obj1 === obj2) {
    // hoce li program uci u ovaj if block? zasto? Hoće. Zbog toga što javascript uspoređuje objekte da li referenciraju na istu lokaciju u memoriji a obj2 refrencira na obj1.
}

if (obj1 === obj3) {
    // hoce li program uci u ovaj if block? zasto? Nece. Zbog toga što objekt obj3 je novo inicijalizirani objekt koji zauzima novo mjesto u memoriji odnosno oba objekta imaju razlicite lokacije u memoriji te je usporedba false. Jer kao što smo prije rekli usporedba 2 objekta je da li referenciraju na istu lokaciju u memoriji.
}