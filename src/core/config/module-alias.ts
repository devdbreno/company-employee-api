import { join, resolve } from 'path'
import { addAliases } from 'module-alias'

export const src = resolve(__dirname, '../..')

addAliases({
  '@core': join(`${src}/core`),
  '@domain': join(`${src}/domain`),
  '@shared': join(`${src}/shared`)
})
