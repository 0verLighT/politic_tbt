import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import WebLogout from '#actions/auth/http/web_logout'

export default class LogoutsController {
  @inject()
  async store({ response }: HttpContext, WebLogout: WebLogout) {
    await WebLogout.handle()
    return response.redirect().toRoute('/auth/login')
  }
}
