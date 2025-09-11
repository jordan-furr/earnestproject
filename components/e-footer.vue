<template>
    <div class="footer">
        <div class="flex flex-row mb7 col-reverse w-85 text-div space-between">
            <div class="w-25 text-div">
                <div class="w-80">
                    <p class="boldspace">EARNEST PROJECT</p>
                    <br>
                    <p class="mb1">Stay Earnest.</p>
                    <span @click="copyEmail" style="color: white;" class="contactemail">info@upschool.org</span>
                    <span v-if="copied" class="copied">copied!</span>
                    <br>
                    <br>
                    <div class="w-20">
                        <a target="_blank" href="https://www.instagram.com/theearnestproject/"><img
                                class="w-45 bluecursor ig" src="/img/ig.webp" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="w-75 text-div newsletter footer-div">
                <p class="boldspace">NEWSLETTER</p>
                <br>
                <newsletter />
            </div>
        </div>
        <div class="">
            <p class="copyright">© 2025 The Earnest Project by <a href="https://upschool.org" class="bluecursor under-hov">UP
                    School</a></p>
        </div>
        <div class="twenty-spacer"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            copied: false
        };
    },
    methods: {
        copyEmail() {
            const email = 'info@upschool.org';
            navigator.clipboard.writeText(email)
                .then(() => {
                    this.copied = true;
                    setTimeout(() => {
                        this.copied = false;
                    }, 1500);
                })
                .catch(error => {
                    console.error('Failed to copy:', error);
                });
        }
    }
};
</script>