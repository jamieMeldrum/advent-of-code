const IntcodeComputer = require("../Day2/IntcodeComputer");

const fs = require("fs");
const initialState = fs.readFileSync("Input.txt");

const intComputer = new IntcodeComputer();

for (noun = 0; noun < 99; noun++) {
    for (verb = 0; verb < 99; verb++) {
        intComputer.resetMemory(initialState)
        input = [{key: 1, value: noun}, {key: 2, value: verb}];
        const result = intComputer.process(input);

        if (result === 19690720) {
            console.log("Result: ", noun, verb)
        }
    }
}

