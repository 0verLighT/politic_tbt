/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router
  .get('/', async ({ inertia }) => {
    return inertia.render('home')
  })
  .as('home')

router
  .get('/auth/login', async ({ inertia }) => {
    return inertia.render('auth/login')
  })
  .as('auth.login')

router.group(() => {
  router.get('/auth/register', async ({ inertia }) => {
    return inertia.render("auth/register")
  })
  router.post("auth/register", async (ctx) => {
    return ctx.response.redirect().back()
  })
})
