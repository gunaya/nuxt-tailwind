<template>
    <div class="h-screen flex">
        <div class="m-auto mt-32 px-40 py-16 w-full">
            <div class="items-center md:flex">
                <div class="w-full md:w-1/2" data-aos="zoom-in-right">
                    <div class="max-w-lg">
                        <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white md:text-3xl" >Best Place To Choose Your Website</h1>
                        <p class="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                        <button class="px-3 py-2 mt-4 text-sm tracking-wider font-medium font-display text-white uppercase bg-teal-600 dark:bg-indigo-600 rounded-md
                                    hover:bg-teal-500 dark:hover:bg-indigo-500 hover:-translate-y-0.5 transform transition
                                    focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-1 focus:ring-indigo-600 focus:bg-teal-500 dark:focus:bg-indigo-500
                                    " @click="toProject">Browse Now</button>
                    </div>
                </div>

                <div class="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2" data-aos="zoom-in-up" data-aos-delay="100" data-aos-mirror="true">
                    <img class="w-full h-full max-w-2xl" src="https://merakiui.com/_nuxt/img/Catalogue-pana.666df84.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            toProject(){
                this.$router.push({path: '/projects'})
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
