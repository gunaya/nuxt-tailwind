<template>
    <div class=" mb-10">
        <div class="p-12">
            <p class="text-center text-3xl font-bold text-gray-800 dark:text-white xl:mb-32 md:mb-12 ml-4">
                Professional team
                <br>
                <span class="text-xl font-normal text-gray-500 dark:text-gray-200">
                    Meet the best team in world
                </span>
            </p>
            <div class=" grid xl:gap-32 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
                <team-profile />
                <team-profile />
                <team-profile />
            </div>
        </div>

    </div>
</template>

<script>
import ProfileDua from '../../components/team/ProfileDua.vue'
import TeamProfile from '../../components/team/TeamProfile.vue'
    export default {
    components: { TeamProfile, ProfileDua },

    }
</script>

<style lang="scss" scoped>

</style>
