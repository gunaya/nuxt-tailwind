<template>
    <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl" data-aos="fade-up">
        <div class=" text-center my-4">
            <div class="block relative">
                <img src="/images/person/1.jpg" alt="Person One" class=" mx-auto h-52 w-52 object-cover object-center bg-gray-400 rounded-full">
            </div>
        </div>
        <div class=" flex flex-row justify-between px-8 pb-8 pt-4 ">
            <h1 class=" text-gray-700 dark:text-gray-200 text-lg ">
                John Doe <br>
                <span class=" text-teal-600 dark:text-indigo-400 text-base xl:text-lg">
                    Senior Web Developer
                </span>
            </h1>
            <div class=" my-auto text-gray-700 dark:text-gray-400 text-xl hidden xl:block">
                <a href="#" class=" ml-2 hover:text-teal-600 dark:hover:text-indigo-500">
                    <fa :icon="['fab', 'twitter']" />
                </a>
                <a href="#" class=" ml-2 hover:text-teal-600 dark:hover:text-indigo-500">
                    <fa :icon="['fab', 'linkedin']" />
                </a>
            </div>
        </div>
        
        <div class="xl:hidden flex flex-row justify-center text-gray-700 dark:text-gray-400 text-xl px-8 -mt-6">
            <a href="#" class=" mx-2 hover:text-teal-600 dark:hover:text-indigo-500">
                <fa :icon="['fab', 'twitter']" />
            </a>
            <a href="#" class=" mx-2 hover:text-teal-600 dark:hover:text-indigo-500">
                <fa :icon="['fab', 'linkedin']" />
            </a>
        </div>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>