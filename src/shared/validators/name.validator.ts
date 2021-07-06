import validator from 'validator'

import { isLeft, left, right, Either } from '@shared/core'
import { NameValidator, LengthNameError, InvalidNameError } from '@shared/domain/name'

function isLength(name: string): Either<LengthNameError, true> {
  if (!validator.isLength(name, { min: 2, max: 21 })) return left(new LengthNameError(name))

  return right(true)
}

function isValidName(name: string): Either<InvalidNameError, true> {
  const isInvalidName = validator.isUppercase(name) || validator.isLowercase(name) || !validator.isAlpha(name)

  if (isInvalidName) return left(new InvalidNameError(name))

  return right(true)
}

export const nameValidatorAdapter: NameValidator = {
  validate(name: string) {
    return [isLength, isValidName].map((f) => f(name)).find((rL) => isLeft(rL)) ?? right(true)
  }
}
