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
