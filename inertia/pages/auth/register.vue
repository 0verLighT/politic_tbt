<script setup lang="ts">
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <form class="flex flex-col gap-2 w-full max-w-sm" @submit.prevent="">
      <h3 class="text-2xl font-bold">Register</h3>
      <div class="flex flex-col gap-1">
        <Input type="text" placeholder="Name" name="name" />
        <Input type="email" placeholder="Email" name="email" />
        <Input type="password" placeholder="Password" name="password" />
      </div>
      <Button type="submit">Register</Button>
    </form>
  </div>
</template>
