<script setup lang="ts">
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
const submit = (e: any) => {
  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)
  console.log(data)
}
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <form class="flex flex-col gap-2 w-full max-w-sm" @submit.prevent="submit">
      <div class="flex flex-col gap-1">
        <Input type="email" placeholder="Email" name="email" />
        <Input type="password" placeholder="Password" name="password" />
      </div>
      <Button type="submit">Login</Button>
    </form>
  </div>
</template>
