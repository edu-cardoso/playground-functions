// Requisito 01

function compareTrue(boolean1, boolean2) {
  return (boolean1 && boolean2 === true) ? 'true' : 'false';
}

// Requisito 02

function splitSentence(string) {
  return string.split(' ')
}

// Requisito 03

function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Requisito 04

function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Requisito 05

function highestCount(arr) {
  let higherNumber = arr[0]
  let higherNumberRepeat = 0

  arr.forEach(num => {
    if (num > higherNumber) {
      higherNumber = num
      higherNumberRepeat = 0
    }
    if (num === higherNumber) {
      higherNumberRepeat++
    }
  })
  return higherNumberRepeat
}

// Requisito 06

function calcTriangleArea(base, height) {
  return (base * height) / 2
}

function calcRectangleArea(base, height) {
  return (base * height)
}

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`
  }
  else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`
  }
  else {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida'
  }
}

// Requisito 07

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs((mouse - cat1)) < Math.abs((mouse - cat2))) {
    return 'cat1'
  }
  else if (Math.abs((mouse - cat1)) === Math.abs((mouse - cat2))) {
    return 'os gatos trombam e o rato foge'
  } else {
    return 'cat2'
  }
}

// Requisito 08

function fizzBuzz(arr) {
  let arrFizzBuzz = []
  arr.forEach(num => {
    if (num % 3 === 0 && num % 5 == 0) {
      arrFizzBuzz.push('fizzBuzz')
    }
    else if (num % 3 === 0) {
      arrFizzBuzz.push('fizz')
    }
    else if (num % 5 === 0) {
      arrFizzBuzz.push('buzz')
    } else {
      arrFizzBuzz.push('bug!')
    }
  })
  return arrFizzBuzz
}

// Requisito 09

function encode(string) {
  const obj = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5'
  }

  let encodeWord = ''

  string.split('').forEach(letter => {
    if (obj[letter]) {
      encodeWord += letter = obj[letter]
    } else {
      encodeWord += letter
    }
  })
  return encodeWord
}

function decode(string) {
  const obj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  }

  let decodeWord = ''

  string.split('').forEach(letter => {
    if (obj[letter]) {
      decodeWord += letter = obj[letter]
    } else {
      decodeWord += letter
    }
  })
  return decodeWord
}

// Requisito 10

function techList(arr, name) {
  let arrObj = []
  if (!arr) {
    return []
  } else {
    arr.sort().forEach(tech => {
      arrObj.push({
        tech: tech,
        name: name
      })
    });
    return arrObj
  }
}

