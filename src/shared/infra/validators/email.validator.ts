import isEmail from 'validator/lib/isEmail'
import { EmailValidator } from '@shared/domain/email/email.port'

export const emailValidatorAdapter: EmailValidator = {
  validate(email: string) {
    return isEmail(email)
  }
}
