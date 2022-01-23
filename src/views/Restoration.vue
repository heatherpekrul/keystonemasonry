<template>
    <main>
        <Intro>
            <template v-slot:heading>
                Restoration
            </template>
            <template v-slot:content>
                The skilled masons at {{ name }} can return your brick and stone to great condition.
            </template>
        </Intro>

        <section class="overview">
            <div class="container">
                <h1>Overview</h1>
                <p>Over time, brick and stone areas may become damaged due to a variety of reasons, including water,
                    wind, weather, and more. If this damage is not repaired, it can result in worse damage that is
                    more expensive to fix. Additionally, masonry work should be appropriately sealed to help protect it
                    from future damage.</p>

                <p>{{ name }} is experienced in masonry restoration - contact us for more information about how to get
                    started.</p>

                <BeforeAfter>
                    <template v-slot:before-image>
                        <img src="/gallery/restoration/before-clean.jpg" alt="Before Cleaning and Sealing">
                    </template>

                    <template v-slot:before-image-caption>
                        Before Cleaning and Sealing
                    </template>

                    <template v-slot:after-image>
                        <img src="/gallery/restoration/after-clean.jpg" alt="After Cleaning and Sealing">
                    </template>

                    <template v-slot:after-image-caption>
                        After Cleaning and Sealing
                    </template>
                </BeforeAfter>

                <BeforeAfter>
                    <template v-slot:before-image>
                        <img src="/gallery/restoration/before-wall.jpg" alt="Before Reconstruction">
                    </template>

                    <template v-slot:before-image-caption>
                        Before Restoration
                    </template>

                    <template v-slot:after-image>
                        <img src="/gallery/restoration/after-wall.jpg" alt="After Restoration">
                    </template>

                    <template v-slot:after-image-caption>
                        After Restoration
                    </template>
                </BeforeAfter>

                <h2>Historic Restoration</h2>

                <p>{{ name }} has extensive experience in historic restorations. Brick and stone have been used for hundreds of
                    years in construction, and these historic structures need maintenance to show off their beauty and charm.
                    {{ name }} is skilled in restoring masonry - even when the structure is very old and has historic value.</p>
            </div>
        </section>
    </main>
</template>

<script>
import Config from '../config';
import BeforeAfter from '../components/BeforeAfter.vue';
import Intro from '../components/Intro.vue';
export default {
    name: 'AboutView',
    components: {
        BeforeAfter,
        Intro,
    },
    data() {
        return {
            name: Config.name,
        };
    },
}
</script>

<style scoped lang="scss">
.overview {
    background: #fff;
    overflow: auto;
    color: #000;

    .container {
        padding: 3rem;
    }
}
</style>