<template>
  <div class="app-container">
    <e-header />
    <div class="page-container">
      <NuxtPage />
    </div>
    <e-footer />
  </div>
</template>


<script setup>

useHead({
  title: 'Earnest',
  meta: [
    { property: 'og:title', content: 'Earnest Project' },
    { property: 'og:description', content: 'Can Earnestness Change the World? Our Exploration Begins Here' },
    { property: 'og:image', content: 'https://earnestproject.com/earnestproject.png' },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' }
  ]
})
</script>