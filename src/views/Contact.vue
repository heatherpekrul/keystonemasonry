<template>
    <main>
        <Intro>
            <template v-slot:heading>
                Contact Us
            </template>
            <template v-slot:content>
                Contact {{ name }} to discuss and schedule your project plan today!
            </template>
        </Intro>

        <section class="contact">
            <div class="container">
                <p>Contact us via phone or email to schedule a time for us to discuss your project.</p>

                <p>We will arrange a visit to the work site in order to discuss the work to be performed
                    and take any necessary measurements. We are happy to offer suggestions and ideas if you
                    are unsure of what you need.</p>

                <p>We will then give you a free estimate. Should you decide to have us take care of your
                    project, contact us and we will schedule a start date.</p>

                <p>
                    <a :href="`tel:${phone}`" class="button">
                        <img src="/phone.svg" alt="">
                        {{ phone }}
                    </a>
                    <a :href="`mailto:${email}`" class="button">
                        <img src="/email.svg" alt="">
                        {{ email }}
                    </a>
                </p>
            </div>
        </section>
    </main>
</template>

<script>
import Config from '../config';
import Intro from '../components/Intro.vue';
export default {
    name: 'ContactView',
    components: {
        Intro,
    },
    data() {
        return {
            name: Config.name,
            email: Config.email,
            phone: Config.phone,
        };
    },
}
</script>

<style scoped lang="scss">
.contact {
    background: #fff;
    color: #000;

    .container {
        padding: 3rem;
    }
}
</style>