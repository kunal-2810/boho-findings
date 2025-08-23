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
            <a href="#" class="text-orange hover:underline">Orders</a>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>Order ID</li>
        </ol>
      </nav>  
    </section>

    <!-- Order Details Panel -->
    <section class="w-full max-w-7xl mx-auto mb-8">
      <div class="flex flex-col md:flex-row md:space-x-8 bg-white rounded-lg shadow p-6">
        <!-- Left Panel -->
        <div class="flex-1 mb-6 md:mb-0">
          <div class="mb-4">
            <span class="block text-gray-500 text-sm">Order ID</span>
            <span class="font-semibold text-lg">#12345</span>
          </div>
          <div class="mb-4">
            <span class="block text-gray-500 text-sm">Order Date & Time</span>
            <span class="text-base">20-08-2025, 02:30 PM</span>
          </div>
          <div class="mb-4">
            <span class="block text-gray-500 text-sm">Order Status</span>
            <span class="text-base text-green-600 font-medium">Delivered</span>
          </div>
          <div>
            <span class="block text-gray-500 text-sm">Payment Method</span>
            <span class="text-base">Cash on Delivery</span>
          </div>
        </div>
        <!-- Right Panel -->
        <div class="flex-1 flex flex-col items-start md:items-end justify-between">
          <div class="mb-4 md:mb-0">
            <span class="block text-gray-500 text-sm">Order Price</span>
            <span class="font-primary font-semibold text-xl text-gray-600">₹1899</span>
          </div>
          <button class="mt-2 px-4 py-2 bg-green text-white rounded hover:bg-orange-600 transition">
            Download Invoice
          </button>
        </div>
      </div>
    </section>

    <!-- Customer Information Section -->
    <section class="w-full max-w-7xl mx-auto mb-8">
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="font-semibold text-lg mb-4">Customer Information</h2>
        <div class="mb-2">
          <span class="block text-gray-500 text-sm">Name:</span>
          <span class="text-base">John Doe</span>
        </div>
        <div>
          <span class="block text-gray-500 text-sm">Address:</span>
          <span class="text-base">123 Main Street, City, Country</span>
        </div>
        <div class="mt-2">
          <span class="block text-gray-500 text-sm">Mobile Number:</span>
          <span class="text-base">+1 234 567 8901</span>
        </div>
      </div>
    </section>

    <!-- Ordered Products Section -->
    <section class="w-full max-w-7xl mx-auto mb-8">
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="font-semibold text-lg mb-4">Ordered Products</h2>
        <div class="divide-y divide-gray-200">
          <!-- Product Item -->
          <div class="flex py-4">
            <img src="/assets/images/products/product-1.jpg" alt="Product" class="w-28 h-28 object-cover rounded mr-6" />
            <div class="flex-1">
              <div class="font-medium text-base">Boho Necklace</div>
              <div class="text-gray-500 text-sm mb-1">Category: Jewelry</div>
              <div class="font-primary text-gray-600 font-semibold mb-1">₹1200</div>
              <div class="text-gray-500 text-sm">Qty: 2</div>
            </div>
          </div>
          <!-- Product Item -->
          <div class="flex py-4">
            <img src="/assets/images/products/product-2.jpg" alt="Product" class="w-28 h-28 object-cover rounded mr-6" />
            <div class="flex-1">
              <div class="font-medium text-base">Boho Bracelet</div>
              <div class="text-gray-500 text-sm mb-1">Category: Jewelry</div>
              <div class="font-primary text-gray-600 font-semibold mb-1">₹699</div>
              <div class="text-gray-500 text-sm">Qty: 1</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Cancel Order Button just above the footer -->
      <div class="w-full max-w-7xl mx-auto mb-12 mt-12 flex justify-center">
        <button class="px-6 py-2 bg-orange text-white rounded font-semibold transition">Cancel Order</button>
      </div>
    </section>

    


  </Layout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Layout from '../components/layout/Layout.vue';



</script>
