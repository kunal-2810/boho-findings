<template>
  <div class="w-full bg-green flex items-center h-10 select-none relative overflow-hidden px-2">
    <!-- Previous Icon -->
    <button @click="prev" class="flex items-center justify-center h-6 w-6 hover-bg-green rounded-full transition mr-2">
      <img src="/assets/icons/left-arrow.svg" alt="Previous" class="w-3 h-3" />
    </button>
    <!-- Vertical Marquee Text -->
    <div class="flex-1 flex items-center justify-center h-full overflow-hidden">
    <transition name="fade-slide" mode="out-in">
      <a
        v-if="marqueeItems[current]"
        :key="marqueeItems[current].text"
        :href="marqueeItems[current].link"
        class="text-white hover:underline text-sm flex items-center justify-center h-10 w-full"
      >
        {{ marqueeItems[current].text }}
      </a>
    </transition>
    </div>
    <!-- Next Icon -->
    <button @click="next" class="flex items-center justify-center h-6 w-6 hover-bg-green rounded-full transition ml-2">
      <img src="/assets/icons/left-arrow.svg" alt="Next" class="w-3 h-3 rotate-180" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
const marqueeItems = [
  { text: 'Festive Sale is LIVE!! Upto 80% Off on All Products', link: '#' },
  { text: 'Free Shipping on Orders Above $50', link: '#' },
  { text: 'New Arrivals Just Landed!', link: '#' },
];
const current = ref(0);
let interval: number | undefined;

function next() {
  current.value = (current.value + 1) % marqueeItems.length;
}
function prev() {
  current.value = (current.value - 1 + marqueeItems.length) % marqueeItems.length;
}

onMounted(() => {
  interval = window.setInterval(() => {
    next();
  }, 10000);
});
onBeforeUnmount(() => {
  if (interval) clearInterval(interval);
});
</script>

