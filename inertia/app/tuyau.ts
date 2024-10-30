/// <reference path="../../adonisrc.ts" />

import { createTuyau } from '@tuyau/client'
import type { ApiDefinition } from '../../.adonisjs/api'
import { api } from '../../.adonisjs/api'

export const tuyau = createTuyau<{ definition: ApiDefinition }>({
  api,
  baseUrl: 'http://localhost:3333',
})
