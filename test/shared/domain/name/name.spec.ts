import { left, right } from '@shared/core'
import { nameValidatorAdapter } from '@shared/validators'
import { createName, InvalidNameError, LengthNameError } from '@shared/domain/name'

const giveNameOrError = (name: string) => createName(name, nameValidatorAdapter)

describe('Name [shared/domain]', () => {
  it('Should create a valid name', () => {
    const validName = 'Deivid'

    const nameOrError = giveNameOrError(validName)

    expect(nameOrError).toEqual(right(validName))
    expect(nameOrError.value).toEqual(validName)
  })

  it('Should not create an invalid name with few characters', () => {
    const invalidName = 'D'

    const nameOrError = giveNameOrError(invalidName)
    const nameLengthError = new LengthNameError(invalidName)

    expect(nameOrError).toEqual(left(nameLengthError))
    expect(nameOrError.value).toEqual(nameLengthError)
  })

  it('Should not create an invalid name with many characters', () => {
    const invalidName = 'Otorrinolaringologista'

    const nameOrError = giveNameOrError(invalidName)
    const nameLengthError = new LengthNameError(invalidName)

    expect(nameOrError).toEqual(left(nameLengthError))
    expect(nameOrError.value).toEqual(nameLengthError)
  })

  it('Should not create an invalid name with symbols and/or numbers', () => {
    const invalidName = 'Deivi@d1_23'

    const nameOrError = giveNameOrError(invalidName)
    const nameHasInvalidChars = new InvalidNameError(invalidName)

    expect(nameOrError).toEqual(left(nameHasInvalidChars))
    expect(nameOrError.value).toEqual(nameHasInvalidChars)
  })

  it('Should not create an invalid name with only uppercase letters', () => {
    const invalidName = 'DEIVID'

    const nameOrError = giveNameOrError(invalidName)
    const invalidNameError = new InvalidNameError(invalidName)

    expect(nameOrError).toEqual(left(invalidNameError))
    expect(nameOrError.value).toEqual(invalidNameError)
  })

  it('Should not create an invalid name with only lowercase letters', () => {
    const invalidName = 'deivid'

    const nameOrError = giveNameOrError(invalidName)
    const invalidNameError = new InvalidNameError(invalidName)

    expect(nameOrError).toEqual(left(invalidNameError))
    expect(nameOrError.value).toEqual(invalidNameError)
  })
})
