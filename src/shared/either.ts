const type = Symbol()

export type Either<L, A> = Left<L, A> | Right<L, A>

type Left<L, _> = {
  readonly value: L
  readonly [type]: 'left'
}

type Right<_, A> = {
  readonly value: A
  readonly [type]: 'right'
}

export const left = <L, A>(l: L): Either<L, A> => ({ [type]: 'left', value: l })
export const right = <L, R>(r: R): Either<L, R> => ({ [type]: 'right', value: r })

export const isLeft = <L, A>(value: Either<L, A>): value is Left<L, A> => value[type] === 'left'
export const isRight = <L, A>(value: Either<L, A>): value is Right<L, A> => value[type] === 'right'
