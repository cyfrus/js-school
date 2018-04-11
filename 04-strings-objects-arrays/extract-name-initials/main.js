//Write a JavaScript function to convert a name into initials.
console.log(getInitials('John Doe'));       // J. D.
console.log(getInitials('Davor Midenjak'));   // D. T.

function getInitials(name) {
    var initials;
    if (name.length > 0) {
        name.trimLeft();
        initials = name[0].toUpperCase() + ". " + (name[name.indexOf(' ', 0) + 1]).toUpperCase() + ".";
        return initials;
    }
    return "";
}