import EmployeeModel from './employee.model'

export default interface CompanyModel {
  cnpj: string
  name: string
  address: string
  employees: EmployeeModel[]
}
