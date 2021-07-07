export const formatName = (name: string) => {
  return name
    .split(' ')
    .map((str) => {
      let firstChar = str.charAt(0)

      if (!['da', 'de', 'do', 'das', 'dos', 'a', 'e'].includes(str.toLowerCase())) firstChar = firstChar.toUpperCase()

      return `${firstChar}${str.substr(1).toLocaleLowerCase('pt-Br')}`
    })
    .join(' ')
}
