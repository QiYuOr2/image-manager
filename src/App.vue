<script setup lang="ts"></script>

<template>
  <div class="h-full flex">
    <Sidebar class="w-48 h-full" />
    <main class="shadow-md w-full h-screen overflow-y-scroll">
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
