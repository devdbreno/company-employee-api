export class LengthNameError extends Error {
  constructor(name: string) {
    super(`'${name}' must be a length between 2 and 21.`)
    this.name = 'NameLengthError'
  }
}

export class InvalidNameError extends Error {
  constructor(name: string) {
    super(`'${name}' is an invalid name.`)
    this.name = 'InvalidNameError'
  }
}

export type NameErrors = LengthNameError | InvalidNameError
