
<template>
  <div class="min-h-screen flex flex-col">
    <TopBar />
    <NavBar />
    <main class="flex-1 bg-white">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import TopBar from './TopBar.vue';
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
</script>
