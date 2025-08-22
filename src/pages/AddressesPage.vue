<template>
  <Layout>
    <section class="flex flex-col items-center justify-center py-8">
      <h1 class="text-2xl font-medium mb-2">Orders ID</h1>
      <nav class="text-sm">
        <ol class="flex space-x-2">
          <li>
            <a href="/" class="text-orange hover:underline">Home</a>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>
            <a href="#" class="text-orange hover:underline">My-Account</a>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>Addresses</li>
        </ol>
      </nav>
    </section>
  </Layout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Layout from '../components/layout/Layout.vue';



</script>
