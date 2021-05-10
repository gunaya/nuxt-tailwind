<template>
    <div class="p-12">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center">
            <div class=" -mx-4 md:-mx-12 relative mt-0 lg:col-start-1">
                <img src="https://www.tailwind-kit.com/images/object/9.jpg" alt="illustration" class="relative mx-auto shadow-lg rounded w-56 lg:w-full md:max-w-sm" />
            </div>

            <div class=" mt-10 lg:mt-10 lg:col-start-2">
                <h4 class="text-3xl leading-8 tracking-wider text-center lg:text-left font-bold text-gray-900 dark:text-white sm:leading-9">
                    Who We Are
                </h4>
                <ul class="mt-10 text-gray-700 dark:text-gray-300 text-justify md:px-20 lg:px-0 lg:pr-20">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita cum, nemo repellendus, placeat obcaecati dolor alias non optio reprehenderit dolores accusantium laudantium ipsa iusto, fugiat facilis aliquam. Minus, facere ex ullam ea placeat accusamus modi enim commodi necessitatibus. Modi, dignissimos.
                </ul>
            </div>
        </div>

        <div class="mt-20" data-aos="fade-up">
            <p class="text-center text-3xl font-bold text-gray-800 dark:text-white mb-12 ml-4">Our Jurney</p>

            <left-timeline />
            <right-timeline />
            <left-timeline />
        </div>
    </div>
</template>

<script>
import RightTimeline from '../../components/about/timeline/RightTimeline';
import LeftTimeline from '../../components/about/timeline/LeftTimeline'

export default {
    components : {
        RightTimeline, LeftTimeline
    }
};
</script>

<style lang="scss" scoped></style>
