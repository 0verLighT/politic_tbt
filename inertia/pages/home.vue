<script setup lang="ts">
import SwitchBrightness from '~/components/SwitchBrightness.vue'
import { Link } from '@tuyau/inertia/vue'
import { Button } from '~/components/ui/button'
</script>

<template>
  <SwitchBrightness />
  <Link route="auth.login">
    <Button> Login </Button>
  </Link>
</template>
