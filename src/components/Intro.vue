<template>
  <section class="intro">
      <div class="container">
        <h1 class="intro__heading">
            Create. Renovate. Repair. Update.
        </h1>

        <div class="intro__content">
            No matter your masonry project, Keystone Masonry can help. We have experience in a wide variety of stone
            and brick projects in the Topeka, Kansas area. Contact us today to schedule an appointment to discuss your
            masonry project.
        </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'Intro',
};
</script>

<style lang="scss" scoped>
.intro {
    background: var(--color-cream);
    color: #000;
    padding: 3rem;

    .container {

        @media(min-width: settings.$breakpoint-sm) {
            display: flex;
            flex-flow: row nowrap;
            gap: 3rem;
        }
    }

    &__heading {
        margin: 0 0 1rem 0;

        @media(min-width: settings.$breakpoint-sm) {
            text-align: right;
            flex: 0 1 50%;
            margin: 0;
        }
    }

    &__content {
        line-height: 1.5;

        @media(min-width: settings.$breakpoint-sm) {
            flex: 0 1 50%;
        }
    }
}
</style>
