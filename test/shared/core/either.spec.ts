import { Either } from '@shared/core/either'

describe('Either Util', () => {
  const left = Either.left('i am left')
  const right = Either.right('i am right')

  it('Left is left', () => {
    expect(Either.isLeft(left)).toBe(true)
  })

  it('Left is not right', () => {
    expect(Either.isRight(left)).toBe(false)
  })

  it('Right is right', () => {
    expect(Either.isRight(right)).toBe(true)
  })

  it('Right is not left', () => {
    expect(Either.isLeft(right)).toBe(false)
  })
})
