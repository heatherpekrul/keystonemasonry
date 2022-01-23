<template>
    <main>
        <Intro />
        <section class="gallery">
            <div class="gallery__photo featured">
                <img src="/gallery/home/keystone-archway.jpg" alt="Keystone Archway">
                <div class="gallery__photo__overlay">
                    Stone Archway
                </div>
            </div>

            <div class="gallery__photo">
                <img src="/gallery/decorative/decorative1.jpg" alt="Stone Decorative Elements">
                <div class="gallery__photo__overlay">
                    Stone Decorative Elements
                </div>
            </div>

            <div class="gallery__photo">
                <img src="/gallery/decorative/entryway.jpg" alt="Stone Entryway">
                <div class="gallery__photo__overlay">
                    Stone Entryway
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Intro from '../components/Intro.vue';
export default {
    name: 'HomeView',
    components: {
        Intro,
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
            background: rgba(#000, 0.85);
            color: #fff;
            padding: 2rem;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
        }
    }
}
</style>