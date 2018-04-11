// Variable hoisting is term that explains Javascript Engine treating variables declaration like they are declared at the top of the function or global scope regardless of where actual declaration occurs.
text = "hoisting example";
console.log(text);
var text;

// Function hoisting  is term that explains unlike variables, a function declaration doesn't just hoist the function's name. It also hoists the actual function definition.

isItHoisted();

function isItHoisted() {    
    console.log("Yes!");
}