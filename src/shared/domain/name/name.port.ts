export type NameValidator = (name: string) => boolean

export interface NameAdapters {
  validator: NameValidator
}
