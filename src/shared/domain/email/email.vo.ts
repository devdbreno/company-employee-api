import { Either, left, right } from '@shared/either'

import { EmailAdapters } from '@shared/domain/email/email.port'
import { InvalidEmailError } from '@shared/domain/email/email.error'

export const createEmail = (email: string, adapters: EmailAdapters): Either<InvalidEmailError, string> => {
  if (!adapters.validator(email)) return left(new InvalidEmailError(email))

  return right(email)
}
