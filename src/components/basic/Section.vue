<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <section class="pt-4">
    <div v-if="title" class="section-title">
      <div>{{ title }}</div>
      <slot name="actions"></slot>
    </div>
    <slot></slot>
  </section>
</template>

<style scoped>
.section-title {
  @apply flex justify-between px-0.5 pb-2 text-xs font-bold text-gray-400;
}
</style>
