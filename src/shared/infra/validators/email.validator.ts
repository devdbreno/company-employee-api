import { emailValidator } from 'cpf-cnpj-email-validator'

import { EmailValidator } from '@shared/domain/ports'

export const validateEmail: EmailValidator = (email: string) => emailValidator(email)
