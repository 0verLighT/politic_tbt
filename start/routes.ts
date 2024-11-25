/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from "#start/kernel";

const ResgisterController = () => import('#controllers/auth/registers_controller')
const LoginController = () => import('#controllers/auth/login_controller')
const logoutController = () => import('#controllers/auth/logouts_controller')
import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')

router
  .group(() => {
    router.get('/register', [ResgisterController, 'show'])
    router.post('/register', [ResgisterController, 'store'])
    router.get('/login', [LoginController, 'show'])
    router.post('/login', [LoginController, 'store'])
  })
  .prefix('auth')
  .use(middleware.guest())

router.post('/logout', [logoutController, 'store'])
