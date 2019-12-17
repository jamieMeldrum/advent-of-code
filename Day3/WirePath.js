const DirectionalInstruction = require("../Day3/DirectionalInstruction");
const TwoDimensionalCoordinate = require("../Day3/TwoDimensionalCoordinate");

class WirePath {
    constructor(path) {
        const instructions = [];

        let dataArray = path.toString().split(",");
        for (let i = 0; i < dataArray.length; i++) {
            const instruction = dataArray[i].trim();
            const direction = instruction.charAt(0);
            const magnitude = parseInt(instruction.substr(1));

            const directionalInstruction = new DirectionalInstruction(direction, magnitude);
            instructions.push(directionalInstruction);
        }

        this.instructions = instructions;
    }

    buildPath() {
        const lines = []

        for (let i = 0; i < this.instructions.length; i++) {
            const instruction = this.instructions[i];
            const location = i > 0 ? new TwoDimensionalCoordinate(lines[i - 1].x2, lines[i - 1].y2) : new TwoDimensionalCoordinate(0, 0);

            const direction = instruction.direction;
            const magnitude = instruction.magnitude;
            if (direction === "U") {
                lines.push(this.line(location.x, location.y, location.x, location.y + magnitude));
            } else if (direction === "R") {
                lines.push(this.line(location.x, location.y, location.x + magnitude, location.y));
            } else if (direction === "D") {
                lines.push(this.line(location.x, location.y, location.x, location.y - magnitude));
            } else if (direction === "L") {
                lines.push(this.line(location.x, location.y, location.x - magnitude, location.y));
            } else {
                throw new Error("ERROR!!")
            }
        }

        return lines;
    }

    line(x1, y1, x2, y2) {
        return {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2
        }
    }
}

module.exports = WirePath;