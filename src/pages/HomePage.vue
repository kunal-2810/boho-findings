<template>
  <Layout>
    <section class="relative px-4 py-4 sm:px-4 sm:py-4">
      <div
        class="rounded-lg overflow-hidden shadow w-full relative"
        @mouseenter="showNav = true"
        @mouseleave="showNav = false"
      >
        <!-- Desktop & Tablet Banner Carousel -->
        <a href="#" class="hidden sm:block" aria-label="Banner Link">
          <img
            :src="desktopBanners[currentBanner]"
            :alt="`Banner ${currentBanner + 1}`"
            class="w-full object-cover h-[400px] sm:h-[500px] md:h-[600px]"
          />
        </a>
        <!-- Mobile Banner Carousel -->
        <a href="#" class="block sm:hidden" aria-label="Banner Link">
          <img
            :src="mobileBanners[currentBanner]"
            :alt="`Mobile Banner ${currentBanner + 1}`"
            class="w-full object-cover h-[180px] xs:h-[220px] sm:h-[250px]"
          />
        </a>
        <!-- Prev/Next Buttons (Desktop) -->
        <button
          v-if="showNav"
          @click="prevBanner"
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition hidden sm:flex"
        >
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button
          v-if="showNav"
          @click="nextBanner"
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition hidden sm:flex"
        >
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        <!-- Prev/Next Buttons (Mobile) -->
        <button
          v-if="showNav"
          @click="prevBanner"
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition sm:hidden flex"
        >
          <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button
          v-if="showNav"
          @click="nextBanner"
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition sm:hidden flex"
        >
          <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </section>

    <section class="my-4 mx-4 sm:mx-2 md:mx-4">
      <h2 class="text-3xl font-medium text-center mb-6 flex items-center justify-center">
        <span class="inline-block align-middle w-16 h-0.5 bg-orange mr-4"></span>
        Categories
        <span class="inline-block align-middle w-16 h-0.5 bg-green ml-4"></span>
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-8 justify-items-center">
      <!-- Category 1 -->
      <a href="#" class="flex flex-col items-center">
        <img src="https://placehold.co/250" alt="Earrings" class="w-64 h-64 object-cover mb-2 rounded">
        <span class="text-lg font-bold">Paintings</span>
      </a>
      <!-- Category 2 -->
      <a href="#" class="flex flex-col items-center">
        <img src="https://placehold.co/250" alt="Necklaces" class="w-64 h-64 object-cover mb-2 rounded">
        <span class="text-lg font-bold">Sculptures</span>
      </a>
      <!-- Category 3 -->
      <a href="#" class="flex flex-col items-center">
        <img src="https://placehold.co/250" alt="Bracelets" class="w-64 h-64 object-cover mb-2 rounded">
        <span class="text-lg font-bold">Jewelry</span>
      </a>
      <!-- Category 4 -->
      <a href="#" class="flex flex-col items-center">
        <img src="https://placehold.co/250" alt="Rings" class="w-64 h-64 object-cover mb-2 rounded">
        <span class="text-lg font-bold">Pottery</span>
      </a>
      <!-- Category 5 -->
      <a href="#" class="flex flex-col items-center">
        <img src="https://placehold.co/250" alt="Bags" class="w-64 h-64 object-cover mb-2 rounded">
        <span class="text-lg font-bold">Textiles</span>
      </a>
      <!-- Category 6 -->
      <a href="#" class="flex flex-col items-center">
        <img src="https://placehold.co/250" alt="Scarves" class="w-64 h-64 object-cover mb-2 rounded">
        <span class="text-lg font-bold">Home Decor</span>
      </a>
      <!-- Category 7 -->
      <a href="#" class="flex flex-col items-center">
        <img src="https://placehold.co/250" alt="Watches" class="w-64 h-64 object-cover mb-2 rounded">
        <span class="text-lg font-bold">Stationery</span>
      </a>
      <!-- Category 8 -->
      <a href="#" class="flex flex-col items-center">
        <img src="https://placehold.co/250" alt="Shoes" class="w-64 h-64 object-cover mb-2 rounded">
        <span class="text-lg font-bold">Accessories</span>
      </a>
      </div>
    </section>

    <section
      class="my-8 mx-4 sm:mx-2 md:mx-4 relative group"
      @mouseenter="showProductNav = true"
      @mouseleave="showProductNav = false"
    >
      <h2 class="text-3xl font-medium text-center mb-6 flex items-center justify-center">
        <span class="inline-block align-middle w-16 h-0.5 bg-orange mr-4"></span>
        Vacation-Inspired Beaded Collection
        <span class="inline-block align-middle w-16 h-0.5 bg-green ml-4"></span>
      </h2>
      <div class="relative">
      <!-- Prev Button -->
      <button
      v-if="showProductNav"
      @click="prevProduct"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition hidden sm:flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
      </svg>
      </button>
      <!-- Next Button -->
      <button
      v-if="showProductNav"
      @click="nextProduct"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition hidden sm:flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
      </button>
      <!-- Mobile Prev/Next -->
      <button
      v-if="showProductNav"
      @click="prevProduct"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition sm:hidden flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
      </svg>
      </button>
      <button
      v-if="showProductNav"
      @click="nextProduct"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition sm:hidden flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
      </button>
      <!-- Product Cards Slider -->
      <div class="overflow-hidden">
      <div
      class="flex transition-transform duration-300"
      :style="`transform: translateX(-${productSliderOffset}px);`"
      ref="productSlider"
      >
      <a
      v-for="product in visibleProducts"
      :key="product.id"
      :href="`/product/${product.id}`"
      class="flex-shrink-0 w-[calc(100%/2-0.5rem)] xs:w-[calc(100%/2-0.5rem)] sm:w-[calc(100%/3-0.5rem)] md:w-[calc(100%/5-0.5rem)] max-w-xs mx-2 bg-white rounded-lg shadow hover:shadow-lg transition group"
      >
      <div class="relative">
        <!-- Wishlist Button -->
        <button
        class="absolute top-2 right-2 z-20 bg-white hover-bg-beige rounded-full p-1 shadow transition"
        @click.prevent.stop="toggleWishlistIcon(product)"
        aria-label="Add to Wishlist"
        >
        <img
          :src="wishlistIconState[product.id] ? '/assets/icons/wishlist.svg' : '/assets/icons/wishlist-border.svg'"
          :alt="wishlistIconState[product.id] ? 'Added to Wishlist' : 'Add to Wishlist'"
          class="w-5 h-5"
        />
        </button>
        <!-- Product Image goes here -->
        <img
        :src="product.image"
        :alt="product.alt"
        class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="p-3 flex flex-col">
        <span class="font-semibold text-lg mb-1 truncate">{{ product.name }}</span>
        <span class="text-sm text-gray-500 mb-2 truncate">{{ product.category }}</span>
        <div class="flex items-center mb-3">
          <span class="font-primary text-sm text-gray-400 line-through mr-2" v-if="product.salesPrice">
          ₹{{ product.salesPrice }}
          </span>
          <span class="font-primary text-base font-bold text-gray-800">₹{{ product.price }}</span>
        </div>
        <div class="flex w-full">
          <button
          class="flex items-center justify-center bg-gray-800 text-white rounded-l-md py-2 px-3 w-4/5 hover:bg-gray-900 transition text-sm font-semibold"
          @click.prevent="$router.push(`/product/${product.id}`)"
          >
          View Details
          </button>
          <button
          class="flex items-center justify-center border border-gray-800 text-orange bg-white rounded-r-md py-2 px-0 w-1/5 hover-bg-beige hover:text-white transition"
          @click.prevent="toggleCartIcon(product)"
          aria-label="Add to Cart"
          >
          <img
            :src="cartIconState[product.id] ? '/assets/icons/cart-filled.svg' : '/assets/icons/cart.svg'"
            :alt="cartIconState[product.id] ? 'Added to Cart' : 'Add to Cart'"
            class="w-5 h-5"
          />
          </button>
        </div>
        </div>
      </div>
      </a>
      </div>
      </div>
      </div>
    </section>

    <section class="relative px-4 py-4 sm:px-4 sm:py-4">
      <div
        class="rounded-lg overflow-hidden shadow w-full relative"
        @mouseenter="showNav = true"
        @mouseleave="showNav = false"
      >
        <!-- Desktop & Tablet Banner Carousel -->
        <a href="#" class="hidden sm:block" aria-label="Banner Link">
          <img
            :src="desktopBanners[currentBanner]"
            :alt="`Banner ${currentBanner + 1}`"
            class="w-full object-cover h-[400px] sm:h-[500px] md:h-[600px]"
          />
        </a>
        <!-- Mobile Banner Carousel -->
        <a href="#" class="block sm:hidden" aria-label="Banner Link">
          <img
            :src="mobileBanners[currentBanner]"
            :alt="`Mobile Banner ${currentBanner + 1}`"
            class="w-full object-cover h-[180px] xs:h-[220px] sm:h-[250px]"
          />
        </a>
        <!-- Prev/Next Buttons (Desktop) -->
        <button
          v-if="showNav"
          @click="prevBanner"
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition hidden sm:flex"
        >
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button
          v-if="showNav"
          @click="nextBanner"
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition hidden sm:flex"
        >
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        <!-- Prev/Next Buttons (Mobile) -->
        <button
          v-if="showNav"
          @click="prevBanner"
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition sm:hidden flex"
        >
          <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button
          v-if="showNav"
          @click="nextBanner"
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition sm:hidden flex"
        >
          <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </section>

    <section
      class="my-8 mx-4 sm:mx-2 md:mx-4 relative group"
      @mouseenter="showProductNav = true"
      @mouseleave="showProductNav = false"
    >
      <h2 class="text-3xl font-medium text-center mb-6 flex items-center justify-center">
        <span class="inline-block align-middle w-16 h-0.5 bg-orange mr-4"></span>
        New Arrivals
        <span class="inline-block align-middle w-16 h-0.5 bg-green ml-4"></span>
      </h2>
      <div class="relative">
      <!-- Prev Button -->
      <button
      v-if="showProductNav"
      @click="prevProduct"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition hidden sm:flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
      </svg>
      </button>
      <!-- Next Button -->
      <button
      v-if="showProductNav"
      @click="nextProduct"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition hidden sm:flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
      </button>
      <!-- Mobile Prev/Next -->
      <button
      v-if="showProductNav"
      @click="prevProduct"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition sm:hidden flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
      </svg>
      </button>
      <button
      v-if="showProductNav"
      @click="nextProduct"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition sm:hidden flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
      </button>
      <!-- Product Cards Slider -->
      <div class="overflow-hidden">
      <div
      class="flex transition-transform duration-300"
      :style="`transform: translateX(-${productSliderOffset}px);`"
      ref="productSlider"
      >
      <a
      v-for="product in visibleProducts"
      :key="product.id"
      :href="`/product/${product.id}`"
      class="flex-shrink-0 w-[calc(100%/2-0.5rem)] xs:w-[calc(100%/2-0.5rem)] sm:w-[calc(100%/3-0.5rem)] md:w-[calc(100%/5-0.5rem)] max-w-xs mx-2 bg-white rounded-lg shadow hover:shadow-lg transition group"
      >
      <div class="relative">
        <!-- Wishlist Button -->
        <button
        class="absolute top-2 right-2 z-20 bg-white hover-bg-beige rounded-full p-1 shadow transition"
        @click.prevent.stop="toggleWishlistIcon(product)"
        aria-label="Add to Wishlist"
        >
        <img
          :src="wishlistIconState[product.id] ? '/assets/icons/wishlist.svg' : '/assets/icons/wishlist-border.svg'"
          :alt="wishlistIconState[product.id] ? 'Added to Wishlist' : 'Add to Wishlist'"
          class="w-5 h-5"
        />
        </button>
        <!-- Product Image goes here -->
        <img
        :src="product.image"
        :alt="product.alt"
        class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="p-3 flex flex-col">
        <span class="font-semibold text-lg mb-1 truncate">{{ product.name }}</span>
        <span class="text-sm text-gray-500 mb-2 truncate">{{ product.category }}</span>
        <div class="flex items-center mb-3">
          <span class="font-primary text-sm text-gray-400 line-through mr-2" v-if="product.salesPrice">
          ₹{{ product.salesPrice }}
          </span>
          <span class="font-primary text-base font-bold text-gray-800">₹{{ product.price }}</span>
        </div>
        <div class="flex w-full">
          <button
          class="flex items-center justify-center bg-gray-800 text-white rounded-l-md py-2 px-3 w-4/5 hover:bg-gray-900 transition text-sm font-semibold"
          @click.prevent="$router.push(`/product/${product.id}`)"
          >
          View Details
          </button>
          <button
          class="flex items-center justify-center border border-gray-800 text-orange bg-white rounded-r-md py-2 px-0 w-1/5 hover-bg-beige hover:text-white transition"
          @click.prevent="toggleCartIcon(product)"
          aria-label="Add to Cart"
          >
          <img
            :src="cartIconState[product.id] ? '/assets/icons/cart-filled.svg' : '/assets/icons/cart.svg'"
            :alt="cartIconState[product.id] ? 'Added to Cart' : 'Add to Cart'"
            class="w-5 h-5"
          />
          </button>
        </div>
        </div>
      </div>
      </a>
      </div>
      </div>
      </div>
    </section>

    <section
      class="my-8 mx-4 sm:mx-2 md:mx-4 relative group"
      @mouseenter="showProductNav = true"
      @mouseleave="showProductNav = false"
    >
      <h2 class="text-3xl font-medium text-center mb-6 flex items-center justify-center">
        <span class="inline-block align-middle w-16 h-0.5 bg-orange mr-4"></span>
        Anti-Tarnish Finds
        <span class="inline-block align-middle w-16 h-0.5 bg-green ml-4"></span>
      </h2>
      <div class="relative">
      <!-- Prev Button -->
      <button
      v-if="showProductNav"
      @click="prevProduct"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition hidden sm:flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
      </svg>
      </button>
      <!-- Next Button -->
      <button
      v-if="showProductNav"
      @click="nextProduct"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition hidden sm:flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
      </button>
      <!-- Mobile Prev/Next -->
      <button
      v-if="showProductNav"
      @click="prevProduct"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition sm:hidden flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
      </svg>
      </button>
      <button
      v-if="showProductNav"
      @click="nextProduct"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition sm:hidden flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
      </button>
      <!-- Product Cards Slider -->
      <div class="overflow-hidden">
      <div
      class="flex transition-transform duration-300"
      :style="`transform: translateX(-${productSliderOffset}px);`"
      ref="productSlider"
      >
      <a
      v-for="product in visibleProducts"
      :key="product.id"
      :href="`/product/${product.id}`"
      class="flex-shrink-0 w-[calc(100%/2-0.5rem)] xs:w-[calc(100%/2-0.5rem)] sm:w-[calc(100%/3-0.5rem)] md:w-[calc(100%/5-0.5rem)] max-w-xs mx-2 bg-white rounded-lg shadow hover:shadow-lg transition group"
      >
      <div class="relative">
        <!-- Wishlist Button -->
        <button
        class="absolute top-2 right-2 z-20 bg-white hover-bg-beige rounded-full p-1 shadow transition"
        @click.prevent.stop="toggleWishlistIcon(product)"
        aria-label="Add to Wishlist"
        >
        <img
          :src="wishlistIconState[product.id] ? '/assets/icons/wishlist.svg' : '/assets/icons/wishlist-border.svg'"
          :alt="wishlistIconState[product.id] ? 'Added to Wishlist' : 'Add to Wishlist'"
          class="w-5 h-5"
        />
        </button>
        <!-- Product Image goes here -->
        <img
        :src="product.image"
        :alt="product.alt"
        class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="p-3 flex flex-col">
        <span class="font-semibold text-lg mb-1 truncate">{{ product.name }}</span>
        <span class="text-sm text-gray-500 mb-2 truncate">{{ product.category }}</span>
        <div class="flex items-center mb-3">
          <span class="font-primary text-sm text-gray-400 line-through mr-2" v-if="product.salesPrice">
          ₹{{ product.salesPrice }}
          </span>
          <span class="font-primary text-base font-bold text-gray-800">₹{{ product.price }}</span>
        </div>
        <div class="flex w-full">
          <button
          class="flex items-center justify-center bg-gray-800 text-white rounded-l-md py-2 px-3 w-4/5 hover:bg-gray-900 transition text-sm font-semibold"
          @click.prevent="$router.push(`/product/${product.id}`)"
          >
          View Details
          </button>
          <button
          class="flex items-center justify-center border border-gray-800 text-orange bg-white rounded-r-md py-2 px-0 w-1/5 hover-bg-beige hover:text-white transition"
          @click.prevent="toggleCartIcon(product)"
          aria-label="Add to Cart"
          >
          <img
            :src="cartIconState[product.id] ? '/assets/icons/cart-filled.svg' : '/assets/icons/cart.svg'"
            :alt="cartIconState[product.id] ? 'Added to Cart' : 'Add to Cart'"
            class="w-5 h-5"
          />
          </button>
        </div>
        </div>
      </div>
      </a>
      </div>
      </div>
      </div>
    </section>

    <section
      class="my-8 mx-4 sm:mx-2 md:mx-4 relative group"
      @mouseenter="showProductNav = true"
      @mouseleave="showProductNav = false"
    >
      <h2 class="text-3xl font-medium text-center mb-6 flex items-center justify-center">
        <span class="inline-block align-middle w-16 h-0.5 bg-orange mr-4"></span>
        Fabric Jewellery & Wallets
        <span class="inline-block align-middle w-16 h-0.5 bg-green ml-4"></span>
      </h2>
      <div class="relative">
      <!-- Prev Button -->
      <button
      v-if="showProductNav"
      @click="prevProduct"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition hidden sm:flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
      </svg>
      </button>
      <!-- Next Button -->
      <button
      v-if="showProductNav"
      @click="nextProduct"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition hidden sm:flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
      </button>
      <!-- Mobile Prev/Next -->
      <button
      v-if="showProductNav"
      @click="prevProduct"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition sm:hidden flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
      </svg>
      </button>
      <button
      v-if="showProductNav"
      @click="nextProduct"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition sm:hidden flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
      </button>
      <!-- Product Cards Slider -->
      <div class="overflow-hidden">
      <div
      class="flex transition-transform duration-300"
      :style="`transform: translateX(-${productSliderOffset}px);`"
      ref="productSlider"
      >
      <a
      v-for="product in visibleProducts"
      :key="product.id"
      :href="`/product/${product.id}`"
      class="flex-shrink-0 w-[calc(100%/2-0.5rem)] xs:w-[calc(100%/2-0.5rem)] sm:w-[calc(100%/3-0.5rem)] md:w-[calc(100%/5-0.5rem)] max-w-xs mx-2 bg-white rounded-lg shadow hover:shadow-lg transition group"
      >
      <div class="relative">
        <!-- Wishlist Button -->
        <button
        class="absolute top-2 right-2 z-20 bg-white hover-bg-beige rounded-full p-1 shadow transition"
        @click.prevent.stop="toggleWishlistIcon(product)"
        aria-label="Add to Wishlist"
        >
        <img
          :src="wishlistIconState[product.id] ? '/assets/icons/wishlist.svg' : '/assets/icons/wishlist-border.svg'"
          :alt="wishlistIconState[product.id] ? 'Added to Wishlist' : 'Add to Wishlist'"
          class="w-5 h-5"
        />
        </button>
        <!-- Product Image goes here -->
        <img
        :src="product.image"
        :alt="product.alt"
        class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="p-3 flex flex-col">
        <span class="font-semibold text-lg mb-1 truncate">{{ product.name }}</span>
        <span class="text-sm text-gray-500 mb-2 truncate">{{ product.category }}</span>
        <div class="flex items-center mb-3">
          <span class="font-primary text-sm text-gray-400 line-through mr-2" v-if="product.salesPrice">
          ₹{{ product.salesPrice }}
          </span>
          <span class="font-primary text-base font-bold text-gray-800">₹{{ product.price }}</span>
        </div>
        <div class="flex w-full">
          <button
          class="flex items-center justify-center bg-gray-800 text-white rounded-l-md py-2 px-3 w-4/5 hover:bg-gray-900 transition text-sm font-semibold"
          @click.prevent="$router.push(`/product/${product.id}`)"
          >
          View Details
          </button>
          <button
          class="flex items-center justify-center border border-gray-800 text-orange bg-white rounded-r-md py-2 px-0 w-1/5 hover-bg-beige hover:text-white transition"
          @click.prevent="toggleCartIcon(product)"
          aria-label="Add to Cart"
          >
          <img
            :src="cartIconState[product.id] ? '/assets/icons/cart-filled.svg' : '/assets/icons/cart.svg'"
            :alt="cartIconState[product.id] ? 'Added to Cart' : 'Add to Cart'"
            class="w-5 h-5"
          />
          </button>
        </div>
        </div>
      </div>
      </a>
      </div>
      </div>
      </div>
    </section>

    <section
      class="my-8 mx-4 sm:mx-2 md:mx-4 relative group"
      @mouseenter="showProductNav = true"
      @mouseleave="showProductNav = false"
    >
      <h2 class="text-3xl font-medium text-center mb-6 flex items-center justify-center">
        <span class="inline-block align-middle w-16 h-0.5 bg-orange mr-4"></span>
        Best Sellers
        <span class="inline-block align-middle w-16 h-0.5 bg-green ml-4"></span>
      </h2>
      <div class="relative">
      <!-- Prev Button -->
      <button
      v-if="showProductNav"
      @click="prevProduct"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition hidden sm:flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
      </svg>
      </button>
      <!-- Next Button -->
      <button
      v-if="showProductNav"
      @click="nextProduct"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition hidden sm:flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
      </button>
      <!-- Mobile Prev/Next -->
      <button
      v-if="showProductNav"
      @click="prevProduct"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition sm:hidden flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
      </svg>
      </button>
      <button
      v-if="showProductNav"
      @click="nextProduct"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition sm:hidden flex"
      style="transform: translateY(-50%);"
      >
      <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
      </button>
      <!-- Product Cards Slider -->
      <div class="overflow-hidden">
      <div
      class="flex transition-transform duration-300"
      :style="`transform: translateX(-${productSliderOffset}px);`"
      ref="productSlider"
      >
      <a
      v-for="product in visibleProducts"
      :key="product.id"
      :href="`/product/${product.id}`"
      class="flex-shrink-0 w-[calc(100%/2-0.5rem)] xs:w-[calc(100%/2-0.5rem)] sm:w-[calc(100%/3-0.5rem)] md:w-[calc(100%/5-0.5rem)] max-w-xs mx-2 bg-white rounded-lg shadow hover:shadow-lg transition group"
      >
      <div class="relative">
        <!-- Wishlist Button -->
        <button
        class="absolute top-2 right-2 z-20 bg-white hover-bg-beige rounded-full p-1 shadow transition"
        @click.prevent.stop="toggleWishlistIcon(product)"
        aria-label="Add to Wishlist"
        >
        <img
          :src="wishlistIconState[product.id] ? '/assets/icons/wishlist.svg' : '/assets/icons/wishlist-border.svg'"
          :alt="wishlistIconState[product.id] ? 'Added to Wishlist' : 'Add to Wishlist'"
          class="w-5 h-5"
        />
        </button>
        <!-- Product Image goes here -->
        <img
        :src="product.image"
        :alt="product.alt"
        class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="p-3 flex flex-col">
        <span class="font-semibold text-lg mb-1 truncate">{{ product.name }}</span>
        <span class="text-sm text-gray-500 mb-2 truncate">{{ product.category }}</span>
        <div class="flex items-center mb-3">
          <span class="font-primary text-sm text-gray-400 line-through mr-2" v-if="product.salesPrice">
          ₹{{ product.salesPrice }}
          </span>
          <span class="font-primary text-base font-bold text-gray-800">₹{{ product.price }}</span>
        </div>
        <div class="flex w-full">
          <button
          class="flex items-center justify-center bg-gray-800 text-white rounded-l-md py-2 px-3 w-4/5 hover:bg-gray-900 transition text-sm font-semibold"
          @click.prevent="$router.push(`/product/${product.id}`)"
          >
          View Details
          </button>
          <button
          class="flex items-center justify-center border border-gray-800 text-orange bg-white rounded-r-md py-2 px-0 w-1/5 hover-bg-beige hover:text-white transition"
          @click.prevent="toggleCartIcon(product)"
          aria-label="Add to Cart"
          >
          <img
            :src="cartIconState[product.id] ? '/assets/icons/cart-filled.svg' : '/assets/icons/cart.svg'"
            :alt="cartIconState[product.id] ? 'Added to Cart' : 'Add to Cart'"
            class="w-5 h-5"
          />
          </button>
        </div>
        </div>
      </div>
      </a>
      </div>
      </div>
      </div>
    </section>
    
  </Layout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Layout from '../components/layout/Layout.vue';

const desktopBanners = [
  '/assets/images/banners/banner-1.jpg',
  '/assets/images/banners/banner-2.jpg'
];
const mobileBanners = [
  '/assets/images/banners/mobile-banner-1.jpg',
  '/assets/images/banners/mobile-banner-2.jpg'
];

const currentBanner = ref(0);
const showNav = ref(false);

function prevBanner() {
  currentBanner.value = (currentBanner.value - 1 + desktopBanners.length) % desktopBanners.length;
}
function nextBanner() {
  currentBanner.value = (currentBanner.value + 1) % desktopBanners.length;
}

// Product slider logic
const products = ref([
  {
    id: 1,
    name: 'Hand-painted Vase',
    category: 'Pottery',
    image: '/assets/images/products/product-1.jpg',
    alt: 'Hand-painted Vase',
    salesPrice: 1200,
    price: 950,
  },
  {
    id: 2,
    name: 'Abstract Canvas',
    category: 'Paintings',
    image: '/assets/images/products/product-2.jpg',
    alt: 'Abstract Canvas',
    salesPrice: 2000,
    price: 1700,
  },
  {
    id: 3,
    name: 'Silver Necklace',
    category: 'Jewelry',
    image: '/assets/images/products/product-3.jpg',
    alt: 'Silver Necklace',
    salesPrice: 1500,
    price: 1200,
  },
  {
    id: 4,
    name: 'Clay Sculpture',
    category: 'Sculptures',
    image: '/assets/images/products/product-4.jpg',
    alt: 'Clay Sculpture',
    salesPrice: 1800,
    price: 1450,
  },
  {
    id: 5,
    name: 'Woven Textile',
    category: 'Textiles',
    image: '/assets/images/products/product-5.jpg',
    alt: 'Woven Textile',
    salesPrice: 900,
    price: 700,
  },
  {
    id: 6,
    name: 'Decorative Plate',
    category: 'Home Decor',
    image: '/assets/images/products/product-6.jpg',
    alt: 'Decorative Plate',
    salesPrice: 1100,
    price: 850,
  },
  {
    id: 7,
    name: 'Artistic Notebook',
    category: 'Stationery',
    image: '/assets/images/products/product-7.jpg',
    alt: 'Artistic Notebook',
    salesPrice: 500,
    price: 350,
  },
  {
    id: 8,
    name: 'Leather Wallet',
    category: 'Accessories',
    image: '/assets/images/products/product-8.jpg',
    alt: 'Leather Wallet',
    salesPrice: 800,
    price: 650,
  },
]);

const showProductNav = ref(false);
const productSliderIndex = ref(0);
const productSliderRef = ref<HTMLElement | null>(null);

const productsPerView = ref(5);

function updateProductsPerView() {
  if (window.innerWidth < 640) {
    productsPerView.value = 2;
  } else if (window.innerWidth < 1024) {
    productsPerView.value = 3;
  } else {
    productsPerView.value = 5;
  }
}

onMounted(() => {
  updateProductsPerView();
  window.addEventListener('resize', updateProductsPerView);
});

const visibleProducts = computed(() => {
  return products.value.slice(productSliderIndex.value, productSliderIndex.value + productsPerView.value);
});

const productSliderOffset = computed(() => {
  // Not used for actual pixel offset since we use flex, but kept for compatibility
  return 0;
});

function prevProduct() {
  if (productSliderIndex.value > 0) {
    productSliderIndex.value--;
  }
}

function nextProduct() {
  if (productSliderIndex.value < products.value.length - productsPerView.value) {
    productSliderIndex.value++;
  }
}

function addToCart(product: any) {
  // Implement your add to cart logic here
  alert(`Added ${product.name} to cart!`);
}

// State to track cart icon for each product
const cartIconState = ref<{ [key: number]: boolean }>({});

// State to track wishlist icon for each product
const wishlistIconState = ref<{ [key: number]: boolean }>({});

// Toggle cart icon state for a product
function toggleCartIcon(product: any) {
  cartIconState.value[product.id] = !cartIconState.value[product.id];
}

// Toggle wishlist icon state for a product
function toggleWishlistIcon(product: any) {
  wishlistIconState.value[product.id] = !wishlistIconState.value[product.id];
}

</script>
