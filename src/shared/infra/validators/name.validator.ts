import isAplha from 'validator/lib/isAlpha'
import { NameValidator } from '@shared/domain/name/name.port'

export const nameValidatorAdapter: NameValidator = {
  validate(name: string) {
    const trimmedName = name.replace(/\s+/g, '')

    return trimmedName.length >= 3 && trimmedName.length <= 50 && isAplha(trimmedName, 'pt-BR')
  }
}
