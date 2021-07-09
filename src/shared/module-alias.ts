import { join, resolve } from 'path'
import { addAliases } from 'module-alias'

export const src = resolve(__dirname, '..')

console.log(src)

addAliases({
  '@domain': join(`${src}/domain`),
  '@shared': join(`${src}/shared`)
})
