import { left, right } from '@shared/either'
import { InvalidEmailError } from '@shared/domain/email/email.error'

import { giveEmailOrError } from '@test/shared/domain/email/email.mock'

describe('Email (shared/domain)', () => {
  it('Should create a valid email', () => {
    const validEmail = 'rightness@valid.com'

    const emailOrError = giveEmailOrError(validEmail)

    expect(emailOrError).toEqual(right(validEmail))
    expect(emailOrError.value).toEqual(validEmail)
  })

  it('Should not create an invalid email', () => {
    const invalidEmail = 'incorrectness.com'

    const emailOrError = giveEmailOrError(invalidEmail)
    const invalidEmailError = new InvalidEmailError(invalidEmail)

    expect(emailOrError).toEqual(left(invalidEmailError))
    expect(emailOrError.value).toEqual(invalidEmailError)
  })
})
