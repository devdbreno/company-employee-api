import { createEmail } from '@shared/domain/email/email.vo'
import { emailValidator } from '@shared/infra/validators/email.validator'

export const giveEmailOrError = (email: string) => createEmail(email, { validator: emailValidator })
