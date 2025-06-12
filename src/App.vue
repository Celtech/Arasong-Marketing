<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div id="app-main" class="text-white font-sans flex flex-col min-h-screen">
    <navbar />
    <RouterView />
    <Footer />
  </div>
</template>