<script setup>
import { ref } from 'vue';

const email = ref('');
const loading = ref(false);
const submitted = ref(false);
const emailError = ref(false);

function isValidEmail(email) {
  // Simple but solid regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

async function handleSubmit() {
  emailError.value = false;

  if (!isValidEmail(email.value)) {
    emailError.value = true;
    return;
  }

  try {
    loading.value = true;
    const res = await fetch('/api/mailer/route', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value }),
    });

    const data = await res.json();

    if (!res.ok) {
      loading.value = false;
      throw new Error(data.error || 'Subscription failed');
    } else {
      submitted.value = true;
    }

    return { success: true, data };
  } catch (error) {
    loading.value = false;
    return { success: false, error: error.message };
  }
}
</script>

<template>
  <main class="bg-overlay flex-grow flex items-center justify-center px-4 py-12">
    <div class="text-center max-w-2xl">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
        Enter Arasong Before the World Awakens
      </h1>
      <p class="text-lg sm:text-xl text-gray-300 mb-8">
        Arasong calls to those bold enough to carve their legend in a land of dying empires, hunted sorcerers, and hungry gods.
        Join the playtest and help shape the next great saga in tabletop storytelling.
      </p>

      <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row items-start justify-center gap-4" v-if="!submitted" novalidate>
        <div class="w-full sm:w-auto">
          <input
              type="email"
              placeholder="Your email address"
              v-model="email"
              :class="[
              'px-4 py-3 w-full md:w-80 rounded-md text-black bg-white focus:outline-none',
              emailError ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-blue-800'
            ]"
              required
          />
          <p v-if="emailError" class="text-red-400 text-sm mt-1">Please enter a valid email address.</p>
        </div>

        <button
            type="submit"
            class="bg-blue-800 w-full sm:w-auto hover:bg-blue-900 transition px-6 py-3 rounded-md font-semibold shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed align-top"
            :disabled="loading"
        >
          <svg v-if="loading" aria-hidden="true" role="status" class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539..." fill="#1C64F2"/>
          </svg>
          Join the Playtest
        </button>
      </form>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4" v-else>
        You're signed up, we'll be in touch soon!
      </div>

      <p class="text-sm text-gray-400 mt-4 italic">
        No spam. Just secrets, summons, and your shot at legend.
      </p>
    </div>
  </main>
</template>
