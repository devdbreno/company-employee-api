import { join, resolve } from 'path'
import { addAliases } from 'module-alias'

export const src = resolve(__dirname, '../..')

addAliases({
  '@shared': join(`${src}/shared`),
  '@modules': join(`${src}/modules`)
})
