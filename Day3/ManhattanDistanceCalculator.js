const WirePath = require("../Day3/WirePath");
const TwoDimensionalCoordinate = require("../Day3/TwoDimensionalCoordinate");

const fs = require("fs");
const wires = fs.readFileSync("Input.txt");

const split = wires.toString().split("\n");

const wirePaths = []
for (let i = 0; i < split.length; i++) {
    const wire = split[i];
    const wirePath = new WirePath(wire);
    wirePaths.push(wirePath.buildPath());
}

const firstPath = wirePaths[0];
const secondPath = wirePaths[1];

const intersections = [];
for (let i = 0; i < firstPath.length; i++) {
    const line1 = firstPath[i];
    secondPath.forEach(line2 => {
        const intersect = line_intersect(line1.x1, line1.y1, line1.x2, line1.y2, line2.x1, line2.y1, line2.x2, line2.y2);
        if (intersect !== null) {
            intersections.push(intersect);
        }
    });
}


const magnitudes = [];
for (i = 0; i < intersections.length; i++) {
    const intersection = intersections[i];
    const magnitude = Math.abs(intersection.x) + Math.abs(intersection.y)
    magnitudes.push(Math.round(magnitude));
}

const min = Math.min(...magnitudes);
console.log(min);

function line_intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
    // Line AB represented as a1x + b1y = c1
    var a1 = y2 - y1;
    var b1 = x1 - x2;
    var c1 = a1*(x1) + b1*(y1);

    // Line CD represented as a2x + b2y = c2
    var a2 = y4 - y3;
    var b2 = x3 - x4;
    var c2 = a2*(x3)+ b2*(y3);

    var determinant = a1*b2 - a2*b1;

    if (determinant == 0)
    {
        return null;
    } else {
        const x = (b2*c1 - b1*c2)/determinant;
        const y = (a1*c2 - a2*c1)/determinant;

        if (x < Math.min(x1,x2) || x> Math.max(x1,x2)) {
             return null;
        }

        if (x < Math.min(x3,x4) || x> Math.max(x3,x4)) {
            return null;
        }

        if (y < Math.min(y1,y2) || y> Math.max(y1,y2)) {
            return null;
        }

        if (y < Math.min(y3,y4) || y> Math.max(y3,y4)) {
            return null;
        }

        return {
            x: x,
            y: y
        };
    }
}