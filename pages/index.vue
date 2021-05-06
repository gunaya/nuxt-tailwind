<template>
    <!-- <div class="container pt-10 mx-auto">
        <div class="flex flex-col items-center">
        <Logo />
        <h1 class="text-xl font-mono block font-semibold md:text-3xl text-gray-700 dark:text-gray-300 mt-4">
            nuxt-tailwind
        </h1>
        </div>
    </div> -->

    <div>
        <app-hero />

        <div>
            <app-feature/>
        </div>

        <div class=" mt-32">
            <app-testimonial/>
        </div>

        <app-subscribe class="mt-20"/>
    </div>
</template>

<script>
import AppFeature from '../components/landing/AppFeature.vue'
import AppHero from '../components/landing/AppHero.vue'
import AppSubscribe from '../components/landing/AppSubscribe.vue'
import AppTestimonial from '../components/landing/AppTestimonial.vue'

export default {
    components: { AppHero, AppFeature, AppTestimonial, AppSubscribe },

}
</script>