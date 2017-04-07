class Year {
  constructor (year) {
    this.year = year
  }

  isLeap () {
    if (this.divisibleBy(400)) return true
    if (this.divisibleBy(100)) return false
    return this.divisibleBy(4)
  }

  divisibleBy(number) {
    return !(this.year % number)
  }
}

module.exports = Year