export class InvalidCpfError extends Error {
  constructor(cpf: string) {
    super(`Cpf '${cpf}' received is invalid.`)
    this.name = 'InvalidCpfError'
  }
}
