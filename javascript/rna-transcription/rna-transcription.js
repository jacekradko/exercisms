class DnaTranscriber {
  toRna(string) {
    return string.split('').reduce((previousValue, currentValue) => {
      return previousValue.concat(this.translate(currentValue))
    }, '')
  }

  translate(value) {
    switch(value){
      case 'G': return 'C'
      case 'C': return 'G'
      case 'T': return 'A'
      case 'A': return 'U'
    }
  }
}

module.exports = DnaTranscriber