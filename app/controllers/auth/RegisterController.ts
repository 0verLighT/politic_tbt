import type { HttpContext } from '@adonisjs/core/http'
import { RegisterValidator } from '#validators/auth'
import WebRegister from '#actions/auth/http/web_register'
import { inject } from '@adonisjs/core'

export default class RegisterController {
  @inject()
  async store({ request, response }: HttpContext, WebRegister: WebRegister) {
    const data = await request.validateUsing(RegisterValidator)
    await WebRegister.handle({ data })
    return response.redirect().toPath('/')
  }
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }
}
