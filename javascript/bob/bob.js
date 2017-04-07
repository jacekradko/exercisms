//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const Bob = () => {
  isUpperCase = x => {
    return /[a-zA-Z]/.test(x) && x.toUpperCase() === x
  }
  return {
    hey: (input) => {
      if (input.endsWith('?') && !isUpperCase(input)) return 'Sure.'
      if (isUpperCase(input)) return 'Whoa, chill out!'
      if (!input.trim()) return 'Fine. Be that way!'
      return 'Whatever.'
    }
  }
}

module.exports = Bob
