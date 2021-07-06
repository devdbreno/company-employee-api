import { left, right, isLeft, isRight } from '@shared/either'

describe('Either (shared/either)', () => {
  it('Left is left', () => {
    expect(isLeft(left('i am left'))).toBe(true)
  })

  it('Left is not right', () => {
    expect(isRight(left('i am left'))).toBe(false)
  })

  it('Right is right', () => {
    expect(isRight(right('i am right'))).toBe(true)
  })

  it('Right is not left', () => {
    expect(isLeft(right('i am right'))).toBe(false)
  })
})
