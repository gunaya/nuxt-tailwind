<template>
  <div class="bg-gray-200 dark:bg-midnight w-full h-full min-w-screen min-h-screen">
    <app-navbar />
    <!-- content -->
    <div class=" pt-4">
      <Nuxt />
    </div>

    
  </div>
</template>

<script>
import AppNavbar from '../components/template/AppNavbar'
export default {
  components: {AppNavbar}
}
</script>

<style>
/* .dark-mode {
  @apply bg-gray-800;
}

.light-mode {
  @apply bg-gray-200;
} */
</style>
