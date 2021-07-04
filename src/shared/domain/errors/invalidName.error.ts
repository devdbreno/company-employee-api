export class InvalidNameError extends Error {
  constructor(errorReason: string) {
    super(errorReason)
    this.name = 'InvalidNameError'
  }
}
