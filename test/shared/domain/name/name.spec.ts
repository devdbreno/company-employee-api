import { left, right } from '@shared/either'
import { InvalidNameError } from '@shared/domain/name/name.error'

import { validFullnames, validSimpleNames, giveNameOrError } from '@test/shared/domain/name/name.mock'

describe('Name (shared/domain)', () => {
  it('Should create a multiple valid simple names', () => {
    const namesOrErrors = validSimpleNames.map((validName) => giveNameOrError(validName))
    const expecNamesOrErrors = validSimpleNames.map((validName) => right(validName))

    const namesValues = namesOrErrors.map(({ value }) => value)
    const expecNamesValues = expecNamesOrErrors.map(({ value }) => value)

    expect(namesOrErrors).toEqual(expecNamesOrErrors)
    expect(namesValues).toEqual(expecNamesValues)
  })

  it('Should create a multiple valid fullnames', () => {
    const namesOrErrors = validFullnames.map((validName) => giveNameOrError(validName))
    const expecNamesOrErrors = validFullnames.map((validName) => right(validName))

    const namesValues = namesOrErrors.map(({ value }) => value)
    const expecNamesValues = expecNamesOrErrors.map(({ value }) => value)

    expect(namesOrErrors).toEqual(expecNamesOrErrors)
    expect(namesValues).toEqual(expecNamesValues)
  })

  it('Should not create an invalid name with few characters', () => {
    const invalidName = 'D'

    const nameOrError = giveNameOrError(invalidName)
    const expectedNameValue = invalidName

    const invalidNameError = new InvalidNameError(expectedNameValue)

    expect(nameOrError).toEqual(left(invalidNameError))
    expect(nameOrError.value).toEqual(invalidNameError)
  })

  it('Should not create an invalid name with many characters', () => {
    const invalidName = 'pedro de alcântara francisco antônio joão carlos xavier de paula'

    const nameOrError = giveNameOrError(invalidName)
    const expectedNameValue = invalidName

    const invalidNameError = new InvalidNameError(expectedNameValue)

    expect(nameOrError).toEqual(left(invalidNameError))
    expect(nameOrError.value).toEqual(invalidNameError)
  })

  it('Should not create an invalid name with invalid symbols and/or numbers', () => {
    const invalidName = 'deivi@d1_23'

    const nameOrError = giveNameOrError(invalidName)
    const expectedNameValue = invalidName

    const invalidNameError = new InvalidNameError(expectedNameValue)

    expect(nameOrError).toEqual(left(invalidNameError))
    expect(nameOrError.value).toEqual(invalidNameError)
  })

  it('Should not create an invalid name with symbols and/or numbers', () => {
    const invalidName = 'PppppppppPPPPPpppppppPPPppp'

    const nameOrError = giveNameOrError(invalidName)
    const expectedNameValue = invalidName

    const invalidNameError = new InvalidNameError(expectedNameValue)

    expect(nameOrError).toEqual(left(invalidNameError))
    expect(nameOrError.value).toEqual(invalidNameError)
  })
})
