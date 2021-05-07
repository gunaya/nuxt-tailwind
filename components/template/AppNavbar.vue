<template>
    <div class="">
        <!-- navbar -->
        <nav class=" bg-white shadow border-b dark:border-transparent dark:bg-gray-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="h-8 w-8" src="https://nuxtjs.org/logos/nuxt-white.svg" alt="Workflow logo" v-if="btnLabel === 'dark'"/>
                            <img class="h-8 w-8" src="https://nuxtjs.org/logos/nuxt.svg" alt="Workflow logo" v-else/>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-4 flex items-center md:ml-6">
                            <!-- Profile dropdown -->
                            <div class="ml-3 relative">
                                <div class="hidden md:block">
                                    <div class="ml-10 flex items-baseline">
                                        <NuxtLink
                                            to="/"
                                            class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                            >Home
                                        </NuxtLink>
                                        <NuxtLink 
                                            to="/projects" 
                                            class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                                            Projects
                                        </NuxtLink>
                                        <a
                                            href="#"
                                            class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                            >Team
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <!-- Color changer -->
                            <div class="ml-3">
                                <color-mode />
                            </div>
                        </div>
                    </div>
                    <div class="-mr-2 flex md:hidden">
                        <!-- Color changer -->
                        <div class="ml-3">
                            <color-mode />
                        </div>

                        <!-- Mobile menu button -->
                        <button
                            @click="toggle"
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-teal-700 focus:outline-none focus:bg-teal-700 dark:focus:bg-indigo-800 focus:text-white"
                        >
                            <svg
                                :class="[
                                    isOpen ? 'hidden' : 'block',
                                    'h-6 w-6'
                                ]"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                            <svg
                                :class="[
                                    isOpen ? 'block' : 'hidden',
                                    'h-6 w-6'
                                ]"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
                <div class="px-2 pt-2 pb-3 sm:px-3">
                    <NuxtLink
                        to="/"
                        class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                        >Home</NuxtLink
                    >
                    <NuxtLink
                        to="/projects"
                        class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                        >Projects</NuxtLink
                    >
                    <a
                        href="#"
                        class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                        >Team</a
                    >
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        }
    },
    computed: {
        btnLabel() {
            return this.$colorMode.preference === 'dark' ? 'dark' : 'light'
        }
    },
};
</script>

<style scoped>
.nuxt-link-exact-active {
    @apply text-white bg-teal-600 dark:bg-indigo-800 focus:outline-none;
}
</style>
