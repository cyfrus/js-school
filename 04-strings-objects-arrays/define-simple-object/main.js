// Make a simple object to represent a car. Make a function to print car data to console. A car has these 3 properties:
// Name: Audi A1 1.6 TDI
// Price: 24.780 €
// Top speed: 200 km/h
// Audi A1 1.6 TDI costs 24.780€ and has a top speed of 200 km/h.



var car = {
    Name: "Audi A1 1.6 TDI",
    Price: "24.780 €",
    "Top speed": "200 km/h",
}
function printCar(obj) {
    console.log(obj.Name + " costs " + obj.Price + " and has a Top speed of " + obj['Top speed']);
}
printCar(car);
