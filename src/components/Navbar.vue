<script setup lang="ts">

</script>

<template>
  <nav class="bg-black bg-opacity-50 backdrop-blur-sm fixed w-full z-20 top-0 left-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
            <RouterLink class="hover:text-blue-800 transition" to="/">
              <img src="@/assets/images/Logo_no_wordmark.png" alt="Arasong Logo" class="h-12 w-auto drop-shadow-lg" />
            </RouterLink>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-8">
          <RouterLink class="hover:text-blue-800 transition" to="/">Home</RouterLink>
          <RouterLink class="hover:text-blue-800 transition" to="/about">About</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
