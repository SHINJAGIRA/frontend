<template>
  <div>
    <p>Username: {{ username }}</p>
    <!-- Other user data goes here -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'vue-router';
const router = useRouter()


const token = ref(localStorage.getItem('token'));
let decodedToken = {};

if (token.value) {
  decodedToken = jwtDecode(token.value);
}else{
  router.push('/')
}

// Extract user data from the decoded token
const username = ref(decodedToken.email);

// You can extract other user data in a similar way

onMounted(() => {
  console.log('Component mounted');
});
</script>
<!--
  Certainly! Let's break down each of these concepts and discuss when and where to use them in Vue.js applications:

Mounted and Unmounted:

mounted: The mounted lifecycle hook is called after the Vue instance or component is mounted to the DOM. This is where you can perform tasks that require access to the component's DOM, such as initializing third-party libraries, fetching initial data from APIs, or setting up event listeners.
unmounted: The unmounted hook is called when the Vue instance or component is about to be destroyed and removed from the DOM. This is where you should clean up resources, such as removing event listeners or canceling asynchronous tasks, to prevent memory leaks and ensure proper cleanup.
Example:

vue
Copy code
<script>
export default {
  mounted() {
    // Initialize third-party library
    // Fetch initial data
    // Setup event listeners
  },
  unmounted() {
    // Cleanup resources (e.g., remove event listeners, cancel async tasks)
  }
}
</script>
Computed Properties:

Computed properties are functions that compute and cache a value based on reactive data. They are ideal for performing data manipulation or calculations based on reactive data and are automatically re-evaluated when their dependencies change.
Use computed properties when you need to derive or transform data based on reactive state, and you want the result to be reactive as well.
Example:

vue
Copy code
<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
}
</script>
Watchers:

Watchers are functions that watch for changes to a specific reactive data property and perform a callback function when the property changes.
Use watchers when you need to perform asynchronous or expensive operations in response to changes in reactive data, or when you need more control over when to react to changes compared to computed properties.
Example:

vue
Copy code
<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  watch: {
    count(newValue, oldValue) {
      console.log(`Count changed from ${oldValue} to ${newValue}`);
      // Perform additional logic or side effects
    }
  }
}
</script>
Each of these concepts serves a different purpose and is used in different scenarios. Here's a general guideline:

Use mounted and unmounted hooks for initializing and cleaning up resources related to the DOM.
Use computed properties for deriving or transforming data based on reactive state.
Use watchers for reacting to changes in specific reactive data properties, especially when you need to perform asynchronous or expensive operations.
-->