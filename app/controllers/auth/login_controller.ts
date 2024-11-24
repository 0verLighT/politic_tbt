// Path: app/controllers/auth/register_controller.ts
import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { LoginValidator } from '#validators/auth'
import WebLogin from '#actions/auth/http/web_login'

export default class LoginController {
  @inject()
  async store({ request, response }: HttpContext, WebLogin: WebLogin) {
    const data = await request.validateUsing(LoginValidator)
    await WebLogin.handle({ data })
    return response.redirect().toRoute('/')
  }
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }
}
