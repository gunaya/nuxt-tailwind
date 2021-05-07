<template>
    <div class="">
        
        <div class="w-full p-12">
            <div class="header flex items-end justify-between mb-12">
                <div class="title">
                    <p class="text-4xl font-bold text-gray-800 mb-4 dark:text-gray-200">
                        Projects
                    </p>
                    <p class="text-2xl font-light text-gray-400">
                        All projects created by us
                    </p>
                </div>
                <!-- <div class="text-end">
                    <form class="flex w-full max-w-sm space-x-3">
                        <div class=" relative ">
                            <input type="text" id="&quot;form-subscribe-Search" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a title"/>
                        </div>
                        <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                            Search
                        </button>
                    </form>
                </div> -->
            </div>
            <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <project-item />
                <project-item />
                <project-item />
                <project-item />
                <project-item />
                <project-item />

            </div>
        </div>

    </div>
</template>

<script>
import ProjectItem from '../../components/projects/ProjectItem.vue'
    export default {
    components: { ProjectItem },
        
    }
</script>

<style lang="scss" scoped>

</style>