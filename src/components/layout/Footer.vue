<template>
  <footer class="bg-gray-700 text-white">
    <div class="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Panel 1 -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover-text-beige">Earrings</a></li>
          <li><a href="#" class="hover-text-beige">Necklaces</a></li>
          <li><a href="#" class="hover-text-beige">Hair Accessories</a></li>
          <li><a href="#" class="hover-text-beige">Fabric Jewellery</a></li>
          <li><a href="#" class="hover-text-beige">Seasonal Picks</a></li>
        </ul>
      </div>
      <!-- Panel 2 -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Company</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover-text-beige">Home</a></li>
          <li><a href="#" class="hover-text-beige">About</a></li>
          <li><a href="#" class="hover-text-beige">Blogs</a></li>
          <li><a href="#" class="hover-text-beige">Contact</a></li>
        </ul>
      </div>
      <!-- Panel 3 -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Policies</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover-text-beige">Terms & Conditions</a></li>
          <li><a href="#" class="hover-text-beige">Privacy</a></li>
          <li><a href="#" class="hover-text-beige">Cancellation And Refund</a></li>
          <li><a href="#" class="hover-text-beige">Shipping</a></li>
        </ul>
      </div>
      <!-- Panel 4 -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
        <div class="flex items-center mb-2 hover-text-beige">
          <img src="/assets/icons/phone.svg" alt="Call" class="w-5 h-5 mr-2" />
          <span>+1 234 567 890</span>
        </div>
        <div class="flex items-center mb-2 hover-text-beige">
          <img src="/assets/icons/mail.svg" alt="Mail" class="w-5 h-5 mr-2" />
          <span>info@example.com</span>
        </div>
        <div class="flex items-center space-x-3 mb-6">
          <img src="/assets/icons/facebook-white.svg" alt="Facebook" class="w-6 h-6" />
          <img src="/assets/icons/instagram-white.svg" alt="Instagram" class="w-6 h-6" />
        </div>
        <h3 class="text-lg font-semibold mb-4">Signup for Newsletter</h3>
        <form class="flex">
          <input
            type="email"
            placeholder="Enter your email"
            class="rounded-l px-3 py-2 bg-gray-200 text-sm text-gray-600 focus:outline-none"
          />
          <button
            type="submit"
            class="bg-orange text-white px-4 py-2 rounded-r hover-bg-green"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <div class="bg-gray-800 py-4">
      <p class="text-center text-sm text-gray-300">
        &copy; {{ new Date().getFullYear() }} The Boho Findings. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
// No script logic needed for this static footer
</script>