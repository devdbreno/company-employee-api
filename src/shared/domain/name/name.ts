import { right, isLeft, Either } from '@shared/core'
import { NameValidator, NameErrors } from '@shared/domain/name'

export const createName = (name: string, nameValidator: NameValidator): Either<NameErrors, string> => {
  const trueOrNameError = nameValidator.validate(name)

  if (isLeft(trueOrNameError)) return trueOrNameError

  return right(name)
}
