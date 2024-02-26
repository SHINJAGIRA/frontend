<template>
    <header class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <router-link to="/" class="text-white font-bold text-xl">Vue</router-link>
            <ul class="flex">
                <li v-if="isAuthenticated">
                    <router-link to="/profile" class="text-white hover:text-gray-300 px-4 py-2 block">Profile</router-link>
                </li>
                <li v-if="isAuthenticated">
                    <button @click="logout" class="text-white hover:text-gray-300 px-4 py-2">Logout</button>
                </li>
                <li v-if="!isAuthenticated">
                    <router-link to="/login" class="text-white hover:text-gray-300 px-4 py-2">Login</router-link>
                </li>
                <li v-if="!isAuthenticated">
                    <router-link to="/register" class="text-white hover:text-gray-300 px-4 py-2">Register</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/authentication';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const auth = useAuthStore();
const router = useRouter();

const logout = () => {
    auth.logout();
    router.push('/login');
};

const isAuthenticated = computed(() => auth.isAuthenticated)
</script>
