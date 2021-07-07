export class InvalidEmailError extends Error {
  public readonly code = '400'

  constructor(email: string) {
    super(`'${email}' is an invalid email address.`)
    this.name = 'InvalidEmailError'
  }
}
