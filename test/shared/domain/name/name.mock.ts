import { createName } from '@shared/domain/name/name.vo'
import { nameValidator } from '@shared/infra/validators/name.validator'

export const giveNameOrError = (name: string) => createName(name, { validator: nameValidator })

export const validSimpleNames = [
  'Deivid',
  'Ártemis',
  'maria silva',
  `John D'Largy`,
  'Deivid Breno',
  'Thayane alves',
  `Brian O'Conner`,
  'carlos antônio',
  'Dejan Petković',
  'Marcos Assunção',
  'Niccolò machiavelli'
]

export const validFullnames = [
  'Åsa Ekström',
  'thayane alves lima',
  `Pierre-Simon Laplace`,
  'Hans Christian Ørsted',
  'William Henry Gates III',
  'Saddam Hussein al-Tikriti',
  'Sir Arthur Ignatius Conan Doyle',
  `Jean-Baptiste le Rond d'Alembert`,
  'deivid breno novaes de araújo silva',
  'Pedro de Alcântara Francisco António João Carlos'
]
