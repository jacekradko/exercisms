class Hamming {
  compute (first, second) {
    if (first.length !== second.length) throw new Error('DNA strands must be of equal length.')
    return first.split('').reduce((previousValue, currentValue, currentIndex) => {
      return  (currentValue === second[currentIndex]) ? previousValue : previousValue + 1 
    }, 0)
  }
}

module.exports = Hamming