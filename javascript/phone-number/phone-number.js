class PhoneNumber {
    constructor(input) {
        this.input = input.replace(/[^0-9]/g, '')
        if (this.input.length === 11) {
            if (this.input[0] === '1') {
                this.input = this.input.slice(1, 11)
            } else {
                this.input = '0000000000'
            }
        } else if (this.input.length > 11 || this.input.length < 10) {
            this.input = '0000000000'
        }
    }

    areaCode() {
        return this.input.slice(0, 3)
    }

    number() {
        return this.input;
    }

    toString() {
        console.log(this.input)
        return `(${this.areaCode()}) ${this.input.slice(3,6)}-${this.input.slice(6,10)}`
    }
}

module.exports = PhoneNumber