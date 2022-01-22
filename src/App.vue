<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style lang="scss">
@use 'normalize.css/normalize.css';

:root {
  /* COLORS */
  --color-midnight-blue: #15426B;
  --color-deep-ocean: #06152e;
  --color-taupe: #8C8782;
  --color-cream: #EAE5E5;
  --color-charcoal: #444040;

  /* TYPOGRAPHY */
  --font-size-base: 16px;
  --font-primary: 'Raleway', sans-serif;
  --font-primary-weight-normal: 300;
  --font-primary-weight-semibold: 400;
  --font-primary-weight-bold: 700;
  --font-accent: 'Noto Serif', serif;
  --font-accent-weight-normal: 400;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background: var(--color-charcoal);
  color: #fff;
  font-size: calc(var(--font-size-base) * 0.85);
  font-family: var(--font-primary);
  font-weight: var(--font-primary-weight-normal);

  @media (min-width: settings.$breakpoint-sm) {
    font-size: var(--font-size-base);
  }
}

a {
  font-weight: var(--font-primary-weight-bold);
  text-decoration: underline;
  color: var(--color-midnight-blue);
  transition: color 100ms ease-in;

  &:hover {
    color: var(--color-deep-ocean);
  }
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-accent);
  font-weight: var(--font-accent-weight-normal);
  margin: 0.5em 0;
  line-height: 1.25;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.75em;
}

h3 {
  font-size: 1.5em;
}

h4 {
  font-size: 1.33em;
}

h5 {
  font-size: 1.25em;
}

h6 {
  font-size: 1.15em;
}

img {
  max-width: 100%;
  height: auto;
}

.visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0; 
}

.container {
  max-width: 960px;
  margin: 0 auto;
}
</style>
