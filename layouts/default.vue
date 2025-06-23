<script setup lang="ts">
const colorMode = useColorMode()

function toggleColor() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="app-layout">
    <header class="mb-4">
      <div class="py-4">
        <nav class="flex items-center gap-4">
          <NuxtLink to="/">
            Главная
          </NuxtLink>
          <NuxtLink to="/">
            О нас
          </NuxtLink>
          <UButton @click="toggleColor">
            {{ colorMode.preference === 'dark' ? '🌞 Light' : '🌙 Dark' }}
          </UButton>
        </nav>
      </div>
    </header>

    <slot />

    <footer class="mt-auto">
      <div class="py-4">
        &copy; 2024 Булат и Виталий
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
