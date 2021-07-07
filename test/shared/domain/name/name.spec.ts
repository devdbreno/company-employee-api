import { left, right } from '@shared/either'
import { nameValidatorAdapter } from '@shared/infra/validators/name.validator'

import { formatName } from '@shared/utils/text.util'

import { createName } from '@shared/domain/name/name.vo'
import { InvalidNameError } from '@shared/domain/name/name.error'

const giveNameOrError = (name: string) => createName(name, nameValidatorAdapter)

describe('Name (shared/domain)', () => {
  it('Should create a valid simple name', () => {
    const validName = formatName('linus')

    const nameOrError = giveNameOrError(validName)

    expect(nameOrError).toEqual(right(validName))
    expect(nameOrError.value).toEqual(validName)
  })

  it('Should create a valid fullname', () => {
    const validName = formatName('deivid breno novaes de araújo silva')

    const nameOrError = giveNameOrError(validName)

    expect(nameOrError).toEqual(right(validName))
    expect(nameOrError.value).toEqual(validName)
  })

  it('Should not create an invalid name with few characters', () => {
    const invalidName = formatName('D')

    const nameOrError = giveNameOrError(invalidName)
    const nameLengthError = new InvalidNameError(invalidName)

    expect(nameOrError).toEqual(left(nameLengthError))
    expect(nameOrError.value).toEqual(nameLengthError)
  })

  it('Should not create an invalid name with many characters', () => {
    const invalidName = formatName('pedro de alcântara francisco antônio joão carlos xavier de paula')

    const nameOrError = giveNameOrError(invalidName)
    const invalidNameError = new InvalidNameError(invalidName)

    expect(nameOrError).toEqual(left(invalidNameError))
    expect(nameOrError.value).toEqual(invalidNameError)
  })

  it('Should not create an invalid name with symbols and/or numbers', () => {
    const invalidName = 'Deivi@d1_23'

    const nameOrError = giveNameOrError(invalidName)
    const invalidNameError = new InvalidNameError(invalidName)

    expect(nameOrError).toEqual(left(invalidNameError))
    expect(nameOrError.value).toEqual(invalidNameError)
  })
})
