<template>
  <!-- Hero / Origin Story -->
  <section class="pt-28 pb-20 bg-gray-800 bg-opacity-60 text-center px-6">
    <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Our Story</h1>
    <p class="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
      Arasong was born around a flickering campfire, where three lifelong friends dreamt of creating worlds as rich as their favorite novels and RPGs.
      Tired of predictable stories and disconnected mechanics, we set out to build a game where narrative, choice, and consequence shape every moment.
      What started as scribbles on napkins has grown into a passionate studio redefining tabletop storytelling.
    </p>
  </section>

  <!-- Team Section -->
  <section class="py-20 bg-gray-900 px-6">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Meet the Team</h2>
    <div class="max-w-6xl mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <!-- Member 1 -->
      <div class="text-center">
        <picture>
          <source srcset="@/assets/images/headshots/blank-avatar.avif" type="image/avif" />
          <source srcset="@/assets/images/headshots/blank-avatar.webp" type="image/webp" />
          <img src="@/assets/images/headshots/blank-avatar.jpg" alt="Team member" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary shadow-md" />
        </picture>
        <h3 class="text-xl font-semibold">Zebulon Albers</h3>
        <p class="text-primary mb-2">Founder & Creative Director</p>
        <p class="text-gray-400 text-sm">Lore weaver, campaign architect, and part-time chaos goblin. Zeb makes sure the world of Arasong feels lived-in and alive.</p>
      </div>

      <!-- Member 2 -->
      <div class="text-center">
        <picture>
          <source srcset="@/assets/images/headshots/blank-avatar.avif" type="image/avif" />
          <source srcset="@/assets/images/headshots/blank-avatar.webp" type="image/webp" />
          <img src="@/assets/images/headshots/blank-avatar.jpg" alt="Team member" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary shadow-md" />
        </picture>
        <h3 class="text-xl font-semibold">Sheldon Jorgenson</h3>
        <p class="text-primary mb-2">Co-Founder & Game Designer</p>
        <p class="text-gray-400 text-sm">Sheldon builds the bones of the game—balancing mechanics, creating tools, and ensuring every decision has impact.</p>
      </div>

      <!-- Member 3 -->
      <div class="text-center">
        <picture>
          <source srcset="@/assets/images/headshots/Tyco.avif" type="image/avif" />
          <source srcset="@/assets/images/headshots/Tyco.webp" type="image/webp" />
          <img src="@/assets/images/headshots/Tyco.jpg" alt="Team member" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary shadow-md" />
        </picture>
        <h3 class="text-xl font-semibold">Ty Colley</h3>
        <p class="text-primary mb-2">Business Development & Growth Specialist</p>
        <p class="text-gray-400 text-sm">Ty keeps the digital world smooth, listening to players, and helping the Arasong adventure grow—so every click and roll feels just right.</p>
      </div>

      <div class="text-center">
        <picture>
          <source srcset="@/assets/images/headshots/tim.avif" type="image/avif" />
          <source srcset="@/assets/images/headshots/tim.webp" type="image/webp" />
          <img src="@/assets/images/headshots/tim.jpg" alt="Team member" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary shadow-md" />
        </picture>
        <h3 class="text-xl font-semibold">Tim Hinz</h3>
        <p class="text-primary mb-2">Tech Lead & Business Development</p>
        <p class="text-gray-400 text-sm">Tim's code and conversation guides the tech stack while forging partnerships to keep the dream funded and thriving.</p>
      </div>

      <div class="text-center">
        <picture>
          <source srcset="@/assets/images/headshots/joey.avif" type="image/avif" />
          <source srcset="@/assets/images/headshots/joey.webp" type="image/webp" />
          <img src="@/assets/images/headshots/joey.jpg" alt="Team member" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary shadow-md" />
        </picture>
        <h3 class="text-xl font-semibold">Joey Rebne</h3>
        <p class="text-primary mb-2">Web Design & Development</p>
        <p class="text-gray-400 text-sm">Joey crafts immersive digital experiences with clean code and bold UI—bringing the Arasong world online with flair and function.</p>
      </div>
    </div>
  </section>
</template>

