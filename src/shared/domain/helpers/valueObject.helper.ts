import { isLeft, Either } from '@shared/core'

export const equalsVO = <L, A>(valueA: Either<L, A>, valueB: Either<L, A>): boolean => {
  if (!valueA || !valueB || isLeft(valueA) || isLeft(valueB)) return false

  return JSON.stringify(valueA) === JSON.stringify(valueB)
}
