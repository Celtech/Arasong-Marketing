<script setup lang="ts">

</script>

<template>
  <footer class="relative bg-overlay text-gray-400 text-sm py-4">
    <div class="container mx-auto px-4 flex justify-between items-center relative">

      <!-- Left: Copyright -->
      <div class="z-10">
        © {{ new Date().getFullYear() }} Arasong. All rights reserved.
      </div>

      <!-- Center: Social Icons -->
      <div class="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
        <a href="https://x.com/playarasong" target="_blank" aria-label="Twitter / X" class="hover:text-white transition">
          <!-- Twitter SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 50 50">
            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
          </svg>
        </a>
        <a href="https://www.facebook.com/playarasong" target="_blank" aria-label="Facebook" class="hover:text-white transition">
          <!-- Facebook SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 50 50">
            <path d="M42,3H8C5.2,3,3,5.2,3,8v34c0,2.8,2.2,5,5,5h34c2.8,0,5-2.2,5-5V8C47,5.2,44.8,3,42,3z M37,19h-2c-2.1,0-3,0.5-3,2v3h5 l-1,5h-4v16h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
          </svg>
        </a>
        <a href="https://www.youtube.com/@playarasong" target="_blank" aria-label="YouTube" class="hover:text-white transition">
          <!-- Instagram SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 50 50">
            <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
          </svg>
        </a>
        <a href="https://discord.gg/BSKCYk9g4t" target="_blank" aria-label="Discord" class="hover:text-white transition">
          <!-- Discord SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M21,23l-4.378-3.406L17,21H3V3h18V23z M16.29,8.57c0,0-1.23-0.95-2.68-1.06l-0.3,0.61C12.86,8.04,12.4,7.98,12,7.98	c-0.41,0-0.88,0.06-1.31,0.14l-0.3-0.61C8.87,7.66,7.71,8.57,7.71,8.57s-1.37,1.98-1.6,5.84C7.49,15.99,9.59,16,9.59,16l0.43-0.58	c-0.44-0.15-0.82-0.35-1.21-0.65l0.09-0.24c0.72,0.33,1.65,0.53,3.1,0.53s2.38-0.2,3.1-0.53l0.09,0.24c-0.39,0.3-0.77,0.5-1.21,0.65	L14.41,16c0,0,2.1-0.01,3.48-1.59C17.66,10.55,16.29,8.57,16.29,8.57z M10,13.38c-0.52,0-0.94-0.53-0.94-1.18	c0-0.65,0.42-1.18,0.94-1.18s0.94,0.53,0.94,1.18C10.94,12.85,10.52,13.38,10,13.38z M14,13.38c-0.52,0-0.94-0.53-0.94-1.18	c0-0.65,0.42-1.18,0.94-1.18s0.94,0.53,0.94,1.18C14.94,12.85,14.52,13.38,14,13.38z"></path>
          </svg>
        </a>
      </div>

      <!-- Right: Links -->
      <div class="z-10 space-x-4">
        <RouterLink to="/terms-of-service" class="hover:text-white transition">Terms of Service</RouterLink>
        <RouterLink to="/privacy-policy" class="hover:text-white transition">Privacy Policy</RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
