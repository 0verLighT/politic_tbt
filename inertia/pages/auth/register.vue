<script setup lang="ts">
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import {useForm} from "@inertiajs/vue3";
import { Link } from '@tuyau/inertia/vue'

const form = useForm({
  name: "",
  email : "",
  password: ""
})
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <form class="flex flex-col gap-2 w-full max-w-sm" @submit.prevent="form.post('/auth/register', {
      onSuccess: () => form.reset()
    })">
      <h3 class="text-2xl font-bold">Register</h3>
      <div class="flex flex-col gap-1">
        <Input type="text" placeholder="Name" name="name" v-model="form.name" />
        <Input type="email" placeholder="Email" name="email" v-model="form.email"/>
        <Input type="password" placeholder="Password" name="password" v-model="form.password"/>
      </div>
      <Link route="auth.login">
        <Button variant="ghost" >
          Already have account, Connect here
        </Button>
      </Link>
      <Button type="submit" :disabled="form.processing">Register</Button>
    </form>
  </div>
</template>
