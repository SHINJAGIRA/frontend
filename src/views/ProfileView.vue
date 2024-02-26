<template>
    hello
    {{ token }}
</template>

<script setup>
import { useAuthStore } from '@/stores/authentication';

const auth = useAuthStore()
const token = auth.token
</script>

<style></style>