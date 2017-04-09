class BeerSong {
    sing() {
        const range = (start, end) => (
            Array.from(Array(end - start + 1).keys()).map(i => i + start)
        )
        return range((arguments[1] ? arguments[1] : 0), arguments[0])
            .reverse()
            .map((value) => this.verse(value)).join('\n')
    }
    verse(number) {
        const calculateNext = (num) => num > 0 ? num - 1 : 99
        const capitalize = (string) => string[0].toUpperCase() + string.slice(1)
        const pluralize = (num) => num === '1' ? '' : 's'

        let current = number > 0 ? `${number}` : 'no more'
        let next = number === 1 ? 'no more' : `${calculateNext(number)}`

        let firstVerse = (number) => `${capitalize(current)} bottle${pluralize(current)} of beer on the wall, ${current} bottle${pluralize(current)} of beer.\n`

        let secondVerse = (number) => number > 0 ?
            `Take ${number === 1 ? 'it' : 'one'} down and pass it around, ${next} bottle${pluralize(next)} of beer on the wall.\n` :
            `Go to the store and buy some more, ${next} bottle${pluralize(next)} of beer on the wall.\n`


        return `${firstVerse(number)}${secondVerse(number)}`
    }
}

module.exports = BeerSong