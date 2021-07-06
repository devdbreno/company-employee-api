import { right, isLeft, Either } from '@shared/core'

import { EmailErrors, EmailValidator } from '@shared/domain/email'

export const createEmail = (email: string, emailValidator: EmailValidator): Either<EmailErrors, string> => {
  const trueOrEmailError = emailValidator.validate(email)

  if (isLeft(trueOrEmailError)) return trueOrEmailError

  return right(email)
}
