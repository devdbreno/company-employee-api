import { left, right, isLeft, Either } from '@shared/core'

import { EmailErrors, InvalidEmailError, ValidateEmail } from '@shared/domain/email'

export const createEmail = (email: string, validateEmailAdapter: ValidateEmail): Either<EmailErrors, string> => {
  const trueOrEmailError = validateEmail(email, validateEmailAdapter)

  if (isLeft(trueOrEmailError)) return trueOrEmailError

  return right(email)
}

const validateEmail = (email: string, validateEmailAdapter: ValidateEmail): Either<EmailErrors, boolean> => {
  const isValidEmail = validateEmailAdapter(email)

  if (!isValidEmail) return left(new InvalidEmailError(email))

  return right(true)
}
