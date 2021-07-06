import isEmail from 'validator/lib/isEmail'

import { left, right, isLeft, Either } from '@shared/core'
import { EmailValidator, InvalidEmailError } from '@shared/domain/email'

function isValidEmail(email: string): Either<InvalidEmailError, true> {
  if (!isEmail(email)) return left(new InvalidEmailError(email))

  return right(true)
}

export const emailValidatorAdapter: EmailValidator = {
  validate(email: string) {
    return [isValidEmail].map((f) => f(email)).find((rL) => isLeft(rL)) ?? right(true)
  }
}
