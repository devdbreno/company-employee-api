export class NameLengthError extends Error {
  constructor(name: string) {
    super(`'${name}' must be between 2 and 100 in size.`)
    this.name = 'NameLengthError'
  }
}

export type NameErrors = NameLengthError
