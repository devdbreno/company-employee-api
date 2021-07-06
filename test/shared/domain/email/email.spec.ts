import { left, right } from '@shared/core'
import { emailValidatorAdapter } from '@shared/validators'
import { createEmail, InvalidEmailError } from '@shared/domain/email'

describe('Email [shared/domain]', () => {
  it('Should create a valid email', () => {
    const validEmail = `rightness@valid.com`

    const emailOrError = createEmail(validEmail, emailValidatorAdapter)

    expect(emailOrError).toEqual(right(validEmail))
    expect(emailOrError.value).toEqual(validEmail)
  })

  it('Should not create an invalid email', () => {
    const invalidEmail = 'incorrectness.com'

    const emailOrError = createEmail(invalidEmail, emailValidatorAdapter)
    const invalidEmailError = new InvalidEmailError(invalidEmail)

    expect(emailOrError).toEqual(left(invalidEmailError))
    expect(emailOrError.value).toEqual(invalidEmailError)
  })
})
