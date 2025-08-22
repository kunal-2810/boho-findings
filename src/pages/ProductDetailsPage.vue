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
          <li>
            <a href="#" class="text-orange hover:underline">Category Name</a>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>Product Name</li>
        </ol>
      </nav>
    </section>

    <section class="container mx-auto px-4 flex flex-col lg:flex-row gap-8 mb-12">
      <!-- Left Panel: Product Image Viewer (sticky on desktop) -->
      <div class="w-full lg:w-1/2 lg:sticky top-24 self-start">
        <div class="bg-white rounded-lg">
          <!-- Main Image Viewer with overlays -->
          <div class="relative w-full aspect-[4/3] flex items-center justify-center">
            <img
              :src="images[currentImageIndex]"
              alt="Product Image"
              class="w-full h-full object-cover rounded"
            />
            <!-- Wishlist Icon (top right, overlay) -->
            <button class="absolute top-4 right-4 z-20 bg-white/80 rounded-full p-1 shadow" @click="toggleWishlist">
              <img
                :src="isWishlisted ? '/assets/icons/wishlist.svg' : '/assets/icons/wishlist-border.svg'"
                :alt="isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'"
                class="w-6 h-6"
              />
            </button>
            <!-- Prev Button (overlay) -->
            <button
              class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow p-2 disabled:opacity-50"
              @click="prevImage"
              :disabled="currentImageIndex === 0"
            >
              <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <!-- Next Button (overlay) -->
            <button
              class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow p-2 disabled:opacity-50"
              @click="nextImage"
              :disabled="currentImageIndex === images.length - 1"
            >
              <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <!-- Thumbnails -->
          <div class="flex gap-2 mt-4 justify-center flex-wrap">
            <div class="flex gap-2 mt-4 overflow-x-auto scrollbar-hide px-1" style="-webkit-overflow-scrolling: touch;">
              <img
                v-for="(img, idx) in images"
                :key="idx"
                :src="img"
                alt="Thumbnail"
                class="w-16 h-16 object-cover rounded border-2 cursor-pointer transition flex-shrink-0"
                :class="currentImageIndex === idx ? 'border-orange' : 'border-gray-200'"
                @click="currentImageIndex = idx"
                style="scrollbar-width: none; -ms-overflow-style: none;"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Right Panel: Product Info -->
      <div class="w-full lg:w-1/2 flex flex-col gap-4">
        <!-- Product Name -->
        <h1 class="text-2xl font-bold mb-2">Boho Chic Necklace</h1>
        <!-- Star Ratings and Review Count -->
        <div class="flex items-center gap-2 mb-2">
          <div class="flex items-center">
            <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="i <= 4 ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
            </svg>
          </div>
          <span class="text-sm text-gray-500">20 reviews</span>
        </div>
        <!-- Price Section -->
        <div class="flex items-center gap-3 mb-1 font-primary">
          <span class="text-base text-gray-400 line-through">₹1,000</span>
          <span class="text-xl font-semibold text-gray-800">₹800</span>
          <span class="bg-green text-white text-xs font-medium px-2 py-1 rounded">Save 20%</span>
        </div>
        <div class="text-sm text-orange mb-2">Price inclusive of tax</div>
        <!-- Product Details -->
        <div class="mb-2">
          <h2 class="font-semibold mb-1">Product Details:</h2>
          <ul class="text-sm text-gray-700 grid grid-cols-2 gap-x-4 gap-y-1">
            <li><span class="font-medium">Type:</span> Necklace</li>
            <li><span class="font-medium">Length:</span> 18 in</li>
            <li><span class="font-medium">Width:</span> 0.5 in</li>
            <li><span class="font-medium">Material:</span> Brass, Beads</li>
            <li><span class="font-medium">Color:</span> Gold</li>
          </ul>
        </div>
        <!-- Quantity Selector -->
        <div class="flex items-center gap-2 mb-2">
          <span class="font-semibold">Quantity:</span>
          <button
            class="w-8 h-8 flex items-center justify-center border rounded text-lg"
            @click="decrementQty"
            :disabled="quantity === 1"
          >-</button>
          <span class="w-8 font-primary text-center">{{ quantity }}</span>
          <button
            class="w-8 h-8 flex items-center justify-center border rounded text-lg"
            @click="incrementQty"
            :disabled="quantity === maxQty"
          >+</button>
        </div>
        <!-- Action Buttons -->
        <div class="flex gap-4 mb-2">
          <button class="flex-1 bg-green text-white font-semibold py-2 rounded hover:bg-green transition">Add to Cart</button>
          <button class="flex-1 bg-black text-white font-semibold py-2 rounded hover:bg-gray-800 transition">Buy Now</button>
        </div>
        <!-- Care Instructions -->
        <div>
          <h2 class="font-semibold mb-1">Care Instructions:</h2>
          <p class="text-sm text-gray-700 mb-1">To keep your jewelry looking its best, please follow these care instructions:</p>
          <ul class="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Avoid contact with water, perfume, and chemicals.</li>
            <li>Store in a dry, cool place.</li>
            <li>Clean with a soft, dry cloth after use.</li>
            <li>Keep away from direct sunlight.</li>
          </ul>
        </div>
      </div>
    </section>

    <section
      class="my-8 mx-4 sm:mx-2 md:mx-4 relative group"
      @mouseenter="showProductNav = true"
      @mouseleave="showProductNav = false"
    >
      <h2 class="text-2xl font-medium text-center mb-6 flex items-center justify-center">
      <span class="inline-block align-middle w-16 h-0.5 bg-orange mr-4"></span>
      You may also like
      <span class="inline-block align-middle w-16 h-0.5 bg-green ml-4"></span>
      </h2>
      <div class="relative">
      <!-- Prev Button -->
      <button
        v-if="showProductNav && productSliderIndex > 0"
        @click="prevProduct"
        class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition hidden sm:flex"
        style="transform: translateY(-50%);"
        aria-label="Previous"
      >
        <svg class="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <!-- Next Button -->
      <button
        v-if="showProductNav && productSliderIndex < products.length - productsPerView"
        @click="nextProduct"
        class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition hidden sm:flex"
        style="transform: translateY(-50%);"
        aria-label="Next"
      >
        <svg class="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
      <!-- Mobile Prev/Next -->
      <button
        v-if="showProductNav && productSliderIndex > 0"
        @click="prevProduct"
        class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition sm:hidden flex"
        style="transform: translateY(-50%);"
        aria-label="Previous"
      >
        <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <button
        v-if="showProductNav && productSliderIndex < products.length - productsPerView"
        @click="nextProduct"
        class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition sm:hidden flex"
        style="transform: translateY(-50%);"
        aria-label="Next"
      >
        <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
      <!-- Product Cards Slider -->
      <div class="overflow-hidden">
        <div
        class="flex transition-transform duration-300 -mx-2"
        :style="`transform: translateX(-${productSliderOffset}px);`"
        ref="productSlider"
        >
        <a
          v-for="product in visibleProducts"
          :key="product.id"
          :href="`/product/${product.id}`"
          class="flex-shrink-0 px-2"
          :style="{
          width: `calc(100% / ${productsPerView})`,
          maxWidth: '320px'
          }"
        >
          <div class="bg-white rounded-lg shadow hover:shadow-lg transition group h-full flex flex-col">
          <div class="relative">
            <!-- Wishlist Button -->
            <button
            class="absolute top-2 right-2 z-20 bg-white rounded-full p-1 shadow transition"
            @click.prevent.stop="toggleWishlistIcon(product)"
            aria-label="Add to Wishlist"
            >
            <img
              :src="wishlistIconState[product.id] ? '/assets/icons/wishlist.svg' : '/assets/icons/wishlist-border.svg'"
              :alt="wishlistIconState[product.id] ? 'Added to Wishlist' : 'Add to Wishlist'"
              class="w-5 h-5"
            />
            </button>
            <!-- Product Image -->
            <img
            :src="product.image"
            :alt="product.alt"
            class="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div class="p-3 flex flex-col flex-1">
            <span class="font-medium text-base mb-1 truncate">{{ product.name }}</span>
            <span class="text-sm text-gray-500 mb-2 truncate">{{ product.category }}</span>
            <div class="flex items-center mb-3">
            <span class="font-primary text-sm text-gray-400 line-through mr-2" v-if="product.salesPrice">
              ₹{{ product.salesPrice }}
            </span>
            <span class="font-primary text-base font-bold text-gray-800">₹{{ product.price }}</span>
            </div>
            <div class="flex w-full mt-auto">
            <button
              class="flex items-center justify-center bg-gray-800 text-white rounded-l-md py-2 px-3 w-4/5 hover:bg-gray-900 transition text-sm font-semibold"
              @click.prevent="$router.push(`/product/${product.id}`)"
            >
              View Details
            </button>
            <button
              class="flex items-center justify-center border border-gray-800 text-orange bg-white rounded-r-md py-2 px-0 w-1/5 hover:bg-beige hover:text-white transition"
              @click.prevent.stop="toggleCartIcon(product)"
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

  <!-- Reviews & Ratings Section -->
    <section class="container mx-auto px-4 mt-12 mb-12">
          <div class="relative mb-6 flex items-center justify-center">
            <h2 class="text-2xl font-medium text-center flex items-center justify-center w-full">
              <span class="inline-block align-middle w-16 h-0.5 bg-orange mr-4"></span>
              Reviews & Ratings
              <span class="inline-block align-middle w-16 h-0.5 bg-green ml-4"></span>
            </h2>
            <!-- Desktop: Button on extreme right, vertically centered -->
            <button
              class="hidden sm:inline-block absolute right-0 text-orange font-medium hover:underline"
              style="top: 50%; transform: translateY(-50%);"
              @click="showReviewForm = true"
            >
              Write a Review
            </button>
          </div>
          <!-- Mobile/Tablet: Button below heading, right aligned -->
          <div class="flex sm:hidden justify-center mb-4">
            <button class="text-orange font-medium hover:underline" @click="showReviewForm = true">Write a Review</button>
          </div>
          <!-- Review List -->
          <div>
            <div v-for="(review, idx) in visibleReviews" :key="review.id" class="mb-6">
              <div class="flex items-center justify-between mb-2">
                <!-- Star Ratings -->
                <div class="flex items-center">
                  <svg v-for="i in 5" :key="i" class="w-4 h-4 mr-0.5" :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                  </svg>
                </div>
              </div>
              <div class="flex items-center mb-4">
                <img :src="review.profileImage" alt="Profile" class="w-8 h-8 rounded-full mr-2" />
                <span class="font-semibold text-gray-800">{{ review.name }}</span>
                <span class="text-xs text-gray-400 ml-2">{{ review.date }}</span>
              </div>
              <div class="text-gray-700 text-sm mb-2">{{ review.feedback }}</div>
              <div v-if="idx < visibleReviews.length - 1" class="border-b border-gray-200"></div>
            </div>
            <div v-if="visibleReviews.length < reviews.length" class="flex justify-center mt-4">
              <button
                class="bg-orange text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition shadow"
                @click="loadMoreReviews"
                type="button"
              >
                Load More Reviews
              </button>
            </div>
          </div>
          <!-- Write a Review Popup -->
          <div v-if="showReviewForm" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div class="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6 relative">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-bold">Write a Review</h3>
                <button class="text-gray-400 hover:text-gray-700" @click="showReviewForm = false">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              <form @submit.prevent="submitReview">
                <div class="mb-3">
                  <label class="block text-sm font-semibold mb-1">Name</label>
                  <input v-model="reviewForm.name" type="text" class="w-full border rounded px-3 py-2 text-sm" required />
                </div>
                <div class="mb-3">
                  <label class="block text-sm font-semibold mb-1">Email</label>
                  <input v-model="reviewForm.email" type="email" class="w-full border rounded px-3 py-2 text-sm" required />
                </div>
                <div class="mb-3">
                  <label class="block text-sm font-semibold mb-1">Your Ratings</label>
                  <div class="flex items-center">
                    <svg v-for="i in 5" :key="i" class="w-6 h-6 cursor-pointer" :class="i <= reviewForm.rating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20" @click="reviewForm.rating = i">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                    </svg>
                  </div>
                </div>
                <div class="mb-4">
                  <label class="block text-sm font-semibold mb-1">Your Feedback</label>
                  <textarea v-model="reviewForm.feedback" class="w-full border rounded px-3 py-2 text-sm" rows="3" required></textarea>
                </div>
                <button type="submit" class="w-full bg-green text-white font-semibold py-2 rounded hover-bg-green transition">Submit</button>
              </form>
            </div>
          </div>
    </section>


  </Layout>
</template>


<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Layout from '../components/layout/Layout.vue';
import { nextTick } from 'vue';



// Wishlist state
const isWishlisted = ref(false);
function toggleWishlist() {
  isWishlisted.value = !isWishlisted.value;
}

// Image gallery state
const images = ref([
  '/assets/images/products/product-1.jpg',
  '/assets/images/products/product-2.jpg',
  '/assets/images/products/product-3.jpg',
  '/assets/images/products/product-4.jpg',
  '/assets/images/products/product-5.jpg',
  '/assets/images/products/product-6.jpg',
]);
const currentImageIndex = ref(0);
function prevImage() {
  if (currentImageIndex.value > 0) currentImageIndex.value--;
}
function nextImage() {
  if (currentImageIndex.value < images.value.length - 1) currentImageIndex.value++;
}

// Quantity selector state
const quantity = ref(1);
const maxQty = 10;
function incrementQty() {
  if (quantity.value < maxQty) quantity.value++;
}
function decrementQty() {
  if (quantity.value > 1) quantity.value--;
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

// Reviews & Ratings Section State
const showReviewForm = ref(false);
const reviews = ref([
  { id: 1, name: 'Amit Sharma', profileImage: '/assets/images/profile/profile-1.jpg', date: '2025-08-01', rating: 5, feedback: 'Beautiful product, great quality!' },
  { id: 2, name: 'Priya Singh', profileImage: '/assets/images/profile/profile-2.jpg', date: '2025-07-28', rating: 4, feedback: 'Loved the design, will buy again.' },
  { id: 3, name: 'Rahul Verma', profileImage: '/assets/images/profile/profile-3.jpg', date: '2025-07-20', rating: 5, feedback: 'Fast delivery and amazing packaging.' },
  { id: 4, name: 'Sneha Patel', profileImage: '/assets/images/profile/profile-4.jpg', date: '2025-07-15', rating: 4, feedback: 'Looks even better in person.' },
  { id: 5, name: 'Vikram Rao', profileImage: '/assets/images/profile/profile-5.jpg', date: '2025-07-10', rating: 5, feedback: 'Very comfortable to wear.' },
  { id: 6, name: 'Ritu Jain', profileImage: '/assets/images/profile/profile-6.jpg', date: '2025-07-05', rating: 5, feedback: 'Perfect for gifting.' },
  { id: 7, name: 'Manish Gupta', profileImage: '/assets/images/profile/profile-7.jpg', date: '2025-07-01', rating: 4, feedback: 'Good value for money.' },
  { id: 8, name: 'Anjali Mehra', profileImage: '/assets/images/profile/profile-8.jpg', date: '2025-06-28', rating: 5, feedback: 'Absolutely stunning!' },
  { id: 9, name: 'Deepak Kumar', profileImage: '/assets/images/profile/profile-9.jpg', date: '2025-06-20', rating: 4, feedback: 'Nice finish and shine.' },
  { id: 10, name: 'Kavita Joshi', profileImage: '/assets/images/profile/profile-10.jpg', date: '2025-06-15', rating: 5, feedback: 'Highly recommended.' },
]);
const reviewsToShow = ref(5);
const visibleReviews = computed(() => reviews.value.slice(0, reviewsToShow.value));
function loadMoreReviews() {
  reviewsToShow.value += 5;
}

// Review Form State
const reviewForm = ref({
  name: '',
  email: '',
  rating: 0,
  feedback: ''
});
function submitReview() {
  if (!reviewForm.value.name || !reviewForm.value.email || !reviewForm.value.rating || !reviewForm.value.feedback) return;
  reviews.value.unshift({
    id: Date.now(),
    name: reviewForm.value.name,
    profileImage: '/assets/images/profile1.jpg', // Placeholder, can randomize
    date: new Date().toISOString().slice(0, 10),
    rating: reviewForm.value.rating,
    feedback: reviewForm.value.feedback
  });
  showReviewForm.value = false;
  nextTick(() => {
    reviewForm.value = { name: '', email: '', rating: 0, feedback: '' };
  });
}


</script>
