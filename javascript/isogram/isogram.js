class Isogram {
    constructor(input) {
        this.input = input
    }
    isIsogram() {
        let orig = this.input.toLowerCase()
            .replace(/[^A-Za-z\u0080-\u00FF]/ig, '')

        return orig.length == orig.split('')
            .filter(function(char, position, self) {
                return self.indexOf(char) == position;
            }).length
    }
}

module.exports = Isogram