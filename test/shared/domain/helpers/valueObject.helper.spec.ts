import { equalsVO } from '@shared/domain/helpers'
import { createName } from '@shared/domain/valueObject'

describe('ValueObject [Helper]', () => {
  describe('equalsVO', () => {
    it('Should return true for equal ValueObjects', () => {
      const isEqualVO = equalsVO(createName('Deivid'), createName('Deivid'))
      expect(isEqualVO).toBe(true)
    })

    it('Should return false for different ValueObjects', () => {
      const isEqualVO = equalsVO(createName('Thayane'), createName('Deivid'))
      expect(isEqualVO).toBe(false)
    })

    it('Should return false if all ValueObjects are invalid', () => {
      const isEqualVO = equalsVO(createName('T'), createName('D'))
      expect(isEqualVO).toBe(false)
    })

    it('Should return false even if it only has an invalid ValueObject', () => {
      const isEqualVO = equalsVO(createName('T'), createName('Deivid'))
      expect(isEqualVO).toBe(false)
    })
  })
})
