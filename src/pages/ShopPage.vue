<template>
  <Layout>
    <section class="flex flex-col items-center justify-center py-8">
      <h1 class="text-2xl font-medium mb-2">All Products</h1>
      <nav class="text-sm">
        <ol class="flex space-x-2">
          <li>
            <a href="/" class="text-orange hover:underline">Home</a>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>All Products</li>
        </ol>
      </nav>
    </section>

    <!-- Responsive Filter & Sort Controls -->
    <section class="w-full px-4 md:px-8 mb-8">
      <!-- Mobile/Tablet: Centered Filter & Sort Buttons (show up to lg) -->
      <div class="flex justify-center gap-4 lg:hidden">
        <button @click="showFilterDrawer = true" class="bg-gray-100 px-4 py-2 rounded flex items-center gap-2 font-medium border border-gray-300">
          <img src="/assets/icons/filter.svg" alt="Filter" class="w-5 h-5" />
          Filter
        </button>
        <div class="relative">
          <button @click="toggleSortDropdown" class="bg-gray-100 px-4 py-2 rounded flex items-center gap-2 font-medium border border-gray-300">
            <img src="/assets/icons/sort.svg" alt="Sort" class="w-5 h-5" />
            Sort By
            <svg :class="{'rotate-180': sortDropdownOpen}" class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div v-if="sortDropdownOpen" class="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow z-30">
            <ul>
              <li v-for="option in sortOptions" :key="option.value">
                <button @click="selectSort(option.value)" class="w-full text-left px-4 py-2 hover:bg-gray-100" :class="{'font-semibold': selectedSort === option.value}">
                  {{ option.label }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Mobile/Tablet Product Grid (below filter/sort) -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 lg:hidden">
        <template v-if="visibleProducts.length > 0">
          <!-- Product Card (used in both mobile/tablet and desktop grids) -->
          <a
            v-for="product in visibleProducts"
            :key="product.id"
            :href="`/product/${product.id}`"
            class="bg-white rounded-lg shadow hover:shadow-lg transition group h-full flex flex-col"
          >
            <div class="relative">
              <!-- Wishlist Button -->
              <!-- <button
                class="absolute top-2 right-2 z-20 bg-white rounded-full p-1 shadow transition"
                @click.prevent.stop="toggleWishlist(product)"
                aria-label="Add to Wishlist"
              >
                <img
                  :src="product.wishlisted ? '/assets/icons/wishlist.svg' : '/assets/icons/wishlist-border.svg'"
                  :alt="product.wishlisted ? 'Added to Wishlist' : 'Add to Wishlist'"
                  class="w-5 h-5"
                />
              </button> -->
              <!-- Product Image -->
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
            <div class="p-3 flex flex-col flex-1">
              <!-- Sale Tag -->
              <span v-if="product.salesPrice && product.salesPrice > product.price" class="inline-block mb-1 px-2 py-0.5 rounded bg-green text-white text-xs w-fit">Sale</span>
              <!-- Product Name -->
              <span class="font-medium text-base mb-1 truncate">{{ product.name }}</span>
              <!-- Category -->
              <span class="text-sm text-gray-500 mb-2 truncate">{{ product.category }}</span>
              <!-- Star Rating -->
              <div class="flex items-center gap-1 mb-2 min-w-0">
                <svg class="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"/>
                </svg>
                <span class="text-sm text-gray-700 font-semibold">{{ product.rating || '4.2' }}</span>
                <span class="text-sm text-gray-500">Star Ratings</span>
              </div>
              <!-- Price -->
              <div class="flex items-center mb-3">
                <span class="font-primary text-sm text-gray-400 line-through mr-2" v-if="product.salesPrice && product.salesPrice > product.price">
                  {{ currency(product.salesPrice) }}
                </span>
                <span class="font-primary text-base font-bold text-gray-800">{{ currency(product.price) }}</span>
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
                  @click.prevent.stop="addToCart(product)"
                  aria-label="Add to Cart"
                >
                  <img
                    :src="product.addedToCart ? '/assets/icons/cart-filled.svg' : '/assets/icons/cart.svg'"
                    :alt="product.addedToCart ? 'Added to Cart' : 'Add to Cart'"
                    class="w-5 h-5"
                  />
                </button>
              </div>
            </div>
          </a>
        </template>
        <div v-else class="col-span-full text-center text-gray-500 py-8">
          No products found. (Debug: {{ visibleProducts }})
        </div>
      </div>
      <!-- No product count or sort by below grid for mobile/tablet -->

  <!-- Desktop: Filter Panel & Sort Controls (only visible on lg and up) -->
  <div class="hidden lg:grid grid-cols-12 gap-8">
        <!-- Filter Panel (Desktop only) -->
        <aside class="col-span-3 bg-white border border-gray-200 rounded p-4 h-fit sticky top-24 hidden lg:block">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold">Filter</h2>
            <button
              class="text-sm text-orange font-medium hover:underline"
              @click="filterAttributes.forEach(attr => selectedFilters[attr.title] = []); priceRange = [minPrice, maxPrice]"
              type="button"
            >
              Clear All
            </button>
          </div>
          <!-- Price Range Filter -->
          <div class="mb-6">
            <div class="font-medium mb-2">Price</div>
            <PriceRangeSlider
              :min="minPrice"
              :max="maxPrice"
              v-model="priceRange"
            />
          </div>
          <div v-for="(attribute, idx) in filterAttributes" :key="attribute.title" class="mb-4">
            <div class="font-medium mb-2">{{ attribute.title }}</div>
            <div class="flex flex-col gap-2">
              <label v-for="option in attribute.options" :key="option.value" class="flex items-center gap-2">
                <input type="checkbox" v-model="selectedFilters[attribute.title]" :value="option.value" class="accent-orange-500" />
                <span>{{ option.label }}</span>
              </label>
            </div>
            <div v-if="idx < filterAttributes.length - 1" class="border-b border-gray-200 mt-4"></div>
          </div>
        </aside>
        <!-- Products & Sort (Desktop only) -->
        <div class="col-span-9 flex flex-col">
          <div class="flex items-center justify-between mb-6">
            <div class="text-sm text-gray-600">Showing {{ filteredProducts.length }} Products</div>
            <div class="relative">
              <button @click="toggleSortDropdown" class="bg-gray-100 px-4 py-2 rounded flex items-center gap-2 font-medium border border-gray-300">
                <img src="/assets/icons/sort.svg" alt="Sort" class="w-5 h-5" />
                Sort By
                <svg :class="{'rotate-180': sortDropdownOpen}" class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div v-if="sortDropdownOpen" class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow z-30">
                <ul>
                  <li v-for="option in sortOptions" :key="option.value">
                    <button @click="selectSort(option.value)" class="w-full text-left px-4 py-2 hover:bg-gray-100" :class="{'font-semibold': selectedSort === option.value}">
                      {{ option.label }}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Product Grid (Desktop only) -->
          <div class="grid grid-cols-3 gap-6 lg:grid">
            <template v-if="visibleProducts.length > 0">
              <a
                v-for="product in visibleProducts"
                :key="product.id"
                :href="`/product/${product.id}`"
                class="bg-white rounded-lg shadow hover:shadow-lg transition group h-full flex flex-col"
              >
                <div class="relative">
                  <!-- Wishlist Button -->
                  <!-- <button
                    class="absolute top-2 right-2 z-20 bg-white rounded-full p-1 shadow transition"
                    @click.prevent.stop="toggleWishlist(product)"
                    aria-label="Add to Wishlist"
                  >
                    <img
                      :src="product.wishlisted ? '/assets/icons/wishlist.svg' : '/assets/icons/wishlist-border.svg'"
                      :alt="product.wishlisted ? 'Added to Wishlist' : 'Add to Wishlist'"
                      class="w-5 h-5"
                    />
                  </button> -->
                  <!-- Product Image -->
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <div class="p-3 flex flex-col flex-1">
                  <!-- Sale Tag -->
                  <span v-if="product.salesPrice && product.salesPrice > product.price" class="inline-block mb-1 px-2 py-0.5 rounded bg-green text-white text-xs font-semibold w-fit">Sale</span>
                  <!-- Product Name -->
                  <span class="font-medium text-base mb-1 truncate">{{ product.name }}</span>
                  <!-- Category -->
                  <span class="text-sm text-gray-500 mb-2 truncate">{{ product.category }}</span>
                  <!-- Star Rating -->
                  <div class="flex items-center gap-1 mb-2 min-w-0">
                    <svg class="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style="vertical-align: middle;">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"/>
                    </svg>
                    <span class="text-xs text-gray-700 font-semibold" style="line-height: 1; vertical-align: middle;">{{ product.rating || '4.2' }}</span>
                    <span class="text-xs text-gray-500" style="line-height: 1; vertical-align: middle;">Star Ratings</span>
                  </div>
                  <!-- Price -->
                  <div class="flex items-center mb-3">
                    <span class="font-primary text-sm text-gray-400 line-through mr-2" v-if="product.salesPrice && product.salesPrice > product.price">
                      {{ currency(product.salesPrice) }}
                    </span>
                    <span class="font-primary text-base font-bold text-gray-800">{{ currency(product.price) }}</span>
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
                      @click.prevent.stop="addToCart(product)"
                      aria-label="Add to Cart"
                    >
                      <img
                        :src="product.addedToCart ? '/assets/icons/cart-filled.svg' : '/assets/icons/cart.svg'"
                        :alt="product.addedToCart ? 'Added to Cart' : 'Add to Cart'"
                        class="w-5 h-5"
                      />
                    </button>
                  </div>
                </div>
              </a>
            </template>
            <div v-else class="col-span-full text-center text-gray-500 py-8">
              No products found. (Debug: {{ visibleProducts }})
            </div>
          </div>
          <!-- Infinite Scroll Loader -->
          <div v-if="loadingMore" class="flex justify-center py-6">
            <span class="text-gray-500">Loading more products...</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile/Tablet Filter Drawer -->
    <transition name="fade">
      <div v-if="showFilterDrawer" class="fixed inset-0 z-40 bg-black bg-opacity-40 flex">
        <div class="bg-white w-full h-full flex flex-col">
          <div class="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <span class="text-lg font-semibold">Filter</span>
            <button @click="showFilterDrawer = false" class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div class="overflow-y-auto flex-1 px-4 py-2">
            <!-- Price Range Filter (Drawer) -->
            <div class="mb-6">
              <div class="font-medium mb-2">Price</div>
              <PriceRangeSlider
                :min="minPrice"
                :max="maxPrice"
                v-model="priceRange"
              />
            </div>
            <div v-for="(attribute, idx) in filterAttributes" :key="attribute.title" class="mb-4">
              <div class="font-medium mb-2">{{ attribute.title }}</div>
              <div class="flex flex-col gap-2">
                <label v-for="option in attribute.options" :key="option.value" class="flex items-center gap-2">
                  <input type="checkbox" v-model="selectedFilters[attribute.title]" :value="option.value" class="accent-orange-500" />
                  <span>{{ option.label }}</span>
                </label>
              </div>
              <div v-if="idx < filterAttributes.length - 1" class="border-b border-gray-200 mt-4"></div>
            </div>
          </div>
          <!-- Sticky Save/Cancel Footer -->
          <div class="flex justify-end gap-4 px-4 py-3 border-t border-gray-200 bg-white sticky bottom-0">
            <button @click="showFilterDrawer = false" class="px-5 py-2 rounded bg-gray-100 text-gray-700 font-medium hover:bg-gray-200">Cancel</button>
            <button @click="showFilterDrawer = false" class="px-5 py-2 rounded bg-orange text-white font-medium hover-bg-green">Save</button>
          </div>
        </div>
        <div class="flex-1" @click="showFilterDrawer = false"></div>
      </div>
    </transition>


  </Layout>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import Layout from '../components/layout/Layout.vue';
import PriceRangeSlider from '../components/PriceRangeSlider.vue';

// Filter drawer state
const showFilterDrawer = ref(false);

// Price filter state
const minPrice = 0;
const maxPrice = 2500;
const priceRange = ref<[number, number]>([minPrice, maxPrice]);

// Sort dropdown state
const sortDropdownOpen = ref(false);

// Sort options
const sortOptions = [
  { label: 'Relevance', value: 'relevance' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest First', value: 'newest' }
];
const selectedSort = ref('relevance');

// Example filter attributes (replace with your real data)
const filterAttributes = [
  {
    title: 'Category',
    options: [
      { label: 'Rings', value: 'rings' },
      { label: 'Necklaces', value: 'necklaces' },
      { label: 'Bracelets', value: 'bracelets' }
    ]
  },
  {
    title: 'Material',
    options: [
      { label: 'Gold', value: 'gold' },
      { label: 'Silver', value: 'silver' },
      { label: 'Brass', value: 'brass' }
    ]
  }
];

// Selected filters
const selectedFilters = ref<Record<string, string[]>>({});
filterAttributes.forEach(attr => {
  selectedFilters.value[attr.title] = [];
});

// Example products (replace with your real data)
const products = ref([
  {
    id: 1,
    name: 'Gold Ring',
    category: 'Rings',
    material: 'gold',
    image: '/assets/images/products/product-1.jpg',
    price: 1200,
    salesPrice: 1500,
    wishlisted: false
  },
  {
    id: 2,
    name: 'Silver Necklace',
    category: 'Necklaces',
    material: 'silver',
    image: '/assets/images/products/product-2.jpg',
    price: 900,
    salesPrice: null,
    wishlisted: false
  },
  {
    id: 3,
    name: 'Brass Bracelet',
    category: 'Bracelets',
    material: 'brass',
    image: '/assets/images/products/product-3.jpg',
    price: 700,
    salesPrice: 850,
    wishlisted: false
  },
  {
    id: 4,
    name: 'Gold Necklace',
    category: 'Necklaces',
    material: 'gold',
    image: '/assets/images/products/product-4.jpg',
    price: 1800,
    salesPrice: 2100,
    wishlisted: false
  },
  {
    id: 5,
    name: 'Silver Ring',
    category: 'Rings',
    material: 'silver',
    image: '/assets/images/products/product-5.jpg',
    price: 950,
    salesPrice: null,
    wishlisted: false
  },
  {
    id: 6,
    name: 'Brass Necklace',
    category: 'Necklaces',
    material: 'brass',
    image: '/assets/images/products/product-6.jpg',
    price: 800,
    salesPrice: 950,
    wishlisted: false
  },
  {
    id: 7,
    name: 'Gold Bracelet',
    category: 'Bracelets',
    material: 'gold',
    image: '/assets/images/products/product-7.jpg',
    price: 1300,
    salesPrice: 1500,
    wishlisted: false
  },
  {
    id: 8,
    name: 'Silver Bracelet',
    category: 'Bracelets',
    material: 'silver',
    image: '/assets/images/products/product-8.jpg',
    price: 750,
    salesPrice: null,
    wishlisted: false
  },
  {
    id: 9,
    name: 'Brass Ring',
    category: 'Rings',
    material: 'brass',
    image: '/assets/images/products/product-9.jpg',
    price: 600,
    salesPrice: 700,
    wishlisted: false
  },
  {
    id: 10,
    name: 'Gold Anklet',
    category: 'Bracelets',
    material: 'gold',
    image: '/assets/images/products/product-10.jpg',
    price: 1100,
    salesPrice: 1300,
    wishlisted: false
  },
  {
    id: 11,
    name: 'Silver Anklet',
    category: 'Bracelets',
    material: 'silver',
    image: '/assets/images/products/product-11.jpg',
    price: 850,
    salesPrice: null,
    wishlisted: false
  },
  {
    id: 12,
    name: 'Brass Anklet',
    category: 'Bracelets',
    material: 'brass',
    image: '/assets/images/products/product-12.jpg',
    price: 650,
    salesPrice: 800,
    wishlisted: false
  },
  {
    id: 13,
    name: 'Gold Pendant',
    category: 'Necklaces',
    material: 'gold',
    image: '/assets/images/products/product-13.jpg',
    price: 2000,
    salesPrice: 2300,
    wishlisted: false
  },
  {
    id: 14,
    name: 'Silver Pendant',
    category: 'Necklaces',
    material: 'silver',
    image: '/assets/images/products/product-14.jpg',
    price: 1200,
    salesPrice: null,
    wishlisted: false
  },
  {
    id: 15,
    name: 'Brass Pendant',
    category: 'Necklaces',
    material: 'brass',
    image: '/assets/images/products/product-15.jpg',
    price: 900,
    salesPrice: 1050,
    wishlisted: false
  }
  // Add more products as needed
]);

// Filtered products
const filteredProducts = computed(() => {
  let filtered = products.value;
  filterAttributes.forEach(attr => {
    const selected = selectedFilters.value[attr.title];
    if (selected && selected.length > 0) {
      filtered = filtered.filter(product => {
        let value = '';
        if (attr.title === 'Category') {
          value = (product.category || '').toLowerCase();
        } else if (attr.title === 'Material') {
          value = (product.material || '').toLowerCase();
        }
        return selected.includes(value);
      });
    }
  });
  // Price filter
  filtered = filtered.filter(product => {
    const price = product.price;
    return price >= priceRange.value[0] && price <= priceRange.value[1];
  });
  return filtered;
});

// Sorting logic
function sortProducts(list: any[]) {
  switch (selectedSort.value) {
    case 'price-asc':
      return [...list].sort((a, b) => a.price - b.price);
    case 'price-desc':
      return [...list].sort((a, b) => b.price - a.price);
    case 'newest':
      return [...list].sort((a, b) => b.id - a.id);
    default:
      return list;
  }
}

// Visible products (pagination/infinite scroll can be added)
const visibleProducts = computed(() => sortProducts(filteredProducts.value));

// Wishlist toggle


// Add to cart toggle logic
function addToCart(product: any) {
  product.addedToCart = !product.addedToCart;
  if (product.addedToCart) {
    alert(`Added ${product.name} to cart!`);
  } else {
    alert(`Removed ${product.name} from cart!`);
  }
}

// Sort dropdown handlers
function toggleSortDropdown() {
  sortDropdownOpen.value = !sortDropdownOpen.value;
}
function selectSort(value: string) {
  selectedSort.value = value;
  sortDropdownOpen.value = false;
}

// Infinite scroll loading (stub)
const loadingMore = ref(false);

// Currency filter (simple implementation)
function currency(value: number) {
  if (typeof value !== 'number') return value;
  return '₹' + value.toLocaleString('en-IN');
}
</script>
