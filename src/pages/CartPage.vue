<template>
  <Layout>
    <section class="flex flex-col items-center justify-center py-8">
      <nav class="text-sm">
        <ol class="flex space-x-2">
          <li>
            <a href="#" class="text-orange hover:underline">Home</a>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>Cart</li>
        </ol>
      </nav>
    </section>

    <section class="container mx-auto flex flex-col lg:flex-row gap-8 px-4 mb-8">
      <!-- Left Panel -->
      <div class="flex-1 w-full">
        <!-- Cart Items Header -->
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold">Cart Items</h2>
          <button class="text-orange hover:underline text-sm">Clear All</button>
        </div>
        <!-- Cart Items List -->
        <div class="space-y-6">
          <div v-for="(item, idx) in cartItems" :key="item.id">
            <div class="flex gap-4">
              <!-- Product Image -->
              <div class="w-28 min-h-[140px] h-full rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img :src="item.image" alt="Product" class="object-cover w-full h-full" />
              </div>
              <!-- Product Details -->
              <div class="flex flex-col justify-center flex-1">
                <div class="font-medium text-base">{{ item.name }}</div>
                <div class="text-xs text-gray-500 mt-1">{{ item.category }}</div>
                <div class="flex items-center font-primary gap-2 mt-2">
                  <span class="text-sm text-gray-400 line-through">₹{{ item.originalPrice.toLocaleString() }}</span>
                  <span class="text-base font-semibold text-gray-800">₹{{ item.price.toLocaleString() }}</span>
                </div>
                <div class="flex items-center border rounded w-max mt-2">
                  <button class="px-2 py-1 text-gray-500 hover:text-orange" :disabled="item.quantity <= 1" @click="decreaseQty(idx)">-</button>
                  <span class="px-3 font-primary">{{ item.quantity }}</span>
                  <button class="px-2 py-1 text-gray-500 hover:text-orange" @click="increaseQty(idx)">+</button>
                </div>
              </div>
            </div>
            <div class="border-b my-4"></div>
          </div>
        </div>

        <!-- Delivery Address -->
        <div class="mt-8 lg:mb-8">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold">Delivery Address</h3>
            <button @click="showAddressModal = true" class="text-orange hover:underline text-sm">Add Address</button>
          </div>
          <div class="border-b mb-4"></div>
          <!-- Address Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="address in [1,2]" :key="address" class="border rounded p-4 relative">
              <div class="flex items-center justify-between mb-2">
                <span class="font-semibold text-base">Home</span>
                <input type="checkbox" class="form-checkbox accent-green-600" />
              </div>
              <div class="font-primary text-sm text-gray-700 mb-1">123, Main Street, City, State, 123456</div>
              <div class="font-primary text-sm text-gray-500 mb-2">+91 9876543210</div>
              <button class="text-orange text-sm hover:underline">Edit</button>
            </div>
          </div>
        </div>

        <!-- Delivery Notes -->
        <div class="mt-8">
          <div class="text-lg font-semibold mb-2">Delivery Notes</div>
          <textarea class="w-full border rounded px-3 py-2 text-sm" rows="2" placeholder="Add any notes for delivery"></textarea>
          <div class="border-b my-4"></div>
        </div>

        <!-- Payment Method -->
        <div class="mt-8">
          <div class="text-lg font-semibold mb-2">Payment Method</div>
          <div class="flex flex-col gap-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" class="accent-orange" checked />
              <span>Razorpay</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" class="accent-orange" />
              <span>COD</span>
            </label>
          </div>
        </div>

        <!-- Add Address Modal (moved outside left panel) -->
      </div>
      <div v-if="showAddressModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div class="bg-white rounded-lg w-full max-w-lg p-0 relative flex flex-col max-h-[90vh]">
          <!-- Modal Header (fixed) -->
          <div class="p-6 border-b flex items-center justify-between sticky top-0 bg-white z-10 rounded-t-lg">
            <h4 class="text-lg font-semibold">Add Address</h4>
            <button @click="showAddressModal = false" class="text-gray-400 hover:text-orange text-xl">&times;</button>
          </div>
          <!-- Modal Body (scrollable) -->
          <div class="flex-1 overflow-y-auto px-6 py-4">
            <form class="space-y-4">
              <div>
                <label class="block text-sm mb-1">Receiver Name</label>
                <input type="text" class="w-full border rounded px-3 py-2 text-sm" />
              </div>
              <div>
                <label class="block text-sm mb-1">Address Type</label>
                <select class="w-full border rounded px-3 py-2 text-sm">
                  <option>Home</option>
                  <option>Office</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label class="block text-sm mb-1">Mobile Number</label>
                <input type="text" class="w-full border rounded px-3 py-2 text-sm" />
              </div>
              <div>
                <label class="block text-sm mb-1">Street Address</label>
                <input type="text" class="w-full border rounded px-3 py-2 text-sm" />
              </div>
              <div>
                <label class="block text-sm mb-1">Building/House No.</label>
                <input type="text" class="w-full border rounded px-3 py-2 text-sm" />
              </div>
              <div>
                <label class="block text-sm mb-1">Landmark</label>
                <input type="text" class="w-full border rounded px-3 py-2 text-sm" />
              </div>
              <div>
                <label class="block text-sm mb-1">Select Country Code</label>
                <!-- Use vue-tel-input or similar for country code with flags -->
                <input type="text" class="w-full border rounded px-3 py-2 text-sm" placeholder="+91" />
              </div>
              <div>
                <label class="block text-sm mb-1">State</label>
                <input type="text" class="w-full border rounded px-3 py-2 text-sm" />
              </div>
              <div>
                <label class="block text-sm mb-1">City</label>
                <input type="text" class="w-full border rounded px-3 py-2 text-sm" />
              </div>
              <div>
                <label class="block text-sm mb-1">Pincode</label>
                <input type="text" class="w-full border rounded px-3 py-2 text-sm" />
              </div>
            </form>
          </div>
          <!-- Modal Footer (fixed) -->
          <div class="p-6 border-t sticky bottom-0 bg-white z-10 rounded-b-lg">
            <button type="submit" class="w-full bg-orange text-white py-2 rounded">Submit</button>
          </div>
        </div>
      </div>

  <!-- Right Panel -->
  <div class="w-full lg:w-96 flex-shrink-0">
        <div class="bg-gray-50 rounded-lg p-6 shadow-sm">
          <div class="text-lg font-semibold mb-4">Price Details</div>
          <div class="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span class="font-primary">₹6,100.00</span>
          </div>
          <div class="flex justify-between text-sm mb-2">
            <span>Coupon Discount</span>
            <span class="text-orange font-primary">-₹1,800.00</span>
          </div>
          <div class="flex justify-between text-sm mb-2">
            <span>Shipping</span>
            <span class="font-primary">₹0</span>
          </div>
          <div class="flex justify-between text-sm mb-2">
            <span>GST</span>
            <span class="font-primary">₹1,200.40</span>
          </div>
          <div class="border-b my-2"></div>
          <div class="flex justify-between text-sm mb-2">
            <span>Round-off</span>
            <span class="font-primary">₹0.60</span>
          </div>
          <div class="border-b my-2"></div>
          <div class="flex justify-between text-base font-semibold mb-4">
            <span>Total</span>
            <span class="font-primary">₹4,301</span>
          </div>
          <button class="w-full flex items-center justify-between bg-white border border-gray-300 text-sm px-4 py-2 rounded mb-3 hover:bg-orange hover:text-white transition">
            Apply Coupon
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
          <button class="w-full bg-green text-white py-2 rounded font-semibold hover:bg-orange-dark transition">Pay Now</button>
        </div>
      </div>
    </section>

  </Layout>
</template>  

<script setup lang="ts">
import { ref } from 'vue';
import Layout from '../components/layout/Layout.vue';


// Modal state for address form
const showAddressModal = ref(false);

// Example cart items (replace with real data/fetch in production)
const cartItems = ref([
  {
    id: 1,
    name: 'Product Name',
    category: 'Category',
    image: '/assets/images/products/product-1.jpg',
    quantity: 1,
    price: 1800,
    originalPrice: 2000,
  },
  {
    id: 2,
    name: 'Product Name 2',
    category: 'Category',
    image: '/assets/images/products/product-2.jpg',
    quantity: 1,
    price: 2500,
    originalPrice: 3000,
  },
]);

function increaseQty(idx: number) {
  cartItems.value[idx].quantity++;
}
function decreaseQty(idx: number) {
  if (cartItems.value[idx].quantity > 1) {
    cartItems.value[idx].quantity--;
  }
}
</script>
