<template>
  <div class="flex justify-center mt-20 items-center">
    <div class="shadow-md p-8 bg-white rounded-lg w-80">
      <form @submit.prevent="submitForm">
        <h1 class="text-2xl font-bold mb-4">Login</h1>
        <div class="relative">
          <label for="username" class="block text-sm font-medium text-gray-700 transition-all">Username</label>
          <input type="text" id="username" placeholder="Enter your username" v-model="formData.username"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
        </div>
        <div class="relative mt-4">
          <label for="password" class="block text-sm font-medium text-gray-700 transition-all">Password</label>
          <input type="password" id="password" placeholder="Enter your password" v-model="formData.password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
        </div>
        <button
          class="w-full bg-gray-500 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          @click="submitForm" type="submit">
          Sign in
        </button>
      </form>

    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useAuthStore } from '@/stores/authentication';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const auth = useAuthStore()
const router=useRouter();
const formData = ref({
  username: '',
  password: ''
})
const submitForm = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/login', formData.value)
    const data = response.data.token
    auth.login(data)
    router.push('/profile')
  }
  catch (err) {
    console.log(err)
  }
}
</script>

<style scoped>
/* Additional styling */
input:focus {
  border-color: #6366f1;
  /* Change focus color */
}
</style>
