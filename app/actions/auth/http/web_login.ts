// Path: app/actions/auth/http/web_register.ts
import User from '#models/user'
import { LoginValidator } from '#validators/auth'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { Infer } from '@vinejs/vine/types'

type Params = {
  data: Infer<typeof LoginValidator>
}

@inject()
export default class WebRegister {
  constructor(protected ctx: HttpContext) {}

  async handle({ data }: Params) {
    const user = await User.verifyCredentials(data.email, data.password)
    await this.ctx.auth.use('web').login(user)
    return { user }
  }
}
