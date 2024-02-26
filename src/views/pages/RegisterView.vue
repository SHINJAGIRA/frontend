<template>
  <div class="justify-center flex mt-20">
    <div class="w-80">
      <form @submit.prevent="submitForm" class="p-8 shadow-md">
        <h2 class="text-2xl font-bold mb-3 text-gray-800">Register</h2>
        <div class="">
          <label for="fullname" class="text-sm block font-medium">full names</label>
          <input type="text" id="username" class=" border border-gray-500 rounded-md px-4 py-2  w-full outline-none 
        focus:ring-1 focus:ring-gray-800" placeholder="Enter your full names" v-model="formData.fullname">
        </div>
        <div class="">
          <label for="email" class="font-medium block text-sm">email</label>
          <input type="email" class="border border-gray-500 px-4 py-2
        rounded-md w-full outline-none focus:ring-1 focus:ring-gray-800" placeholder="Enter your email" v-model="formData.email">
        </div>
        <div class="">
          <label for="username" class="text-sm block font-medium">username</label>
          <input type="text" id="username" class=" border border-gray-500 rounded-md px-4 py-2  w-full outline-none 
        focus:ring-1 focus:ring-gray-800" placeholder="Enter your username" v-model="formData.username">
        </div>
        <div class="">
          <label for="password" class="text-sm block font-medium">password</label>
          <input type="password" id="password" class=" border border-gray-500 rounded-md px-4 py-2  w-full outline-none 
        focus:ring-1 focus:ring-gray-800" placeholder="Enter your password" v-model="formData.password">
        </div>

        <div class="">
          <button type="submit"
            class="bg-gray-500 hover:bg-gray-800 w-full px-4 py-2 rounded-md mt-4 font-medium transition text-white" @click="submitForm">Signin</button>
        </div>
      </form>
    </div>

  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router=useRouter();
const formData=ref({
  fullname:'',
  email:'',
  username:'',
  password:''
})
const submitForm= async()=>{
  try{
    const response=await axios.post('http://localhost:3000/api/create',formData.value);
    const data=response.data.token
    localStorage.setItem('token',data)
    router.push('/')
  }
  catch(err){
    console.log(err.message)
  }
}

</script>

<style></style>