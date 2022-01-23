<template>
    <main>
        <Intro>
            <template v-slot:heading>
                Gallery
            </template>
            <template v-slot:content>
                Some examples of our work are shown below. We have access to a variety of stone and brick materials,
                and we can help you design and plan your next project no matter how big or small.
            </template>
        </Intro>

        <section class="gallery">
            <div class="gallery__item" v-for="(image, index) in images" v-bind:key="index">
                <img
                    :src="image.src"
                    :alt="image.alt"
                    loading="lazy"
                >
            </div>
        </section>
    </main>
</template>

<script>
import GalleryConfig from '../config/gallery';
import Intro from '../components/Intro.vue';
export default {
    name: 'GalleryView',
    components: {
        Intro,
    },
    data() {
        return {
            images: GalleryConfig.images,
        };
    },
};
</script>

<style scoped lang="scss">
.gallery {
    display: flex;
    flex-flow: row wrap;
    background: #fff;
    padding: 1rem;
    gap: 1rem;

    &__item {
        flex: 0 1 100%;

        @media(min-width: settings.$breakpoint-md) {
            flex-basis: calc(50% - 0.5rem);
        }
    }
}
</style>