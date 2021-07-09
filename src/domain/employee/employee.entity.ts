import { EmployeeAdapters } from '@domain/employee/employee.port'

import { Either, isLeft, right } from '@shared/either'

import { createName } from '@shared/domain/name/name.vo'
import { createEmail } from '@shared/domain/email/email.vo'
import { InvalidNameError } from '@shared/domain/name/name.error'
import { InvalidEmailError } from '@shared/domain/email/email.error'

export interface Employee {
  cpf: string
  name: string
  email: string
  address: string
}

export type EmployeeResult = Either<InvalidNameError | InvalidEmailError, Employee>

export const createEmployee = (employee: Employee, adapters: EmployeeAdapters): EmployeeResult => {
  const nameOrError = createName(employee.name, adapters.name)
  const emailOrError = createEmail(employee.email, adapters.email)

  if (isLeft(nameOrError)) return nameOrError
  else if (isLeft(emailOrError)) return emailOrError

  return right({
    cpf: employee.cpf,
    name: nameOrError.value,
    email: emailOrError.value,
    address: employee.address
  })
}
