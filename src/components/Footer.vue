<template>
    <footer class="container">
        <nav class="footer-nav" aria-label="Footer Navigation">
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
                    <router-link :to="{ name: 'ContactView' }">
                        Contact
                    </router-link>
                </li>
            </ul>
        </nav>

        <div class="footer-contact" itemscope="" itemtype="http://schema.org/LocalBusiness">
            <meta itemprop="image" content="https://keystonemasonryks.com/images/keystone-masonry-logo-square.jpg">
            <meta itemprop="url" :content="url">
            <div itemprop="name">{{ name }}</div>

            <div itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
                <span itemprop="addressLocality">{{ address.city }}</span>,&nbsp;
                <span itemprop="addressRegion">{{ address.state }}</span>&nbsp;
                <span itemprop="postalCode">{{ address.zip }}</span>
            </div>

            <div>
                <a :href="`tel:${phone}`" onclick="ga('send', 'event', 'Phone', 'Click', 'Footer');">
                    <span itemprop="telephone">{{ phone }}</span>
                </a>
            </div>

            <div>
                <a :href="`mailto:${email}`" onclick="ga('send', 'event', 'Email', 'Click', 'Footer');">
                    <span itemprop="email">{{ email }}</span>
                </a>
            </div>

            <nav class="footer-social" aria-label="Footer Social Media Navigation">
                <ul>
                    <li>
                        <a :href="facebookUrl">
                            <img src="/facebook.svg" alt="Facebook">
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="footer-colophon">
            &copy; Copyright 2019-{{ year }} {{ name }}. All rights reserved.
        </div>
    </footer>
</template>

<script>
import Config from '../config';

export default {
    name: 'Footer',
    data() {
        return {
            address: Config.address,
            email: Config.email,
            facebookUrl: Config.facebookUrl,
            name: Config.name,
            phone: Config.phone,
            url: Config.url,
            year: new Date().getFullYear(),
        };
    },
};
</script>

<style lang="scss" scoped>
footer {
    display: flex;
    flex-flow: row wrap;
    padding: 2rem;
    font-size: calc(var(--font-size-base) * 0.85);

    a {
        color: #fff;
        font-weight: var(--font-primary-weight-normal);
        display: inline-block;
        padding: 0.5em 0;
        margin: 0 0 0.25em 0;
    }

    .footer-contact {
        flex: 0 1 100%;
        margin-bottom: 1rem;

        @media(min-width: settings.$breakpoint-sm) {
            flex-basis: 50%;
            text-align: right;
            margin: 0;
        }
    }

    .footer-nav {
        flex: 0 1 100%;
        margin-bottom: 1rem;

        @media(min-width: settings.$breakpoint-sm) {
            flex-basis: 50%;
            margin: 0;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                margin: 0;
                padding: 0;
            }
        }
    }

    .footer-colophon {
        flex: 0 1 100%;
        text-align: center;
        margin-top: 2rem;
        text-transform: uppercase;
    }

    .footer-social {
        ul {
            list-style: none;
            margin: 1rem 0 0 0;
            padding: 0;
            display: flex;

            @media(min-width: settings.$breakpoint-sm) {
                justify-content: right;
            }

            li {
                margin: 0;
                padding: 0;

                img {
                    width: 2rem;
                }
            }
        }
    }
}
</style>
