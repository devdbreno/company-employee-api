import { Either, left, right } from '@shared/either'

import { NameValidator } from '@shared/domain/name/name.port'
import { InvalidNameError } from '@shared/domain/name/name.error'

export const createName = (name: string, nameValidator: NameValidator): Either<InvalidNameError, string> => {
  if (!nameValidator.validate(name)) return left(new InvalidNameError(name))

  return right(name)
}

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
