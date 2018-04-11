var persons = [];

function addPersonToDatabase(person) {
    // add person to the persons array
    // make sure we don't add the same person twice (based on OIB)
    // if person with person.oib already exists in the array update the person with new data
    var personIndex = persons.findIndex(function (element, index) {
        if (element.oib === person.oib)
            return true;
        return false;
    });

    if (personIndex !== -1)
        persons[personIndex] = person;

    if (personIndex === -1)
        persons.push(person);
}

function printPerson(person) {
    // print single person object to console
    console.log("#" + person.oib + " - " + person.name + ", " + person.surname + " - (" + person.dateOfBirth.getDay() + "." + person.dateOfBirth.getMonth() + "." + person.dateOfBirth.getFullYear() + ") - " + person.city + " " + person.zip);
}

function printPersonsSortedByDateOfBirth(desc) {
    // sort persons by date of birth and print to console
    // sort ascending or descending depending if parameter is true or false - set default to ascending
    persons.sort(function (first, second) {
        if (desc)
            return second.dateOfBirth.getTime() - first.dateOfBirth.getTime();
        return first.dateOfBirth.getTime() - second.dateOfBirth.getTime();
    })
    console.log("Sorted by date of birth (" + (desc ? "desc)" : "asc)") + ":");
    persons.forEach(function (element) {
        printPerson(element);
    })
    // how to compare dates:
    // http://stackoverflow.com/questions/492994/compare-two-dates-with-javascript/493018#493018

    // ascending sort example:
    // 22.04.1995
    // 23.04.1995
    // 24.04.1995
}

function printPersonsSortedByName(desc) {
    // sort persons by their full name and print to console
    // sort ascending or descending depending if parameter is true or false - set default to ascending
    persons.sort(function (a, b) {
        let name1 = a.surname + a.name;
        let name2 = b.surname + b.name;
        if (desc)
            return name2.localeCompare(name1);
        return name1.localeCompare(name2);

    });
    console.log("Sorted by Name (" + (desc ? "desc)" : "asc)") + ":");
    persons.forEach(function (element) {
        printPerson(element);
    });
    // ascending sort example:
    // Bandic Zoran
    // Josipovic Ivo
    // Karamarko Tomislav
}

function printPersonsFilteredByZip(zip) {
    // print all persons with specific zip to console
    console.log("Filtered by Zip " + zip + ":"); 
    persons.forEach(function (element) {
        if (zip === element.zip)
        {
            console.log("Filtered by Zip:")
            printPerson(element);
        }
    });
}

// database usage:

var person = {
    name: 'Ivo',
    surname: 'Josipovic',
    dateOfBirth: new Date(1995, 4, 23),
    city: 'Split',
    zip: '21000',
    oib: '12345678912'
};

var person2 = {
    name: 'Zoran',
    surname: 'Bandic',
    dateOfBirth: new Date(1991, 4, 23),
    city: 'Sinj',
    zip: '21222',
    oib: '12345678913'
};

var person3 = {
    name: 'Tomislav',
    surname: 'Karamarko',
    dateOfBirth: new Date(1995, 4, 22),
    city: 'Sinj',
    zip: '21222',
    oib: '12345678914'
};

//printPerson(person); // #12345678912 - Horvat, Ivan - (23.04.1995) - Split 21000

addPersonToDatabase(person);
addPersonToDatabase(person2);
addPersonToDatabase(person3);
printPersonsSortedByDateOfBirth();
printPersonsSortedByDateOfBirth(false);
printPersonsSortedByName(false);
printPersonsSortedByName(true);
printPersonsFilteredByZip('21000');