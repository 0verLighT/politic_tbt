<script setup lang="ts">
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import { useForm, Head, Link } from '@inertiajs/vue3'

defineProps<{
  errors: Record<string, string[]>
}>()

const form = useForm({
  email: '',
  password: '',
})
</script>

<template>
  <Head>
    <title>Login</title>
  </Head>
  <div class="flex items-center justify-center h-screen">
    <form
      class="flex flex-col gap-2 w-full max-w-sm"
      @submit.prevent="
        form.post('/auth/login', {
          onSuccess: () => form.reset(),
        })
      "
    >
      <h1 class="text-2xl font-bold">Login</h1>
      <div class="flex flex-col gap-1">
        <Input type="email" placeholder="Email" name="email" v-model="form.email" />
        <div v-if="form.errors.email">
          <span class="text-red-600">{{ form.errors.email }}</span>
        </div>
        <Input type="password" placeholder="Password" name="password" v-model="form.password" />
        <div v-if="form.errors.password">
          <span class="text-red-600">{{ form.errors.password }}</span>
        </div>
      </div>
      <Link href="/auth/register">
        <Button variant="ghost"> Don't have account, Register here </Button>
      </Link>
      <Button type="submit" :disabled="form.processing">Login</Button>
    </form>
  </div>
</template>
