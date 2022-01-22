<template>
    <footer>
        <nav>
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

        <div class="footer-contact" itemscope="" itemtype="http://schema.org/LocalBusiness">
            <meta itemprop="image" content="https://keystonemasonryks.com/images/keystone-masonry-logo-square.jpg">
            <meta itemprop="url" content="https://keystonemasonryks.com">

            <div itemprop="name">
                Keystone Masonry, LLC
            </div>

            <div itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
                <span itemprop="addressLocality">Topeka</span>,
                <span itemprop="addressRegion">KS</span>
                <span itemprop="postalCode">66617</span>
            </div>

            <div>
                <a href="tel:785-640-5624" onclick="ga('send', 'event', 'Phone', 'Click', 'Footer');">
                    <span itemprop="telephone">
                        785-640-5624
                    </span>
                </a>
            </div>

            <div>
            <a href="mailto:contact@keystonemasonryks.com" onclick="ga('send', 'event', 'Email', 'Click', 'Footer');">
                <span itemprop="email">contact@keystonemasonryks.com</span>
            </a>
            </div>

            <nav class="footer__social">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/keystonemasonryks" class="icon icon--facebook">
                            <span>Facebook</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style lang="scss" scoped>

</style>
