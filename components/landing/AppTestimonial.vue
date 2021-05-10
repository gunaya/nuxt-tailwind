<template>
    <div  data-aos="fade-up" data-aos-delay="300">
        
        <div class="w-full mx-auto p-8">
            <img src="https://nuxtjs.org/logos/nuxt.svg" class="h-12 w-12 mb-6 m-auto"/>
            <p class="text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-2xl">
                <span class="font-bold dark:text-indigo-500 text-teal-600">
                    “
                </span>
                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                <span class="font-bold dark:text-indigo-500 text-teal-600">
                    ”
                </span>
            </p>
        </div>
        <div class="flex justify-center">
            <div class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-stretch">
                <div class="w-full max-w-xs text-center justify-self-center">
                    <img class="object-cover object-center w-48 h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar"/>

                    <div class="mt-2">
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Client A</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Org</span>
                    </div>
                </div>

                <div class="w-full max-w-xs text-center justify-self-center">
                    <img class="object-cover object-center w-48 h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                    <div class="mt-2">
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Client B</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Org</span>
                    </div>
                </div>

                <div class="w-full max-w-xs text-center justify-self-center">
                    <img class="object-cover object-center w-48 h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar"/>

                    <div class="mt-2">
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Client C</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Org</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '../Logo.vue'
    export default {
    components: { Logo },
        
    }
</script>

<style lang="scss" scoped>

</style>