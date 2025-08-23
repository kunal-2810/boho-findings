<template>
  <Layout>
    <section class="flex flex-col items-center justify-center py-8">
      <h1 class="text-2xl font-medium mb-2">Orders</h1>
      <nav class="text-sm">
        <ol class="flex space-x-2">
          <li>
            <a href="/" class="text-orange hover:underline">Home</a>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>Orders</li>
        </ol>
      </nav>
    </section>

    <section class="w-full max-w-7xl mx-auto">
      <!-- Top Bar -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div class="text-lg font-semibold">Showing 5 Orders</div>
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center sm:justify-end">
          <div class="relative">
            <select v-model="selectedMonth" class="appearance-none px-4 pr-10 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50 text-sm font-medium focus:outline-none w-full">
              <option value="">Select Month</option>
              <option v-for="(month, idx) in months" :key="month" :value="idx+1">{{ month }}</option>
            </select>
            <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </span>
          </div>
          <div class="relative">
            <select v-model="selectedYear" class="appearance-none px-4 pr-10 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50 text-sm font-medium focus:outline-none w-full">
              <option value="">Select Year</option>
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>
            <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </span>
          </div>
        </div>
      </div>

      <!-- Orders List -->
      <div>
  <div v-for="(order, idx) in paginatedOrders" :key="order.id" :class="['py-6', idx === paginatedOrders.length - 1 ? 'mb-12' : '']">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            <!-- Left: Order Info -->
            <div>
              <div class="font-medium text-base">Order ID: {{ order.id }}</div>
              <div class="text-gray-500 text-sm mt-1">{{ order.date }}, {{ order.time }}</div>
              <div class="mt-2 text-sm font-semibold" :class="statusClass(order.status)">
                {{ order.status }}
              </div>
              <!-- Price & Button for mobile/tablet -->
              <div class="flex md:hidden flex-col gap-2 mt-4">
                <div class="font-primary text-lg font-medium text-gray-600">₹{{ order.price }}</div>
                <button class="px-4 py-2 bg-orange text-white rounded hover:bg-orange-600 text-sm font-medium">Order Details</button>
              </div>
            </div>
            <!-- Right: Price & Button for desktop -->
            <div class="hidden md:flex flex-col items-end gap-2">
              <div class="font-primary text-lg font-medium text-gray-600">₹{{ order.price }}</div>
              <button class="px-4 py-2 bg-orange text-white rounded hover:bg-orange-600 text-sm font-medium">Order Details</button>
            </div>
          </div>
          <!-- Separator -->
          <div v-if="idx < paginatedOrders.length - 1" class="border-b border-gray-200 mt-6"></div>
        </div>
        <div v-if="hasMoreOrders" class="flex justify-center mt-6 mb-12">
          <button @click="loadMore" class="px-6 py-2 bg-orange text-white rounded hover:bg-orange-600 font-semibold">Load More</button>
        </div>
      </div>
    </section>


  </Layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Layout from '../components/layout/Layout.vue';

// Month and year options
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 5 }, (_, i) => currentYear - i);
const selectedMonth = ref('');
const selectedYear = ref('');

// Sample orders data
const orders = ref([
  {
    id: '#12345',
    date: '20-08-2025',
    time: '02:30 PM',
    status: 'Delivered',
    price: 1899,
  },
  {
    id: '#12346',
    date: '18-08-2025',
    time: '10:15 AM',
    status: 'Shipped',
    price: 2499,
  },
  {
    id: '#12347',
    date: '15-08-2025',
    time: '09:00 AM',
    status: 'Processing',
    price: 999,
  },
  {
    id: '#12348',
    date: '10-08-2025',
    time: '04:45 PM',
    status: 'Cancelled',
    price: 1200,
  },
  {
    id: '#12349',
    date: '05-08-2025',
    time: '12:20 PM',
    status: 'Delivered',
    price: 2999,
  },
]);


// Pagination state
const pageSize = 3;
const currentPage = ref(1);
const paginatedOrders = computed(() => orders.value.slice(0, currentPage.value * pageSize));
const hasMoreOrders = computed(() => paginatedOrders.value.length < orders.value.length);

function loadMore() {
  if (hasMoreOrders.value) currentPage.value++;
}

function statusClass(status: string) {
  switch (status) {
    case 'Delivered':
      return 'text-green-600';
    case 'Shipped':
      return 'text-blue-600';
    case 'Processing':
      return 'text-yellow-600';
    case 'Cancelled':
      return 'text-red-600';
    default:
      return '';
  }
}
</script>
