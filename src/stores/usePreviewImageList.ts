import { FileEntry } from '@tauri-apps/api/fs';
import { defineStore } from 'pinia';

export const usePreviewImageList = defineStore('previewImageList', () => {
  const images = ref<FileEntry[]>([]);
  
  function setImages(newImages: FileEntry[]) {
    images.value = newImages;
  }

  return { images, setImages };
});
