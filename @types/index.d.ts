declare module 'faker-br' {
  export namespace br {
    function cpf(opts?: { format: boolean }): string
    function cnpj(): string
  }

  export namespace name {
    function findName(firstName?: string, lastName?: string, gender?: number): string
  }

  export namespace address {
    function streetAddress(useFullAddress?: boolean): string
  }

  export namespace internet {
    function email(firstName?: string, lastName?: string, provider?: string): string
  }
}
