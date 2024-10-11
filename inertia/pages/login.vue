<script setup lang="ts">
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import { ref } from 'vue'

const submit = () => {
  console.log('submit')
}
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <form class="flex flex-col gap-1 w-full max-w-sm" @submit.prevent="submit">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="submit">Login</Button>
    </form>
  </div>
</template>
