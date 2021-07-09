import { giveEmployeeOrError } from './employee.entity.mock'

describe('Employee entity (domain/employee)', () => {
  it('Should create a valid employee', () => {
    const employeeOrError = giveEmployeeOrError({
      cpf: '1734213214199',
      name: 'Deivid Breno',
      email: 'dbrenoti@gmail.com',
      address: 'Rua Sérvulo Dourado, 38'
    })

    console.log(employeeOrError.value)
  })
})
