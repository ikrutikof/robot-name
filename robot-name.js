// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.


export class Robot { 
    
    constructor () {
        this.namesUsed = new Set();
        this._name = this.setName();
    }

    get name() {
        return this._name
    }

    generateName = () => {

        const   letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                digit = '0123456789' ,
                random = (string) => { return string[ Math.floor ( Math.random() * (string.length ) ) ] }
        let name = random(letter) + random(letter) + random(digit) + random(digit) + random(digit);

        return name
    }

    setName = () => {
        let name
        do {
            name = this.generateName();
        } while (this.namesUsed.has (name) )
        this.namesUsed.add(name);
        return name
    }

    reset = () => {
        this._name = this.setName();
    }

}

Robot.releaseNames = () => { } //namesUsed.clear() };
