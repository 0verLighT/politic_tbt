<script setup lang="ts">
import SwitchBrightness from '~/components/SwitchBrightness.vue'
import { Link } from '@tuyau/inertia/vue'
</script>

<template>
  <SwitchBrightness />
  <Link route="auth.login">Go to login</Link>
</template>
