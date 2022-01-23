<template>
    <main>
        <Intro>
            <template v-slot:heading>
                About Us
            </template>
            <template v-slot:content>
                Greg Onnen has worked as a stonemason in Topeka, Kansas since 1988. At {{ name }}, we strive to
                craft beautiful, lasting, and functional stone and brick projects.
            </template>
        </Intro>

        <section class="services">
            <div class="container">
                <h1>Services</h1>
                <p>{{ name }} can help with a variety of services, including new structures or repairing existing ones.
                    Some examples of work that {{ name }} can complete for you include:</p>
                <ul>
                    <li>Stone and brick mailboxes</li>
                    <li>Stone and brick veneers</li>
                    <li>Masonry restoration and repair</li>
                    <li>Stone and brick patios</li>
                    <li>Masonry planters</li>
                    <li>Retaining walls</li>
                    <li>Stone and brick steps</li>
                    <li>Masonry barbecue pits and fireplaces</li>
                    <li>Glass blocks</li>
                    <li>Tuckpointing</li>
                    <li>Other masonry projects</li>
                </ul>
            </div>
        </section>

        <section class="areas-served">
            <div class="container">
                <h1>Areas Served</h1>
                <p>While {{ name }} predominately serves the Topeka, Kansas area, we will also travel to locations
                    including those listed below. This is not an exhaustive list - please contact us for all inquiries.</p>
                    <ul>
                        <li>Topeka</li>
                        <li>Meriden</li>
                        <li>Auburn</li>
                        <li>Silver Lake</li>
                        <li>Rossville</li>
                        <li>Tecumseh</li>
                        <li>Hoyt</li>
                        <li>Maple Hill</li>
                        <li>Carbondale</li>
                        <li>Perry</li>
                        <li>Lecompton</li>
                        <li>Lawrence</li>
                        <li>Mayetta</li>
                        <li>Holton</li>
                        <li>Oskaloosa</li>
                        <li>Ozawkie</li>
                        <li>Wakarusa</li>
                        <li>Valley Falls</li>
                    </ul>
            </div>
        </section>
    </main>
</template>

<script>
import Config from '../config';
import Intro from '../components/Intro.vue';
export default {
    name: 'AboutView',
    components: {
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
.services {
    background: #fff;
    overflow: auto;
    color: #000;

    .container {
        padding: 3rem;
    }
}

.areas-served {
    background: var(--color-cream);
    overflow: auto;
    color: #000;

    .container {
        padding: 3rem;
    }
}
</style>