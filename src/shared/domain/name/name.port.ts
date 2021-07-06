import { Either } from '@shared/core'
import { NameErrors } from '@shared/domain/name'

export interface NameValidator {
  validate(name: string): Either<NameErrors, boolean>
}
