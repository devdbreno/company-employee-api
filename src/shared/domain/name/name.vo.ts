import { Either, left, right } from '@shared/either'

import { NameValidator } from '@shared/domain/name/name.port'
import { InvalidNameError } from '@shared/domain/name/name.error'

export const createName = (name: string, nameValidator: NameValidator): Either<InvalidNameError, string> => {
  if (!nameValidator.validate(name)) return left(new InvalidNameError(name))

  return right(name)
}
