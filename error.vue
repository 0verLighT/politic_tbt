<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{ error: NuxtError }>();
</script>

<template>
  <div>
    <h1 v-if="error.statusCode === 404">{{ $t("error.notFound.title") }}</h1>
    <h1>{{ error.statusCode }}</h1>
    <NuxtLink to="/">{{ $t("error.notFound.msgBtn") }}</NuxtLink>
  </div>
</template>
