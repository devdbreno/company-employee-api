export class InvalidNameError extends Error {
  public readonly code = '400'

  constructor(name: string) {
    super(`'${name}' is an invalid name.`)
    this.name = 'InvalidNameError'
  }
}
