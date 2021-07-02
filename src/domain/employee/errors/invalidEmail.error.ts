export class InvalidEmailError extends Error {
  constructor(email: string) {
    super(`Email '${email}' received is invalid.`)
    this.name = 'InvalidEmailError'
  }
}
