var person = {
    'name': 'John Doe',
    'shoe size': 42
};

// what happens when we try to access a property that's undeclared (e.g. person.address)? We will set new property of that object. For example accessing person.adress will create adress property.
person.adress = "adresa";
console.dir(person);
// do we get a reference error like when trying to access a variable that's undeclared?  No we do not get. We get undefined value.
console.log(person.random);
// how can we remove properties from objects? We can remove properties from objects using delete operator. For example delete person.name will remove name poperty from person object.
delete person.name;
// remove all properties from the person object. We can reassign it as empty object.
person = {};
// show with console.dir() that the properties are really removed.
console.dir(person);