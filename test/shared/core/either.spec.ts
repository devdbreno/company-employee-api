import { mkRight, mkLeft, isRight, isLeft } from '@shared/core/either'

describe('Either', () => {
  const left = mkLeft('i am left')
  const right = mkRight('i am right')

  it('Left is left', () => {
    expect(isLeft(left)).toBe(true)
  })

  it('Left is not right', () => {
    expect(isRight(left)).toBe(false)
  })

  it('Right is right', () => {
    expect(isRight(right)).toBe(true)
  })

  it('Right is not left', () => {
    expect(isLeft(right)).toBe(false)
  })
})
