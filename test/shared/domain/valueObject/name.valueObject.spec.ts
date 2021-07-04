import { Either } from '@shared/core'

import { Name } from '@shared/domain/valueObject'
import { InvalidNameError } from '@shared/domain/errors'
import { fewOrManyCharsMsg } from '@shared/domain/helpers'

describe('Name [ValueObject]', () => {
  it('Should create a valid name', () => {
    const validName = 'Deivid'
    const nameOrError = Name.create(validName)

    expect(nameOrError.value).toEqual(validName)
    expect(nameOrError).toEqual(Either.right(validName))
  })

  it('Should not create an invalid name with few characters', () => {
    const invalidName = 'D'
    const nameOrError = Name.create(invalidName)
    const fewCharsError = new InvalidNameError(fewOrManyCharsMsg(invalidName))

    expect(nameOrError.value).toEqual(fewCharsError)
    expect(nameOrError).toEqual(Either.left(fewCharsError))
  })

  it('Should not create an invalid name with many characters', () => {
    const invalidName = 'Otorrinolaringologista'

    const nameOrError = Name.create(invalidName)
    const manyCharsError = new InvalidNameError(fewOrManyCharsMsg(invalidName))

    expect(nameOrError.value).toEqual(manyCharsError)
    expect(nameOrError).toEqual(Either.left(manyCharsError))
  })
})
