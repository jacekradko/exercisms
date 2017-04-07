const Words = () => {
    clean = input => {
        return input.replace(/\r?\n|\r|\t/g, ' ')
    }
    return {
        count: (input) => {
            return clean(input).split(' ').reduce((prev, curr) => {
                let newObj = Object.create(null)
                let value = curr.trim().toLowerCase()
                if (value) newObj[value] = (prev[value]) ? prev[value] + 1 : 1
                return Object.assign(prev, newObj)
            }, Object.create(null));
        }
    }
}

module.exports = Words