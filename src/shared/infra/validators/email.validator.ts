import isEmail from 'validator/lib/isEmail'
import { EmailValidator } from '@shared/domain/email/email.port'

export const emailValidator: EmailValidator = (email: string) => isEmail(email)
