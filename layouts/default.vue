<template>
  <div class="flex flex-col min-h-screen justify-between font-body bg-white dark:bg-gray-900 ">
    <app-navbar />
    <!-- content -->
    <div class="mb-auto">
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
