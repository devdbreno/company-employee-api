import { NameValidator } from '@shared/domain/name/name.port'

const validNameRegex =
  /^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){1,})(['’\-,\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){2,})?)*)$/
const equalsLettersRegex = /^(.)\1+$/

export const nameValidator: NameValidator = (name: string) => {
  const trimmedName = name.trim().toLowerCase()

  const isValidName = validNameRegex.test(trimmedName) && !equalsLettersRegex.test(trimmedName)
  const isRightLength = trimmedName.length >= 3 && trimmedName.length <= 50

  return isRightLength && isValidName
}
