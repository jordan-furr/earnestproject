<template>
    <div class="page">
        <div class="flex flex-row space-between mobile-col">
            <div class="w-20 text-div">
                <div class="w-90 text-div">
                    <div class="mb6">
                        <p class="boldspace">COLLABORATE</p>
                        <br>
                        <p>We are always curious to explore co-hosting community events, researching earnest
                            projects/people,
                            and creating material. Please reach out.</p>
                    </div>
                    <div class="mb6">
                        <p class="boldspace">INTERVIEW</p>
                        <br>
                        <p>Whether you would like to interview the project or be interviewed, send us an email.</p>
                    </div>
                </div>
            </div>
            <div class="w-60 mt5 ph3 interactive-venn">
                <interactive-venn />
            </div>
            <div>
                <mobile-venn />
            </div>
            <div class="w-20 text-right hide-mobile">
                <div class="mb6">
                    <p class="boldspace">CONTACT</p>
                    <br>
                    <span v-if="copiedLeft" class="copiedLeft">copied!</span>
                    <span @click="copyEmail" style="color: white;" class="contactemail">info@upschool.org</span>
                </div>
            </div>
        </div>
    </div>
    <div class="logo-patch-container w-15">
        <a href="/patch"><img class="logo-patch w-66 float-right" src="/img/Earnest Project Patch.png" alt=""></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            copiedLeft: false
        };
    },
    methods: {
        copyEmail() {
            const email = 'info@upschool.org';
            navigator.clipboard.writeText(email)
                .then(() => {
                    this.copiedLeft = true;
                    setTimeout(() => {
                        this.copiedLeft = false;
                    }, 1500);
                })
                .catch(error => {
                    console.error('Failed to copy:', error);
                });
        }
    }
};
</script>