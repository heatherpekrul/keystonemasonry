<template>
    <main>
        <Intro>
            <template v-slot:heading>
                Create. Renovate. Repair. Update.
            </template>
            <template v-slot:content>
                No matter your masonry project, {{ name }} can help. We have experience in a wide variety of stone
                and brick projects in the Topeka, Kansas area. Contact us today to schedule an appointment with a skilled
                masonry contractor to discuss your project.
            </template>
        </Intro>
        <section class="gallery">
            <div class="gallery__photo featured">
                <img
                    srcset="/gallery/home/keystone-archway_small.jpg 480w,
                    /gallery/home/keystone-archway_medium.jpg 768w,
                    /gallery/home/keystone-archway_large.jpg 1024w,
                    /gallery/home/keystone-archway_extra-large.jpg 2000w"
                    sizes="100vw"
                    src="/gallery/home/keystone-archway_extra-large.jpg"
                    alt="Keystone Archway"
                >
                <div class="gallery__photo__overlay">
                    Stone Archway
                </div>
            </div>

            <div class="gallery__photo">
                <img
                    srcset="/gallery/decorative/decorative1_small.jpg 480w,
                    /gallery/decorative/decorative1_medium.jpg 768w,
                    /gallery/decorative/decorative1_large.jpg 1024w,
                    /gallery/decorative/decorative1_extra-large.jpg 2000w"
                    sizes="(max-width: 768px) 100vw,
                    50vw"
                    src="/gallery/decorative/decorative1_extra-large.jpg"
                    alt="Stone Decorative Elements"
                >
                <div class="gallery__photo__overlay">
                    Stone Decorative Elements
                </div>
            </div>

            <div class="gallery__photo">
                <img
                    srcset="/gallery/decorative/entryway_small.jpg 480w,
                    /gallery/decorative/entryway_medium.jpg 768w,
                    /gallery/decorative/entryway_large.jpg 1024w,
                    /gallery/decorative/entryway_extra-large.jpg 2000w"
                    sizes="(max-width: 768px) 100vw,
                    50vw"
                    src="/gallery/decorative/entryway_extra-large.jpg"
                    alt="Stone Entryway"
                >
                <div class="gallery__photo__overlay">
                    Stone Entryway
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Config from '../config';
import Intro from '../components/Intro.vue';
export default {
    name: 'HomeView',
    components: {
        Intro,
    },
    data() {
        return {
            name: Config.name,
        };
    },
};
</script>

<style scoped lang="scss">
.gallery {
    display: flex;
    flex-flow: row wrap;

    &__photo {
        flex: 0 1 100%;
        position: relative;
        overflow: hidden;
        padding-bottom: 50%;

        @media(min-width: settings.$breakpoint-sm) {
            flex-basis: 50%;
            padding-bottom: 33%;
        }

        &.featured {
            flex-basis: 100%;
            padding-bottom: 75%;
        }

        img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &__overlay {
            background: rgba(#000, 0.8);
            color: #fff;
            padding: 1rem;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;

            @media(min-width: settings.$breakpoint-md) {
                padding: 2rem;
            }
        }
    }
}
</style>