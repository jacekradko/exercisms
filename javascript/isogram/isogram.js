class Isogram {
    constructor(input) {
        this.input = input.toLowerCase().replace(/[^A-Za-z\u0080-\u00FF]/ig, '')
    }
    isIsogram() {
        return this.input.length == this.input.split('')
            .filter(function(char, position, self) {
                return self.indexOf(char) == position;
            }).length
    }
}

module.exports = Isogram