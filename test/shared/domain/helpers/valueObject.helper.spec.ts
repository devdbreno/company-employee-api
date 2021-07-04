import { Name } from '@shared/domain/valueObject'
import { equalsVO } from '@shared/domain/helpers'

describe('ValueObject [Helper]', () => {
  describe('equalsVO', () => {
    it('Should return true for equal ValueObjects', () => {
      const isEqualVO = equalsVO(Name.create('Deivid'), Name.create('Deivid'))
      expect(isEqualVO).toBe(true)
    })

    it('Should return false for different ValueObjects', () => {
      const isEqualVO = equalsVO(Name.create('Thayane'), Name.create('Deivid'))
      expect(isEqualVO).toBe(false)
    })

    it('Should return false if all ValueObjects are invalid', () => {
      const isEqualVO = equalsVO(Name.create('T'), Name.create('D'))
      expect(isEqualVO).toBe(false)
    })

    it('Should return false even if it only has an invalid ValueObject', () => {
      const isEqualVO = equalsVO(Name.create('T'), Name.create('Deivid'))
      expect(isEqualVO).toBe(false)
    })
  })
})
