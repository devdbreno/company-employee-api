import { NameAdapters } from '@shared/domain/name/name.port'
import { EmailAdapters } from '@shared/domain/email/email.port'

export interface EmployeeAdapters {
  name: NameAdapters
  email: EmailAdapters
}
