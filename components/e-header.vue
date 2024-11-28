<template>
    <div class="header">
        <div class="ph5 pv4 header-cont">
            <nav>
                <div class="flex flex-row space-between align-center">
                    <p>
                        <a href="/" class="logo-title">Earnest Project</a>
                    </p>
                    <div class="flex flex-row flex-start">
                        <div class="flex flex-row nav-menu">
                            <nuxt-link to="/about" class="menu-item" exact-active-class="active">
                                <p>Manifesto</p>
                            </nuxt-link>
                            <nuxt-link to="/champions" class="menu-item" exact-active-class="active">
                                <p>Champions</p>
                            </nuxt-link>
                            <nuxt-link to="/collaborate" class="menu-item" exact-active-class="active">
                                <p>Collaborate</p>
                            </nuxt-link>
                            <nuxt-link to="/patch" class="menu-item" exact-active-class="active">
                                <p>Patches</p>
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="mobile-menu">
                        <menuIcon :isOpen="isMenuVisible" @toggle-menu="toggleMenu" />
                        <menuOverlay :isVisible="isMenuVisible" @toggle-menu="toggleMenu" />
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuVisible: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible;
        }
    }
}
</script>