<template>
  <div class="flex flex-col h-screen justify-between">
    <app-navbar />
    <!-- content -->
    <div class="bg-white dark:bg-midnight mb-auto">
      <Nuxt />
    </div>

    <app-footer />
  </div>
</template>

<script>
import AppFooter from '../components/template/AppFooter.vue'
import AppNavbar from '../components/template/AppNavbar'
export default {
  components: {AppNavbar, AppFooter},
  scrollToTop: true
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
