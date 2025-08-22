<template>
    <div class="relative">
        <nav :class="navbarClass">
            <!-- Desktop Navbar -->
            <div class="hidden lg:flex items-center justify-between px-4 py-2">
            <!-- Logo -->
            <div class="flex-shrink-0">
                <img src="/assets/images/logo.webp" alt="Logo" class="hidden lg:block lg:w-[220px] lg:h-[90px]" />
            </div>
            <!-- Menu -->
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
                                <a :href="cat.link" class="block px-4 py-2 font-sm hover-bg-beige">{{ cat.name }}</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="relative" ref="collectionsMenu">
                    <button
                        class="flex items-center hover:text-primary focus:outline-none"
                        @click="showCollections = !showCollections"
                        aria-haspopup="true"
                        :aria-expanded="showCollections"
                    >
                        Shop by Collections
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <!-- Dropdown -->
                    <div
                        v-if="showCollections"
                        class="absolute left-0 mt-2 w-56 bg-white border border-light rounded shadow-md z-40"
                    >
                        <ul>
                            <li v-for="col in collections" :key="col.id" class="relative group">
                                <a :href="col.link" class="block px-4 py-2 font-base hover-bg-beige flex justify-between items-center">
                                    {{ col.name }}
                                    <span v-if="col.subCategories && col.subCategories.length" class="ml-2">
                                        <svg class="w-3 h-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </span>
                                </a>
                                <!-- Sub-category dropdown -->
                                <div
                                    v-if="col.subCategories && col.subCategories.length"
                                    class="absolute left-full top-0 mt-0 ml-1 w-48 bg-white border border-light rounded shadow-md z-50 hidden group-hover:block"
                                >
                                    <ul>
                                        <li v-for="sub in col.subCategories" :key="sub.id">
                                            <a :href="sub.link" class="block px-4 py-2 font-sm hover-bg-beige">{{ sub.name }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="relative" ref="otherMenu">
                    <button
                        class="flex items-center hover:text-primary focus:outline-none"
                        @click="showOther = !showOther"
                        aria-haspopup="true"
                        :aria-expanded="showOther"
                    >
                        Other
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <!-- Dropdown -->
                    <div
                        v-if="showOther"
                        class="absolute left-0 mt-2 w-56 bg-white border border-light rounded shadow-md z-40"
                    >
                        <ul>
                            <li v-for="item in other" :key="item.id">
                                <a :href="item.link" class="block px-4 py-2 font-sm hover-bg-beige">{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <!-- Right: Icons -->
            <div class="flex items-center space-x-6">
                <!-- Search -->
                <button @click="openSearchBar" class="focus:outline-none" aria-label="Open search">
                    <img src="/assets/icons/search.svg" alt="Search" class="w-6 h-6" />
                </button>
                <!-- Profile -->
                <a href="/my-account">
                    <img src="/assets/icons/user.svg" alt="Profile" class="w-6 h-6" />
                </a>
                <!-- Cart -->
                <a href="/my-cart" class="relative flex items-center">
                    <img src="/assets/icons/cart.svg" alt="Cart" class="w-6 h-6" />
                    <span
                        v-if="cartCount > 0"
                        class="absolute top-0 right-0 -mt-2 -mr-2 bg-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center z-10"
                        style="min-width: 1.25rem; text-align: center;"
                    >{{ cartCount }}</span>
                </a>
            </div>
        </div>

        <!-- Search Bar (Desktop & Mobile) -->
        <transition name="fade">
            <div :class="searchBarClass" v-if="showSearch">
                <div class="max-w-2xl mx-auto">
                    <div class="flex items-center border rounded px-3 py-2 bg-white">
                        <img src="/assets/icons/search.svg" alt="Search" class="w-5 h-5 mr-2" />
                        <input
                            v-model="searchQuery"
                            @input="onSearch"
                            type="text"
                            placeholder="Search for products or categories..."
                            class="w-full outline-none"
                            ref="searchInput"
                        />
                        <button @click="closeSearchBar" class="ml-2" aria-label="Close search">
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
                                        <div class="flex items-center space-x-2 font-primary text-xs mt-1">
                                            <span v-if="prod.salePrice" class="line-through text-gray-400 text-xs">{{ prod.salePrice }}</span>
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
                                    <div class="font-primary text-xs text-gray-500 mt-1">{{ cat.breadcrumb }}</div>
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
                <button @click="openSearchBar" class="focus:outline-none" aria-label="Open search">
                    <img src="/assets/icons/search.svg" alt="Search" class="w-6 h-6" />
                </button>
                <a href="/my-account">
                    <img src="/assets/icons/user.svg" alt="Profile" class="w-6 h-6" />
                </a>
                <div class="relative flex items-center">
                    <a href="/my-cart">
                        <img src="/assets/icons/cart.svg" alt="Cart" class="w-6 h-6" />
                    </a>
                    <span v-if="cartCount > 0" class="absolute top-0 right-0 -mt-2 -mr-2 bg-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center z-10" style="min-width: 1.25rem; text-align: center;">
                        {{ cartCount }}
                    </span>
                </div>
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
                :class="['bg-white h-full shadow-lg transition-all duration-300 flex-1', isTablet ? 'w-1/2' : 'w-full']"
                class="relative z-50 flex flex-col"
            >
                <div class="flex items-center justify-between px-6 py-4 border-b flex-shrink-0">
                <span class="font-bold text-lg">Menu</span>
                <button @click="drawerOpen = false" class="focus:outline-none">
                    <img src="/assets/icons/close.svg" alt="Close" class="w-4 h-4" />
                </button>
                </div>
                <!-- Make this div scrollable -->
                <div class="flex-1 overflow-y-auto">
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
                    <li>
                    <button @click="mobileCollectionsOpen = !mobileCollectionsOpen" class="flex items-center w-full py-2 font-base focus:outline-none">
                        Shop by Collections
                        <span class="ml-auto">
                        <svg v-if="!mobileCollectionsOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v12m6-6H6"/></svg>
                        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 12H6"/></svg>
                        </span>
                    </button>
                    <ul v-if="mobileCollectionsOpen" class="pl-4 mt-1 space-y-1">
                        <li v-for="col in collections" :key="col.id">
                        <a :href="col.link" class="block py-1 font-sm">{{ col.name }}</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <button @click="mobileOtherOpen = !mobileOtherOpen" class="flex items-center w-full py-2 font-base focus:outline-none">
                        Other
                        <span class="ml-auto">
                        <svg v-if="!mobileOtherOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v12m6-6H6"/></svg>
                        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 12H6"/></svg>
                        </span>
                    </button>
                    <ul v-if="mobileOtherOpen" class="pl-4 mt-1 space-y-1">
                        <li v-for="item in other" :key="item.id">
                        <a :href="item.link" class="block py-1 font-sm">{{ item.name }}</a>
                        </li>
                    </ul>
                    </li>
                </ul>
                <!-- Social Icons -->
                <div class="flex space-x-4 px-6 mt-8 mb-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener">
                    <img src="/assets/icons/facebook.svg" alt="Facebook" class="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener">
                    <img src="/assets/icons/instagram.svg" alt="Instagram" class="w-6 h-6" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </transition>
        </nav>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const isFixed = ref(false)
let lastScroll = 0
function onScroll() {
    const scrollY = window.scrollY
    if (scrollY > 10 && scrollY > lastScroll) {
        isFixed.value = false
    } else if (scrollY > 10 && scrollY < lastScroll) {
        isFixed.value = true
    } else if (scrollY <= 10) {
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
const showCollections = ref(false)
const showOther = ref(false)
const showSearch = ref(false)
const drawerOpen = ref(false)
const mobileCatOpen = ref(false)
const mobileCollectionsOpen = ref(false)
const mobileOtherOpen = ref(false)
const searchQuery = ref('')
const cartCount = ref(2)

const categories = [
    { id: 1, name: 'Earrings', link: '#' },
    { id: 2, name: 'Necklaces', link: '#' },
    { id: 3, name: 'Hair Accessories', link: '#' },
    { id: 4, name: 'Fabric Jewellery', link: '#' },
    { id: 5, name: 'Fabric Wallets', link: '#' },
    { id: 6, name: 'Pinterest Fashion', link: '#' },
]

const collections = [
    { id: 1, name: 'Vacation', link: '#' },
    { id: 2, name: 'Pinterest Hair', link: '#' },
    { id: 3, name: 'Anti‑Tarnish', link: '#' },
    { id: 4, name: 'Fabric Designs', link: '#' },
    { id: 5, name: 'Seasonal Picks', link: '#' }
]

const other = [
    { id: 1, name: 'About', link: '#' },
    { id: 2, name: 'Return & Refund', link: '#' },
    { id: 3, name: 'Contact', link: '#' },
]

const searchResults = ref({
    products: [],
    categories: [],
})

const searchBarClass = computed(() => {
    // Always position absolutely below the navbar, relative to the parent container
    return 'w-full bg-transparent px-4 py-4 absolute left-0 top-full z-[9999]';
});

function openSearchBar() {
    showSearch.value = true
    nextTick(() => {
        if (searchInput.value) searchInput.value.focus()
    })
}
function closeSearchBar() {
    showSearch.value = false
    searchQuery.value = ''
    searchResults.value = { products: [], categories: [] }
}

function onSearch() {
    if (!searchQuery.value) {
        searchResults.value = { products: [], categories: [] }
        return
    }
    // Simulated results
    searchResults.value = {
        products: [
            {
                id: 1,
                name: 'Myra Handmade Beaded Earrings',
                image: '/assets/images/products/product-1.jpg',
                price: '₹799',
                salePrice: '₹999',
            },
            {
                id: 2,
                name: 'Boho Chic Necklace',
                image: '/assets/images/products/product-2.jpg',
                price: '₹1199',
                salePrice: '',
            },
        ],
        categories: [
            {
                id: 1,
                name: 'Earrings',
                breadcrumb: 'Earrings / Myra Handmade Beaded Earrings',
            },
            {
                id: 2,
                name: 'Necklaces',
                breadcrumb: 'Necklaces / Boho Chic Necklace',
            },
        ],
    }
}

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
