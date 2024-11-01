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

router.group(() => {
  router.get('/register', async ({ inertia }) => {
    return inertia.render("auth/register")
  })
  router.post("/register", async (ctx) => {
    return ctx.response.redirect().back()
  })
}).prefix("auth")

router.group(() => {
  router.get("/login", async (ctx) => {
    return ctx.inertia.render("auth/login")
  })
  router.post("/login", async (ctx) => {
    return ctx.response.redirect().back()
  })
}).prefix("auth")
