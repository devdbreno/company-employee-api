import { isRight } from '@shared/either'

import { validEmployees, giveEmployeeOrError } from '@test/domain/employee/employee.entity.mock'

describe('Employee entity (domain/employee)', () => {
  it('Should create a multiple valid employees', () => {
    const employeesOrErrors = validEmployees.map((validEmployee) => giveEmployeeOrError(validEmployee))
    const employeesOrErrorsValues = employeesOrErrors.map(({ value }) => value)

    const allResultsAreRight = employeesOrErrors.every((lr) => isRight(lr))

    expect(allResultsAreRight).toBe(true)
    expect(employeesOrErrorsValues).toStrictEqual(validEmployees)
  })
})
