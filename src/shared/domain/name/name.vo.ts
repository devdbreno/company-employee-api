import { Either, left, right } from '@shared/either'

import { NameAdapters } from '@shared/domain/name/name.port'
import { InvalidNameError } from '@shared/domain/name/name.error'

export const createName = (name: string, adapters: NameAdapters): Either<InvalidNameError, string> => {
  if (!adapters.validator(name)) return left(new InvalidNameError(name))

  return right(name)
}
