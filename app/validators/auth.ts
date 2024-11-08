import vine from '@vinejs/vine'

export const RegisterValidator = vine.compile(
  vine.object({
    username: vine.string().minLength(3).maxLength(256),
    email: vine.string().maxLength(256).email().normalizeEmail(),
    password: vine.string().minLength(8).maxLength(256),
  })
)

export const LoginValidator = vine.compile(
  vine.object({
    email: vine.string().maxLength(256).email().normalizeEmail(),
    password: vine.string().minLength(8).maxLength(256),
  })
)
