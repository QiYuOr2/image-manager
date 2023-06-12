<script setup lang="ts">
import { convertFileSrc } from '@tauri-apps/api/tauri';
import { readDir, FileEntry } from '@tauri-apps/api/fs';
import { join } from '@tauri-apps/api/path';
import { RouteNames } from '../routes';
import { usePreviewImageList } from '../stores/usePreviewImageList';

const route = useRoute();

const images = ref<FileEntry[]>([]);

async function readImages(path: string) {
  const result = await readDir(path, { recursive: true });
  const reg = /\.(png|jpe?g|gif|webp|bmp)$/i;
  images.value = result.filter((item) => reg.test(item.path));
  for (const item of images.value) {
    item.path = await join(item.path);
  }
}

watch(
  () => route.query.path,
  (value) => {
    if (value && typeof value === 'string') {
      readImages(value);
    }
  },
  { immediate: true }
);

const store = usePreviewImageList();
const router = useRouter();

function toImageViewer(index: number) {
  const count = 5;
  let previewImages = [];

  if (index < count) {
    previewImages = images.value.slice(0, count * 2);
  } else if (index + count > images.value.length) {
    previewImages = images.value.slice(images.value.length - count * 2, images.value.length);
  } else {
    previewImages = images.value.slice(index - count, index + count);
  }

  store.setImages(previewImages);

  router.push({ name: RouteNames.ImageViewer });
}
</script>

<template>
  <div class="px-2 py-2 grid gap-1 grid-cols-5">
    <Image
      class="aspect-square bg-slate-950"
      v-for="(img, i) in images"
      :src="convertFileSrc(img.path)"
      :key="img.path"
      fit="object-cover"
      @click="toImageViewer(i)"
    />
  </div>
</template>
