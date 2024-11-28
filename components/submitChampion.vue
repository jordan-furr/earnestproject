<script setup>
import { ref } from 'vue';
import { useNuxtApp } from '#app';
import { collection, addDoc, getDocs } from 'firebase/firestore/lite';

const { $db } = useNuxtApp();
const email = ref('');
const emailPlaceholder = ref('name or project...');

async function submitEmail() {
    emailPlaceholder.value = 'your email...';
    try {
        const docRef = await addDoc(collection($db, "champions"), {
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
        <div class="email-box fade-in">
            <input type="email" id="emailInput" v-model="email" :placeholder="emailPlaceholder" autocomplete="off"
                @keydown.enter="submitEmail">
            <button @click="submitEmail()">submit</button>
        </div>
    </div>
</template>