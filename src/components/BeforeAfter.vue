<template>
  <div class="before-after">
      <div class="before-after__before">
          <slot name="before-image"></slot>
          <div class="caption">
            <slot name="before-image-caption"></slot>
          </div>
      </div>

      <div class="before-after__after">
          <slot name="after-image"></slot>
          <div class="caption">
            <slot name="after-image-caption"></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'BeforeAfter',
};
</script>

<style lang="scss" scoped>
.before-after {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    margin: 0 0 2rem 0;

    .before-after__before,
    .before-after__after {
        position: relative;
        flex: 0 1 100%;

        @media(min-width: settings.$breakpoint-sm) {
            flex-basis: calc(50% - 0.5rem);
        }
    }

    .caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.75);
        color: #fff;
        padding: 1rem;
    }
}
</style>
