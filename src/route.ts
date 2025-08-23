
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('./pages/HomePage.vue'),
	},
	{
		path: '/shop',
		name: 'Shop',
		component: () => import('./pages/ShopPage.vue'),
	},
	{
		path: '/product-details/:id',
		name: 'ProductDetails',
		component: () => import('./pages/ProductDetailsPage.vue'),
		props: true,
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('./pages/CartPage.vue'),
	},
	{
		path: '/my-account',
		name: 'MyAccount',
		component: () => import('./pages/MyAccountPage.vue'),
	},
	{
		path: '/orders',
		name: 'MyOrders',
		component: () => import('./pages/MyOrdersPage.vue'),
	},
	{
		path: '/orders/:orderId',
		name: 'OrderDetails',
		component: () => import('./pages/OrderDetailsPage.vue'),
		props: true,
	},
	{
		path: '/change-password',
		name: 'ChangePassword',
		component: () => import('./pages/ChangePasswordPage.vue'),
	},
	{
		path: '/my-addresses',
		name: 'Addresses',
		component: () => import('./pages/AddressesPage.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
