import vstringformat from '@vue-formily/string-format'

const regexWhiteSpace = (text) => {
  const regex = /^\s*$/g

  return regex.test(text)
}

const onlyNumberText = (text) => {
  let result = null
  if (text) {
    let cleanText = text.toString().replaceAll(' ', '')
    cleanText = cleanText.replace(/[^0-9]*/g, '').split('')

    result = cleanText
  }

  return result
}

const bankNumberFormat = (text) => {
  let result = null
  if (text) {
    const cleanText = onlyNumberText(text)
    if (cleanText.length === 10) {
      result = vstringformat.format('{txt[0]}{txt[1]}{txt[2]}-{txt[3]}{txt[4]}{txt[5]}{txt[6]}{txt[7]}{txt[8]}-{txt[9]}', {
        txt: cleanText
      })
    } else if (cleanText.length === 13) {
      result = vstringformat.format('{txt[0]}{txt[1]}{txt[2]}-{txt[3]}{txt[4]}{txt[5]}{txt[6]}{txt[7]}{txt[8]}-{txt[9]}{txt[10]}{txt[11]}{txt[12]}', {
        txt: cleanText
      })
    } else {
      result = ''
    }
  } else {
    result = ''
  }

  return result
}

const phoneNumberFormat = (text) => {
  let result = null
  if (text) {
    const cleanText = onlyNumberText(text)
    if (cleanText.length === 10) {
      result = vstringformat.format('{txt[0]}{txt[1]}{txt[2]}-{txt[3]}{txt[4]}{txt[5]}{txt[6]}{txt[7]}{txt[8]}{txt[9]}', {
        txt: cleanText
      })
    } else {
      result = '-'
    }
  } else {
    result = '-'
  }

  return result
}

export {
  regexWhiteSpace,
  onlyNumberText,
  bankNumberFormat,
  phoneNumberFormat
}
