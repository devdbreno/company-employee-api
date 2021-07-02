declare module 'cpf-cnpj-email-validator' {
  export function cpfValidator(cpf: string): boolean
  export function cnpjValidator(cnpj: string): boolean
  export function emailValidator(email: string): boolean
}
