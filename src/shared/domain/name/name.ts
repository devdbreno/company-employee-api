import { left, right, isLeft, Either } from '@shared/core'
import { NameErrors, NameLengthError } from '@shared/domain/name'

export const createName = (name: string): Either<NameErrors, string> => {
  const trueOrNameError = validateName(name)

  if (isLeft(trueOrNameError)) return trueOrNameError

  return right(name)
}

const validateName = (name: string): Either<NameErrors, boolean> => {
  const trimmedName = name.trim()
  const isValidName = trimmedName.length > 2 || trimmedName.length <= 21

  if (!isValidName) return left(new NameLengthError(name))

  return right(true)
}
