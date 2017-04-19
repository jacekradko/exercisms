class Anagram {
    constructor(word) {
        this.word = word
        this.wordArray = this.word.toLowerCase().split('').sort()
    }
    matches(args) {
        let list = Array.isArray(args) ? args : [...arguments];
        let result = new Set()

        for (let item of list) {
            if (this.isAnagram(item)) {
                result.add(item)
            }
        }
        return [...result]
    }
    isAnagram(item) {
        if (item.toLowerCase() === this.word.toLowerCase()) {
            return false
        }
        let comparable = item.toLowerCase().split('').sort()
        return (this.wordArray.length === comparable.length) && this.wordArray.every((element, index) => {
            return element === comparable[index];
        });
    }
}

module.exports = Anagram