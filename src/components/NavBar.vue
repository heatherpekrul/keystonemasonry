<template>
  <nav aria-label="Main Navigation">
    <router-link :to="{ name: 'HomeView' }" class="logo">
      <img src="/logo.svg" :alt="name">
    </router-link>

    <ul>
      <li>
        <router-link :to="{ name: 'HomeView' }">
          Home
        </router-link>
      </li>

      <li>
        <router-link :to="{ name: 'AboutView' }">
          About
        </router-link>
      </li>

      <li>
          <router-link :to="{ name: 'RestorationView' }">
              Restoration
          </router-link>
      </li>

      <li>
        <router-link :to="{ name: 'GalleryView' }">
          Gallery
        </router-link>
      </li>

      <li>
        <router-link :to="{ name: 'ContactView' }" class="contact">
          Contact
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Config from '../config';
export default {
    name: 'NavBar',
    data() {
      return {
        name: Config.name,
      };
    },
};
</script>

<style lang="scss" scoped>
nav {
  background: #fff;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;

  @media(min-width: settings.$breakpoint-sm) {
    gap: 2rem;
  }

  .logo {
    img {
      width: 150px;
    }
  }
  
  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 1rem;

    @media(min-width: settings.$breakpoint-sm) {
      gap: 2rem;
    }

    li {
      display: inline-block;
      margin: 0;
      padding: 0;

      a {
        display: block;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.1em;
        color: var(--color-charcoal);
        line-height: 1;
        position: relative;
        padding: 1rem 0;

        &:hover {
          color: var(--color-midnight-blue);

          &:after {
            width: 100%;
          }
        }

        &:after {
          content: '';
          background: var(--color-midnight-blue);
          display: block;
          position: absolute;
          bottom: 0.25rem;
          left: 0;
          width: 0%;
          height: 2px;
          transition: width 150ms ease;
        }

        &.contact {
          background: var(--color-midnight-blue);
          color: #fff;
          padding: 0.75rem;
          border-radius: 0.25rem;
          transition: color 0.2s, background-color 0.2s, box-shadow 0.5s;
          
          &:focus,
          &:hover {
            box-shadow: 0.25em 0.25em 0.5em -0.15em rgba(0,0,0,0.5);
          }

          &::after {
            display: none;
          }
        }
      }
    }
  }
}
</style>
