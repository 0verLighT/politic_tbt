<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode()

const toggleTheme = () => {
  mode.value = mode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <Button @click="toggleTheme">{{ mode === 'light' ? 'Clair' : 'Sombre' }}</Button>
</template>
