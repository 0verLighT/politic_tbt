import User from '#models/user'
import { RegisterValidator } from '#validators/auth'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { Infer } from '@vinejs/vine/types'

type Params = {
  data: Infer<typeof RegisterValidator>
}

@inject()
export default class WebRegister {
  constructor(protected ctx: HttpContext) {}

  async handle({ data }: Params) {
    const user = await User.create(data)
    await this.ctx.auth.use('web').login(user)
    return { user }
  }
}
