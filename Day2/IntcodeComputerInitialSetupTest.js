const IntcodeComputer = require("../Day2/IntcodeComputer");

const fs = require("fs");
const initialState = fs.readFileSync("Input.txt");

const intComputer = new IntcodeComputer();
intComputer.resetMemory(initialState)

input = [{key:1, value:12}, {key:2, value:2}];
const result = intComputer.process(input);

console.log("Result: ", result)