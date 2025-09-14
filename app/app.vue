<script setup lang="ts">
const isDark = ref(false);

function toggleTheme() {
  isDark.value = !isDark.value;
  document.documentElement.setAttribute("data-theme", isDark.value ? "dark" : "light");
}

// Set initial theme based on user preference
onMounted(() => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  isDark.value = prefersDark;
  document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
});
</script>

<template>
  <div class="p-8">
    <div class="navbar bg-base-100 mb-8">
      <div class="flex-1">
        <h1 class="text-3xl font-bold">
          Travel Log
        </h1>
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost" @click="toggleTheme">
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
      </div>
    </div>

    <div class="space-y-4">
      <div class="alert alert-info">
        <span>DaisyUI is working! 🎉</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button class="btn btn-primary">
          <Icon name="tabler:map" size="16" />
          Primary
        </button>
      </div>
    </div>
  </div>
</template>
