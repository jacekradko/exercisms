class Pangram {
    constructor(input) {
        this.input = input
    }

    isPangram() {
        return this.input.toLowerCase().replace(/[^a-z]/g, '')
            .split('')
            .filter(function(char, position, self) {
                return self.indexOf(char) == position;
            }).length === 26;
    }
}

module.exports = Pangram