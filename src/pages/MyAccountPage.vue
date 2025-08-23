<template>
  <Layout>
    <section class="flex flex-col items-center justify-center py-8">
      <nav class="text-sm">
        <ol class="flex space-x-2">
          <li>
            <a href="/" class="text-orange hover:underline">Home</a>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>My Account</li>
        </ol>
      </nav>
    </section>
    <section class="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mb-12">
      <!-- Left Panel: Menu -->
      <aside class="w-full md:w-64 bg-gray-50 rounded-lg shadow p-0 md:p-4 flex flex-row md:flex-col md:gap-0 gap-4 overflow-x-auto">
        <div v-for="item in menuItems" :key="item.key" class="w-full">
          <button
            class="w-full text-left px-6 py-4 md:px-0 md:py-4 text-base font-medium hover:text-orange focus:text-orange transition border-b md:border-b-0 md:border-l-4 md:border-l-transparent md:hover:border-l-orange md:focus:border-l-orange"
            :class="activeTab === item.key ? 'text-orange md:border-l-orange' : 'text-gray-700'"
            @click="onMenuClick(item)"
          >
            {{ item.label }}
          </button>
          <div v-if="item.key !== menuItems[menuItems.length-1].key" class="hidden md:block border-b border-gray-200 mx-2"></div>
        </div>
      </aside>

      <!-- Right Panel: Content -->
      <main class="flex-1 bg-white rounded-lg shadow p-6 min-h-[400px]">
        <!-- Profile Tab -->
        <div v-if="activeTab === 'profile'">
          <h2 class="font-semibold text-lg mb-6">Profile</h2>
          <form class="space-y-4 max-w-lg">
            <div class="flex items-center gap-6 mb-4">
              <div class="relative w-20 h-20">
                <img :src="profileImage || defaultProfileImage" class="w-20 h-20 object-cover rounded-full border" />
                <label class="absolute bottom-0 right-0 bg-green text-white rounded-full p-1 cursor-pointer shadow" title="Upload">
                  <input type="file" class="hidden" @change="onProfileImageChange" />
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                </label>
              </div>
            </div>
            <div>
              <label class="block text-sm mb-1">Name</label>
              <input v-model="profileForm.name" type="text" class="w-full border rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label class="block text-sm mb-1">Gender</label>
              <select v-model="profileForm.gender" class="w-full border rounded px-3 py-2 text-sm">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label class="block text-sm mb-1">Email</label>
              <input v-model="profileForm.email" type="email" class="w-full border rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label class="block text-sm mb-1">Mobile Number</label>
              <input v-model="profileForm.mobile" type="text" class="w-full border rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label class="block text-sm mb-1">Date of Birth</label>
              <input v-model="profileForm.dob" type="date" class="w-full border rounded px-3 py-2 text-sm" />
            </div>
            <button type="submit" class="bg-orange text-white px-6 py-2 rounded font-semibold mt-4">Submit</button>
          </form>
        </div>

        <!-- Addresses Tab -->
        <div v-if="activeTab === 'addresses'">
          <div class="flex items-center justify-between mb-6">
            <h2 class="font-semibold text-lg">Addresses</h2>
            <button @click="showAddressModal = true" class="bg-green text-white px-4 py-2 rounded font-semibold transition">Add Address</button>
          </div>
          <div class="space-y-4">
            <div v-for="address in addresses" :key="address.id" class="border rounded p-4 relative">
              <div class="font-medium text-sm text-gray-500 mb-2">{{ address.type }}</div>
              <div class="font-primary font-semibold text-base text-gray-600 mb-1">{{ address.name }}</div>
              <div class="font-primary text-sm text-gray-500 mb-1">{{ address.address }}</div>
              <div class="text-sm text-gray-500 mb-2">{{ address.mobile }}</div>
              <button class="text-orange text-sm hover:underline absolute top-2 right-2">Edit</button>
            </div>
          </div>
          <!-- Add Address Modal (reuse from CartPage) -->
          <div v-if="showAddressModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 bg-opacity-50 backdrop-blur-sm">
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
        </div>

        <!-- Password Tab -->
        <div v-if="activeTab === 'password'">
          <h2 class="font-semibold text-lg mb-6">Change Password</h2>
          <form class="space-y-4 max-w-lg">
            <div>
              <label class="block text-sm mb-1">Current Password</label>
              <div class="relative">
                <input :type="showCurrentPassword ? 'text' : 'password'" v-model="passwordForm.current" class="w-full border rounded px-3 py-2 text-sm pr-10" />
                <button type="button" class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" @click="showCurrentPassword = !showCurrentPassword">
                  <svg v-if="showCurrentPassword" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.223-3.592m3.104-2.546A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.43 5.362M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </button>
              </div>
            </div>
            <div>
              <label class="block text-sm mb-1">New Password</label>
              <div class="relative">
                <input :type="showNewPassword ? 'text' : 'password'" v-model="passwordForm.new" class="w-full border rounded px-3 py-2 text-sm pr-10" />
                <button type="button" class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" @click="showNewPassword = !showNewPassword">
                  <svg v-if="showNewPassword" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.223-3.592m3.104-2.546A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.43 5.362M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </button>
              </div>
            </div>
            <div>
              <label class="block text-sm mb-1">Confirm Password</label>
              <div class="relative">
                <input :type="showConfirmPassword ? 'text' : 'password'" v-model="passwordForm.confirm" class="w-full border rounded px-3 py-2 text-sm pr-10" />
                <button type="button" class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" @click="showConfirmPassword = !showConfirmPassword">
                  <svg v-if="showConfirmPassword" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.223-3.592m3.104-2.546A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.43 5.362M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </button>
              </div>
            </div>
            <button type="submit" class="bg-orange text-white px-6 py-2 rounded font-semibold mt-4">Submit</button>
          </form>
        </div>
      </main>
    </section>




  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Layout from '../components/layout/Layout.vue';

// Menu items
const menuItems = [
  { key: 'profile', label: 'Profile' },
  { key: 'addresses', label: 'Addresses' },
  { key: 'password', label: 'Password' },
  { key: 'orders', label: 'Orders', link: `${BASE_PATH}/orders` },
];

import { useRouter } from 'vue-router';
const router = useRouter();
const activeTab = ref('profile');

function onMenuClick(item: any) {
  if (item.key === 'orders') {
    router.push({ name: 'MyOrders' });
  } else {
    activeTab.value = item.key;
  }
}

// Profile form state
import defaultProfileImage from '@/assets/images/profile/profile-1.jpg';
import { BASE_PATH } from '../utilities/constant';

const profileForm = ref({
  name: 'John Doe',
  gender: '',
  email: 'john@example.com',
  mobile: '9876543210',
  dob: '',
});
const profileImage = ref('');
function onProfileImageChange(e: Event) {
  const files = (e.target as HTMLInputElement).files;
  if (files && files[0]) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      profileImage.value = ev.target?.result as string;
    };
    reader.readAsDataURL(files[0]);
  }
}

// Addresses state
const addresses = ref([
  {
    id: 1,
    type: 'Home',
    name: 'John Doe',
    address: '123 Main St, Springfield',
    mobile: '+91 9876543210',
  },
  {
    id: 2,
    type: 'Office',
    name: 'John Doe',
    address: '456 Corporate Ave, Metropolis',
    mobile: '+91 9876543210',
  },
]);
const showAddressModal = ref(false);

// Password form state
const passwordForm = ref({
  current: '',
  new: '',
  confirm: '',
});
const showCurrentPassword = ref(false);
const showNewPassword = ref(false);
const showConfirmPassword = ref(false);
</script>
