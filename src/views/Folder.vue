<script setup lang="ts">
import { convertFileSrc } from '@tauri-apps/api/tauri';
import { readDir, FileEntry } from '@tauri-apps/api/fs';
import { join } from '@tauri-apps/api/path';

const route = useRoute();

const images = ref<FileEntry[]>([]);

const readImages = async (path: string) => {
  const result = await readDir(path, { recursive: true });
  const reg = /\.(png|jpe?g|gif|webp|bmp)$/i;
  images.value = result.filter((item) => reg.test(item.path));
  for (const item of images.value) {
    item.path = await join(item.path);
  }
};

watch(
  () => route.query.path,
  (value) => {
    if (value && typeof value === 'string') {
      readImages(value);
    }
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <div class="px-5 py-4 flex flex-wrap">
    <img class="w-24 h-24 object-contain" v-for="img in images" :src="convertFileSrc(img.path)" :key="img.path" />
  </div>
</template>
