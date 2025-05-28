<template>
    <div class="app-layout">
        <header class="mb-4">
            <div class="py-4">
                <nav class="flex items-center gap-4">
                    <NuxtLink to="/">Главная</NuxtLink>
                    <NuxtLink to="/about">О нас</NuxtLink>
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