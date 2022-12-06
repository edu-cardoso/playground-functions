// Requisito 11

function formatNumber(arr) {
  const ddd = `(${arr[0]}${arr[1]})`
  let firstPartOfTheNumber = ''
  let secondPartOfTheNumber = ''

  for (let i = 2; i < arr.length; i++) {
    if (i < 7) {
      firstPartOfTheNumber += arr[i]
    } else {
      secondPartOfTheNumber += arr[i]
    }
  }

  return `${ddd} ${firstPartOfTheNumber}-${secondPartOfTheNumber}`
}

function repeatNumber(arr) {
  let obj = {}

  arr.forEach(num => {
    if (!obj[num]) {
      obj[num] = 1
    } else {
      obj[num]++
    }
  })

  for (let value in obj) {
    if (obj[value] >= 3) {
      return false
    }
  }

  return true
}

function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let num of arr) {
    if ((num < 0 || num > 9) || (!repeatNumber(arr))) {
      return 'não é possível gerar um número com esses valores'
    }
  }

  return formatNumber(arr)
}

// Requisito 12

function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    return true;
  }
  return false;
}

// Requisito 13

function hydrate(string) {
  let sumOfDrink = 0
  string.split(' ').forEach(num => {
    if (num === num.replace(/[^0-9]/g, '')) {
      num = Number(num)
    }
    if (num >= 1 && num <= 9) {
      sumOfDrink += num
    }
  })
  if (sumOfDrink === 1) {
    return `${sumOfDrink} copo de água`
  } else {
    return `${sumOfDrink} copos de água`
  }
}
