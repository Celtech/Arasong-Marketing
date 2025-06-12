<script setup>
import { ref } from 'vue';

const email = ref('');
const loading = ref(false);
const submitted = ref(false);

async function handleSubmit() {
  try {
    loading.value = true;
    const emailAddy = email.value;
    const res = await fetch('/api/mailer/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailAddy }),
    });

    const data = await res.json();

    if (!res.ok) {
      loading.value = false;
      throw new Error(data.error || 'Subscription failed');
    }else{
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
      <!-- Headline and copy -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
        Enter Arasong Before the World Awakens
      </h1>
      <p class="text-lg sm:text-xl text-gray-300 mb-8">
        Arasong calls to those bold enough to carve their legend in a land of dying empires, hunted sorcerers, and hungry gods.
        Join the playtest and help shape the next great saga in tabletop storytelling.
      </p>

      <!-- Signup form -->
      <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row items-center justify-center gap-4" v-if="!submitted">
        <input
            type="email"
            placeholder="Your email address"
            v-model="email"
            required
            class="px-4 py-3 w-full md:w-80 sm:w-auto rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-800 bg-white"
        />
        <button
            type="submit"
            class="bg-blue-800 w-full sm:w-auto hover:bg-blue-900 transition px-6 py-3 rounded-md font-semibold shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
            :disabled="loading"
        >
          Join the Playtest
        </button>
      </form>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4" v-else>
        You're signed up, we'll be in touch soon!
      </div>

      <!-- Footer note -->
      <p class="text-sm text-gray-400 mt-4 italic">
        No spam. Just secrets, summons, and your shot at legend.
      </p>
    </div>
  </main>
</template>
