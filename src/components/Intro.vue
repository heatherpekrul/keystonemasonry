<template>
  <section class="intro">
      <div class="container">
        <h1 class="intro__heading">
            <slot name="heading"></slot>
        </h1>

        <div class="intro__content">
            <slot name="content"></slot>
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
            flex: 0 1 40%;
            margin: 0;
        }
    }

    &__content {
        line-height: 1.5;

        @media(min-width: settings.$breakpoint-sm) {
            flex: 0 1 60%;
        }
    }
}
</style>
