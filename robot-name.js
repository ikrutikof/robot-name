// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.


export class Robot { 
    
    static usedNames = new Set();

    constructor () {
        this._name = this.#setName();
    }

    get name() {
        return this._name
    }

    #setName = () => {
        let name
        do {
            name = this.#generateName();
        } while (Robot.usedNames.has (name) )
        Robot.usedNames.add(name);
        return name
    }

    #generateName = () => {
        const   letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                digit = '0123456789' ,
                random = (string) => { return string[ Math.floor ( Math.random() * (string.length ) ) ] }
        let name = random(letter) + random(letter) + random(digit) + random(digit) + random(digit);

        return name
    }

    reset = () => {
        this._name = this.setName();
    }

}

Robot.releaseNames = () => { Robot.usedNames.clear() } ;
