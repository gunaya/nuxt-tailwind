<template>
    <div class="">
        <div class="w-full p-12">
            <p class="text-center text-3xl font-bold text-gray-800 dark:text-white mb-12 ml-4">
                Projects
                <br>
                <span class="text-xl font-normal text-gray-500 dark:text-gray-200">
                    List of all projects/products created by us
                </span>
            </p>
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
import ProjectItem from "../../components/projects/ProjectItem.vue";
export default {
    components: { ProjectItem }
};
</script>

<style lang="scss" scoped></style>
