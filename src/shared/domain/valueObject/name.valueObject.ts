import { left, right, isLeft, Either } from '@shared/core'

import { NameErrors, NameLengthError } from '@shared/domain/errors'

export const createName = (name: string): Either<NameErrors, string> => {
  const trueOrNameError = isValidName(name)

  if (isLeft(trueOrNameError)) return trueOrNameError

  return right(name)
}

const isValidName = (name: string): Either<NameErrors, boolean> => {
  const trimmedName = name.trim()

  if (trimmedName.length < 2 || trimmedName.length > 21) return left(new NameLengthError(name))

  return right(true)
}
