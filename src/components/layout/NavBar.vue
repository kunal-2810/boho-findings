<template>
    <nav :class="navbarClass">
        <!-- Top Bar Placeholder (if any) -->
        <!-- Desktop Navbar -->
        <div class="hidden lg:flex items-center justify-between px-4 py-2">
            <!-- Left: Logo -->
            <div class="flex-shrink-0">
                <img src="/assets/images/logo.webp" alt="Logo" class="hidden lg:block lg:w-[220px] lg:h-[90px]" />
            </div>
            <!-- Center: Menu -->
            <ul class="flex space-x-8 font-base text-gray-700">
                <li><a href="/" class="hover:text-primary">Home</a></li>
                <li class="relative" ref="categoryMenu">
                    <button
                        class="flex items-center hover:text-primary focus:outline-none"
                        @click="showCategory = !showCategory"
                        aria-haspopup="true"
                        :aria-expanded="showCategory"
                    >
                        Shop by Category
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <!-- Dropdown -->
                    <div
                        v-if="showCategory"
                        class="absolute left-0 mt-2 w-56 bg-white border border-light rounded shadow-md z-40"
                    >
                        <ul>
                            <li v-for="cat in categories" :key="cat.id">
                                <a :href="cat.link" class="block px-4 py-2 font-base hover-bg-beige">{{ cat.name }}</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li><a href="/collections" class="hover:text-primary">Shop by Collections</a></li>
                <li><a href="/best-sellers" class="hover:text-primary">Best Sellers</a></li>
                <li><a href="/new-arrivals" class="hover:text-primary">New Arrivals</a></li>
                <li><a href="/all-products" class="hover:text-primary">All Products</a></li>
            </ul>
            <!-- Right: Icons -->
            <div class="flex items-center space-x-6">
                <!-- Search -->
                <button @click="toggleSearch" class="focus:outline-none">
                    <img src="/assets/icons/search.svg" alt="Search" class="w-6 h-6" />
                </button>
                <!-- Profile -->
                <a href="/my-account">
                    <img src="/assets/icons/user.svg" alt="Profile" class="w-6 h-6" />
                </a>
                <!-- Cart -->
                <a href="/my-cart" class="relative">
                    <img src="/assets/icons/cart.svg" alt="Cart" class="w-6 h-6" />
                    <span v-if="cartCount > 0" class="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full px-1.5">{{ cartCount }}</span>
                </a>
            </div>
        </div>

        <!-- Search Bar (Desktop & Mobile) -->
        <transition name="fade">
            <div v-if="showSearch" :class="searchBarClass">
                <div class="max-w-2xl mx-auto">
                    <div class="flex items-center border rounded px-3 py-2">
                        <img src="/assets/icons/search.svg" alt="Search" class="w-5 h-5 mr-2" />
                        <input
                            v-model="searchQuery"
                            @input="onSearch"
                            type="text"
                            placeholder="Search for products or categories..."
                            class="w-full outline-none"
                        />
                        <button @click="toggleSearch" class="ml-2">
                            <img src="/assets/icons/close.svg" alt="Close" class="w-5 h-5" />
                        </button>
                    </div>
                    <div v-if="searchQuery && (searchResults.products.length || searchResults.categories.length)" class="mt-4 bg-white border rounded shadow divide-y divide-gray-200">
                        <template v-if="searchResults.products.length">
                            <div class="px-4 py-2 text-xs text-gray-400 uppercase bg-gray-50">Products</div>
                            <ul>
                                <li v-for="prod in searchResults.products" :key="prod.id" class="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
                                    <img :src="prod.image" alt="" class="w-12 h-12 object-cover rounded mr-3" />
                                    <div class="flex-1">
                                        <div class="font-medium text-base">{{ prod.name }}</div>
                                        <div class="flex items-center space-x-2 text-xs mt-1">
                                            <span v-if="prod.salePrice" class="line-through text-gray-400">{{ prod.salePrice }}</span>
                                            <span class="text-primary font-semibold text-sm">{{ prod.price }}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </template>
                        <template v-if="searchResults.products.length && searchResults.categories.length">
                            <div class="h-2 bg-gray-100"></div>
                        </template>
                        <template v-if="searchResults.categories.length">
                            <div class="px-4 py-2 text-xs text-gray-400 uppercase bg-gray-50">Categories</div>
                            <ul>
                                <li v-for="cat in searchResults.categories" :key="cat.id" class="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                                    <div class="font-medium text-base">{{ cat.name }}</div>
                                    <div class="text-xs text-gray-500 mt-1">{{ cat.breadcrumb }}</div>
                                </li>
                            </ul>
                        </template>
                    </div>
                </div>
            </div>
        </transition>

        <!-- Mobile/Tablet Navbar -->
        <div class="flex lg:hidden items-center justify-between px-4 py-2">
            <!-- Logo -->
            <img src="/assets/images/logo.webp" alt="Logo" class="w-[180px] h-[72px]" />
            <!-- Right Icons -->
            <div class="flex items-center space-x-4">
                <button @click="toggleSearch" class="focus:outline-none">
                    <img src="/assets/icons/search.svg" alt="Search" class="w-6 h-6" />
                </button>
                <a href="/my-account">
                    <img src="/assets/icons/user.svg" alt="Profile" class="w-6 h-6" />
                </a>
                <a href="/my-cart" class="relative">
                    <img src="/assets/icons/cart.svg" alt="Cart" class="w-6 h-6" />
                    <span v-if="cartCount > 0" class="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full px-1.5">{{ cartCount }}</span>
                </a>
                <!-- Hamburger -->
                <button @click="drawerOpen = true" class="focus:outline-none">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                </button>
            </div>
        </div>

        <!-- Drawer (Mobile/Tablet) -->
        <transition name="slide">
            <div v-if="drawerOpen" class="fixed inset-0 z-50 flex">
                <!-- Overlay -->
                <div class="fixed inset-0 bg-black bg-opacity-40" @click="drawerOpen = false"></div>
                <!-- Drawer Panel -->
                <div
                    :class="['bg-white h-full shadow-lg transition-all duration-300', isTablet ? 'w-1/2' : 'w-full']"
                    class="relative z-50"
                >
                    <div class="flex items-center justify-between px-6 py-4 border-b">
                        <span class="font-bold text-lg">Menu</span>
                        <button @click="drawerOpen = false" class="focus:outline-none">
                            <img src="/assets/icons/close.svg" alt="Close" class="w-6 h-6" />
                        </button>
                    </div>
                    <ul class="mt-4 space-y-2 px-6">
                        <li><a href="/" class="block py-2 font-base">Home</a></li>
                        <li>
                            <button @click="mobileCatOpen = !mobileCatOpen" class="flex items-center w-full py-2 font-base focus:outline-none">
                                Shop by Category
                                <span class="ml-auto">
                                    <svg v-if="!mobileCatOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v12m6-6H6"/></svg>
                                    <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 12H6"/></svg>
                                </span>
                            </button>
                            <ul v-if="mobileCatOpen" class="pl-4 mt-1 space-y-1">
                                <li v-for="cat in categories" :key="cat.id">
                                    <a :href="cat.link" class="block py-1 font-sm">{{ cat.name }}</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="/collections" class="block py-2 font-base">Shop by Collections</a></li>
                        <li><a href="/best-sellers" class="block py-2 font-base">Best Sellers</a></li>
                        <li><a href="/new-arrivals" class="block py-2 font-base">New Arrivals</a></li>
                        <li><a href="/all-products" class="block py-2 font-base">All Products</a></li>
                    </ul>
                    <!-- Social Icons -->
                    <div class="flex space-x-4 px-6 mt-8">
                        <a href="https://facebook.com" target="_blank" rel="noopener">
                            <img src="/assets/icons/facebook.svg" alt="Facebook" class="w-6 h-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener">
                            <img src="/assets/icons/instagram.svg" alt="Instagram" class="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </transition>
    </nav>

</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
// Sticky/fixed navbar logic
const isFixed = ref(false)
let lastScroll = 0
function onScroll() {
    const scrollY = window.scrollY
    if (scrollY > 10 && scrollY > lastScroll) {
        // Scrolling down, keep as static
        isFixed.value = false
    } else if (scrollY > 10 && scrollY < lastScroll) {
        // Scrolling up, fix navbar to top
        isFixed.value = true
    } else if (scrollY <= 10) {
        // At top, show normal
        isFixed.value = false
    }
    lastScroll = scrollY
}
onMounted(() => {
    window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})

const navbarClass = computed(() =>
    isFixed.value
        ? 'fixed top-0 left-0 w-full bg-white shadow z-40'
        : 'w-full bg-white shadow z-30'
)

const showCategory = ref(false)
const showSearch = ref(false)
const drawerOpen = ref(false)
const mobileCatOpen = ref(false)
const searchQuery = ref('')
const cartCount = ref(2) // Example, replace with real data

const categories = [
    { id: 1, name: 'Earrings', link: '/category/earrings' },
    { id: 2, name: 'Necklaces', link: '/category/necklaces' },
    { id: 3, name: 'Bracelets', link: '/category/bracelets' },
    // ...add more
]

// Dummy search results for demo
const searchResults = ref({
    products: [],
    categories: [],
})

// Search bar position logic
const searchBarClass = computed(() => {
    if (isFixed.value) {
        return 'w-full bg-white border-t shadow px-4 py-4 fixed left-0 top-0 z-50';
    } else {
        return 'w-full bg-white border-t shadow px-4 py-4 absolute left-0 top-full z-40';
    }
});

function toggleSearch() {
    showSearch.value = !showSearch.value
    if (!showSearch.value) searchQuery.value = ''
}

function onSearch() {
    // Simulate search
    if (!searchQuery.value) {
        searchResults.value = { products: [], categories: [] }
        return
    }
    searchResults.value = {
        products: [
            {
                id: 1,
                name: 'Myra Handmade Beaded Earrings',
                image: '/assets/images/product1.webp',
                price: '₹799',
                salePrice: '₹999',
            },
            // ...more
        ],
        categories: [
            {
                id: 1,
                name: 'Earrings',
                breadcrumb: 'Earrings / Myra Handmade Beaded Earrings',
            },
            // ...more
        ],
    }
}

// Responsive drawer width
const isTablet = ref(false)
function handleResize() {
    isTablet.value = window.innerWidth >= 640 && window.innerWidth < 1024
}
onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>
