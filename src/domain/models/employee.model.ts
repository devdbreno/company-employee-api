import CompanyModel from './company.model'

export default interface EmployeeModel {
  cpf: string
  name: string
  email: string
  address: string
  companies: CompanyModel[]
}
