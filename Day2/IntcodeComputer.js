class IntcodeComputer {

    ADDITION_PROCESSOR = function (memory) {
        memory[memory[this.address + 3]] =
            memory[memory[this.address + 1]]
            + memory[memory[this.address + 2]];

        return memory;
    };

    MULTIPLICATION_PROCESSOR = function (memory) {
        memory[memory[this.address + 3]] =
            memory[memory[this.address + 1]]
            * memory[memory[this.address + 2]];

        return memory;
    };

    constructor() {
    }

    resetMemory(initialState) {
        let dataArray = initialState.toString().split(",");
        let intArray = dataArray.map(element => parseInt(element));

        this.memory = intArray;
    }

    process(input) {
        this.populateProgramState(input);

        for (let address = 0; address < this.memory.length; address = address + 4) {
            let opcode = this.memory[address];

            let instruction = {
                address: address
            };
            if (opcode === 1) {
                instruction.process = this.ADDITION_PROCESSOR;
            } else if (opcode === 2) {
                instruction.process = this.MULTIPLICATION_PROCESSOR
            } else if (opcode === 99) {
                break;
            } else {
                throw new Error("Invalid OptCode");
            }

            this.memory = instruction.process(this.memory);
        }

        console.log("Int array: ", this.memory.toString());
        console.log("First val: ", this.memory[0]);

        return this.memory[0];
    }

    populateProgramState(input) {
        for (let i = 0; i < input.length; i++) {
            let entry = input[i];
            this.memory[entry.key] = entry.value;
        }
    }
}

module.exports = IntcodeComputer;
