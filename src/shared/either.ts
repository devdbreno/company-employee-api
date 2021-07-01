export type Either<L, A> = Left<L, A> | Right<L, A>

export class Left<L, A> {
  constructor(private readonly value: L) {}

  isLeft(): this is Left<L, A> {
    return true
  }

  isRight(): this is Right<L, A> {
    return false
  }
}

export class Right<L, A> {
  constructor(private readonly value: A) {}

  isLeft(): this is Left<L, A> {
    return false
  }

  isRight(): this is Right<L, A> {
    return true
  }
}

export const left = <L, A>(l: L): Either<L, A> => new Left<L, A>(l)
export const right = <L, A>(a: A): Either<L, A> => new Right<L, A>(a)
