import { nameValidator } from '@shared/infra/validators/name.validator'
import { emailValidator } from '@shared/infra/validators/email.validator'

import { Employee, createEmployee } from '@domain/employee/employee.entity'

export const giveEmployeeOrError = (employee: Employee) =>
  createEmployee(employee, { name: { validator: nameValidator }, email: { validator: emailValidator } })
