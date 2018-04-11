var person = {
    'name': 'John Doe',
    'shoe size': 42
};

// how many properties are there in the person object? There are two properties: name and shoe size.

// there are 2 ways to access object properties: dot notation and bracket notation. 

// change person's name and print it to console by using both notations.
person.name = 'Lebron James';
console.log(person.name);
person['name'] = 'Dwyane Wade';
console.log(person.name);
// change persons's shoe size and print it to console. can we access shoe size by using both notations? We cannot access shoe size property with dot notation.
person['shoe size'] = 44;
console.log(person['shoe size']);