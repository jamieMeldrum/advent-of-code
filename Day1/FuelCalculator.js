masses = parseMassesFromInput();
fuelRequiredForModules = calculateFuelRequirementForModules();

console.log("Total fuel for everything: ", fuelRequiredForModules);

function parseMassesFromInput() {
    const fs = require("fs");
    const data = fs.readFileSync("Input.txt");
    let masses = data.toString().split("\n");
    return masses;
}

function calculateFuelRequirementForModules() {
    let fuelRequired = 0;
    masses.forEach(mass => {
        let fuelRequiredForMass = calculateFuelRequiredForMass(parseInt(mass))
        fuelRequiredForMass = addFuelRequiredForFuel(fuelRequiredForMass)
        fuelRequired += fuelRequiredForMass;
    });

    console.log("Total fuel for modules: ", fuelRequired);

    return fuelRequired;
}

function addFuelRequiredForFuel(fuelRequired) {
    let fuelRequiredForFuel = calculateFuelRequiredForMass(fuelRequired);
    while (fuelRequiredForFuel > 0) {
        console.log("Fuel required for fuel: ", fuelRequiredForFuel);

        fuelRequired += fuelRequiredForFuel;

        console.log("Fuel required: ", fuelRequired);

        fuelRequiredForFuel = calculateFuelRequiredForMass(fuelRequiredForFuel);
    }

    return fuelRequired;
}

function calculateFuelRequiredForMass(mass) {
    return Math.floor(mass / 3) - 2;
}