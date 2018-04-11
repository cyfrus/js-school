// Make an array of car objects (from the previous exercise).
// Make a function to sort the array by car name and print all cars to console.
// Make a function to sort the array by car price and print all cars to console.
// Make a function that takes a speed parameter and prints all cars faster than given speed.
let cars = [
    {
        Name: "Audi A1 1.6 TDI",
        Price: "24.780 €",
        "Top speed": "200 km/h",
    },
    {
        Name: "Rolls-Royce",
        Price: "33.780 €",
        "Top speed": "240 km/h",
    },
    {
        Name: "Citroen",
        Price: "22.780 €",
        "Top speed": "220 km/h",
    },
    {
        Name: "Mercedes-Benz",
        Price: "4.780 €",
        "Top speed": "210 km/h",
    },
    {
        Name: "Bristol",
        Price: "17.780 €",
        "Top speed": "150 km/h",
    },
    {
        Name: "Isuzu",
        Price: "16.780 €",
        "Top speed": "180 km/h",
    },
    {
        Name: "Alpina",
        Price: "12.780 €",
        "Top speed": "190 km/h",
    }
]

function sortCarsByName() {
    let carscopy = cars.slice(0);
    carscopy.sort(function (a, b) {
        return a.Name.localeCompare(b.Name);
    });
    console.log(carscopy);
}

function sortCarsByPrice() {
    let carscopy = cars.slice(0);
    carscopy.sort(function (a, b) {
        let num1 = a.Price, num2 = b.Price;
        num1.trim();
        num2.trim();
        num1 = num1.replace(".", "");
        num2 = num2.replace(".", "");
        num1 = parseInt(num1.slice(0, 7));
        num2 = parseInt(num2.slice(0, 7));

        if (num1 > num2) {
            return -1;
        }
        else if (num1 < num2) {
            return 1;
        }
        else if (num1 === num2) {
            return 0;
        }
    })
    console.log(carscopy);
}


function fasterThan(speed) {
    cars.forEach(function(element){
        let elementSpeed = element['Top speed'];
        elementSpeed.trim();
        elementSpeed = elementSpeed.slice(0,3);
        elementSpeed = parseInt(elementSpeed);
        if(elementSpeed > speed)
        {
            console.log(element);
        }
    })
}

sortCarsByName();
sortCarsByPrice();
fasterThan(200);