module.exports = function toReadable (number) {
  const firstDigits = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  }
  const teens = {
    0: 'ten',
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',
    4: firstDigits['4'] + 'teen',
    5: 'fifteen',
    6: firstDigits['6'] + 'teen',
    7: firstDigits['7'] + 'teen',
    8: firstDigits['8'].slice(0, -1) + 'teen',
    9: firstDigits['9'] + 'teen'
  }
  const secondDigits = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: firstDigits['6'] + 'ty',
    7: firstDigits['7'] + 'ty',
    8: firstDigits['8'].slice(0, -1) + 'ty',
    9: firstDigits['9'] + 'ty'
  }
  const array = number.toString().split('')
  let counter = array.length
  let teenBoolean = false
  const result = array.reduce((result, digit) => {
    if (counter === 0) return result
    if (counter === 3) {
      counter = 2
      return result + firstDigits[digit] + ' hundred'
    }
    if (counter === 2) {
      if (digit === '1') {
        counter = 1
        teenBoolean = true
        return result
      }
      counter = 1
      if (digit === '0') return result
      return result + ' ' + secondDigits[digit]
    }
    if (counter === 1) {
      if (teenBoolean) {
        counter = 0
        teenBoolean = false
        return result + ' ' + teens[digit]
      }
      counter = 0
      if (digit === '0' && array.length > 1) return result
      return result + ' ' + firstDigits[digit]
    }
  }, '')
  return result.trim()
}
