<template>
    <div>
        <button class="btn border-none p-2 focus:outline-none" @click="changeMode">
            <fa icon="moon" class="text-gray-700" v-if="btnLabel === 'light'"/>
            <fa icon="sun" class="text-gray-300" v-else />
        </button>
    </div>
</template>

<script>
    export default {
        computed: {
            btnLabel() {
                return this.$colorMode.preference === 'dark' ? 'dark' : 'light'
            }
        },
        methods: {
            changeMode() {
                this.$colorMode.preference = 
                    this.$colorMode.preference === 'light' ? 'dark' : 'light'
            }
        }
    }
</script>