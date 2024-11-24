<script setup lang="ts">
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import { useForm, Head } from '@inertiajs/vue3'
import AuthLayout from '~/layout/AuthLayout.vue'

defineOptions({ layout: AuthLayout })
defineProps<{
  errors: Record<string, string[]>
}>()

const form = useForm({
  username: '',
  email: '',
  password: '',
})
</script>

<template>
  <Head>
    <title>Register</title>
  </Head>
  <form
    class="flex flex-col gap-2 w-full max-w-sm"
    @submit.prevent="
      form.post('/auth/register', {
        onSuccess: () => form.reset(),
      })
    "
  >
    <h3 class="text-2xl font-bold">Register</h3>
    <div class="flex flex-col gap-1">
      <Input type="text" placeholder="Username" v-model="form.username" />
      <div v-if="form.errors.username">
        <span class="text-red-600">{{ form.errors.username }}</span>
      </div>
      <Input type="email" placeholder="Email" v-model="form.email" />
      <div v-if="form.errors.email">
        <span class="text-red-600"> {{ form.errors.email }}</span>
      </div>
      <Input type="password" placeholder="Password" v-model="form.password" />
      <div v-if="form.errors.password">
        <span class="text-red-600">{{ form.errors.password }}</span>
      </div>
    </div>
    <Button type="submit" :disabled="form.processing">Register</Button>
  </form>
</template>
