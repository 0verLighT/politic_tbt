/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { LoginValidator, RegisterValidator } from '#validators/auth'
router
  .get('/', async ({ inertia }) => {
    return inertia.render('home')
  })
  .as('home')

// AUTH ROUTES
router
  .group(() => {
    router.get('/register', async ({ inertia }) => {
      return inertia.render('auth/register')
    })
    router.post('/register', async (ctx) => {
      const data = await ctx.request.validateUsing(RegisterValidator)
      console.log(data)
      return ctx.response.redirect().back()
    })
    router.get('/login', async (ctx) => {
      return ctx.inertia.render('auth/login')
    })
    router.post('/login', async (ctx) => {
      const data = await ctx.request.validateUsing(LoginValidator)
      console.log(data)
      return ctx.response.redirect().back()
    })
  })
  .prefix('auth')
