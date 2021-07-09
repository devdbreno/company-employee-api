export type EmailValidator = (email: string) => boolean

export interface EmailAdapters {
  validator: EmailValidator
}
