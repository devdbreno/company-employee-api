const type = Symbol()

export type Either<L, A> = Left<L, A> | Right<L, A>

type Left<L, _> = { readonly val: L; readonly [type]: 'left' }
type Right<_, A> = { readonly val: A; readonly [type]: 'right' }

export const mkLeft = <L, A>(l: L): Either<L, A> => ({ [type]: 'left', val: l })
export const mkRight = <L, R>(r: R): Either<L, R> => ({ [type]: 'right', val: r })

export const isLeft = <L, A>(val: Either<L, A>): val is Left<L, A> => val[type] === 'left'
export const isRight = <L, A>(val: Either<L, A>): val is Right<L, A> => val[type] === 'right'
