import {defineStore} from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore=defineStore('auth',{
    state:()=>({
        token:ref(null),
        isAuthenticated:!!localStorage.getItem('token')
    }),
    actions:{
        logout(){
            this.isAuthenticated=false,
            localStorage.removeItem('token')
        },
        login(token){
            this.isAuthenticated=true
            localStorage.setItem('token',token)
          }
    }
})