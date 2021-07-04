import { Either } from '@shared/core'

import { InvalidNameError } from '@shared/domain/errors'
import { fewOrManyCharsMsg } from '@shared/domain/helpers'

const create = (name: string): Either<InvalidNameError, string> => {
  const trueOrInvalidNameError = isValid(name)

  if (Either.isLeft(trueOrInvalidNameError)) return trueOrInvalidNameError

  return Either.right(name)
}

const isValid = (name: string): Either<InvalidNameError, boolean> => {
  const trimmedName = name.trim()

  if (trimmedName.length < 2 || trimmedName.length > 10) {
    const fewCharsError = new InvalidNameError(fewOrManyCharsMsg(name))
    return Either.left(fewCharsError)
  }

  return Either.right(true)
}

export const Name = { create, isValid }
