masses = parseMassesFromInput();
fuelRequired = calculateFuelRequirement();

console.log("Total mass: ", fuelRequired);

function parseMassesFromInput() {
    const fs = require("fs");
    const data = fs.readFileSync("Input.txt");
    let masses = data.toString().split("\n");
    return masses;
}

function calculateFuelRequirement() {
    let fuelRequired = 0;
    masses.forEach(mass => fuelRequired += calculateFuelRequiredForMass(parseInt(mass)));
    return fuelRequired;
}

function calculateFuelRequiredForMass(mass) {
    return Math.floor(mass / 3) - 2;
}