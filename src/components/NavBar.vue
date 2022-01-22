<template>
  <nav>
    <router-link :to="{ name: 'HomeView' }" class="logo">
      <img src="../assets/logo.svg" alt="Keystone Masonry, LLC">
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
        <router-link :to="{ name: 'GalleryView' }">
          Gallery
        </router-link>
      </li>

      <li>
        <router-link :to="{ name: 'ContactView' }">
          Contact
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: 'NavBar',
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
  gap: 2rem;

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
    gap: 2rem;

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
          width: 0%;
          height: 2px;
          margin-top: 0.5em;
          transition: width 150ms ease;
        }
      }
    }
  }
}
</style>
