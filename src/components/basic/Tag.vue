<script setup lang="ts">
defineProps<{
  value: string;
}>();
</script>

<template>
  <div class="inline-block py-1 px-2 bg-gray-200 rounded-md text-xs cursor-pointer">#{{ value }}</div>
</template>
