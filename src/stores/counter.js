import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCountStore=defineStore('counter',{
  state:()=>({
    count:ref(1)
  }),
  actions:{
    increment(){
      this.count++
    }
  }
})