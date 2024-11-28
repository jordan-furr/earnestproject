<script setup>
import { ref } from 'vue';
import { useNuxtApp } from '#app';
import { collection, addDoc, getDocs } from 'firebase/firestore/lite';

const { $db } = useNuxtApp();
const email = ref('');
const emailPlaceholder = ref('your email...');

async function submitEmail() {
    emailPlaceholder.value = 'your email...';
    try {
        const docRef = await addDoc(collection($db, "emails"), {
            email: email.value,
            timestamp: new Date()
        });
    } catch (e) {
        console.error("Error adding email: ", e);
    }
    console.log('Email submitted:', email);
    email.value = '';
}
</script>

<template>
    <div>
        <p>Join our community celebrating earnest living. You'll receive project updates, research findings, and
            exclusive stories.</p>
        <br>
        <div class="email-box fade-in">
            <input type="email" id="emailInput" v-model="email" :placeholder="emailPlaceholder" autocomplete="off"
                @keydown.enter="submitEmail">
            <button @click="submitEmail()">join</button>
        </div>
    </div>
</template>