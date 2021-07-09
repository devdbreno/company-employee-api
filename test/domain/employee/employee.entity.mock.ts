import fakerBr from 'faker-br'

import { nameValidator } from '@shared/infra/validators/name.validator'
import { emailValidator } from '@shared/infra/validators/email.validator'

import { Employee, createEmployee } from '@domain/employee/employee.entity'

export const createRandomEmployee = (): Employee => ({
  cpf: fakerBr.br.cpf(),
  name: fakerBr.name.findName(),
  email: fakerBr.internet.email(),
  address: fakerBr.address.streetAddress(true)
})

export const giveEmployeeOrError = (employee: Employee) =>
  createEmployee(employee, { name: { validator: nameValidator }, email: { validator: emailValidator } })

export const validEmployees = [
  createRandomEmployee(),
  createRandomEmployee(),
  createRandomEmployee(),
  createRandomEmployee(),
  createRandomEmployee(),
  createRandomEmployee(),
  createRandomEmployee(),
  createRandomEmployee(),
  createRandomEmployee(),
  createRandomEmployee()
]
