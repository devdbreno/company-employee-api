import { Either } from '@shared/core'
import { EmailErrors } from '@shared/domain/email'

export interface EmailValidator {
  validate(email: string): Either<EmailErrors, true>
}
