import { left, right } from '@shared/core'

import { createName } from '@shared/domain/valueObject'
import { NameLengthError } from '@shared/domain/errors'

describe('Name [ValueObject]', () => {
  it('Should create a valid name', () => {
    const validName = 'Deivid'

    const nameOrError = createName(validName)

    expect(nameOrError).toEqual(right(validName))
    expect(nameOrError.value).toEqual(validName)
  })

  it('Should not create an invalid name with few characters', () => {
    const invalidName = 'D'

    const nameOrError = createName(invalidName)
    const nameLengthError = new NameLengthError(invalidName)

    expect(nameOrError).toEqual(left(nameLengthError))
    expect(nameOrError.value).toEqual(nameLengthError)
  })

  it('Should not create an invalid name with many characters', () => {
    const invalidName = 'Otorrinolaringologista'

    const nameOrError = createName(invalidName)
    const nameLengthError = new NameLengthError(invalidName)

    expect(nameOrError).toEqual(left(nameLengthError))
    expect(nameOrError.value).toEqual(nameLengthError)
  })
})
