<script setup lang="ts">
defineProps<{
  title: string;
  value: number | string;
  unit: string;
}>();
</script>

<template>
  <div class="flex flex-col mr-14 cursor-default">
    <div class="text-xs font-bold text-gray-500">{{ title }}</div>
    <div class="flex items-end">
      <div class="text-2xl font-bold mr-1">{{ value }}</div>
      <div class="text-sm text-gray-500 pb-0.5">{{ unit }}</div>
    </div>
  </div>
</template>
