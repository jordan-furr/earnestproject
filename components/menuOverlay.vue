<template>
    <div class="menu-overlay" v-if="isVisible" @click="toggleMenu">
        <nav @click.stop>
            <ul>
                <li>
                    <nuxt-link to="/" class="menu-item" @click="closeMenu" exact-active-class="active">
                        <p>Home</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about" class="menu-item" @click="closeMenu" exact-active-class="active">
                        <p>About</p>
                    </nuxt-link>
                </li>
                <li>

                    <nuxt-link to="/champions" class="menu-item" @click="closeMenu" exact-active-class="active">
                        <p>Champions</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/collaborate" class="menu-item" @click="closeMenu" exact-active-class="active">
                        <p>Collaborate</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/patch" class="menu-item" @click="closeMenu" exact-active-class="active">
                        <p>Patches</p>
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        toggleMenu() {
            this.$emit('toggle-menu');
        },
        closeMenu() {
            this.$emit('toggle-menu');
        }
    }
}
</script>