<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar'
import AppSidebar from '~/components/AppSidebar.vue'
import { Separator } from '~/components/ui/separator'
import { Button } from '~/components/ui/button'
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="min-h-screen w-full">
      <div class="flex flex-row items-center p-2">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Button as-child>
          <Link method="post" href="/logout" as="button">Logout</Link>
        </Button>
      </div>
      <Separator />
      <slot />
    </main>
  </SidebarProvider>
</template>
