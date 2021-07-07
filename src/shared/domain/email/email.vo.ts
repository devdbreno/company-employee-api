import { Either, left, right } from '@shared/either'

import { EmailValidator } from '@shared/domain/email/email.port'
import { InvalidEmailError } from '@shared/domain/email/email.error'

export const createEmail = (email: string, emailValidator: EmailValidator): Either<InvalidEmailError, string> => {
  if (!emailValidator.validate(email)) return left(new InvalidEmailError(email))

  return right(email)
}
