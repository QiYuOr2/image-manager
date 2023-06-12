import { defineStore } from 'pinia';
import { Folder } from '../types';

export const useFolderList = defineStore('folderList', () => {
  const folders = ref<Folder[]>([
    { path: '/Users/xmy/Downloads', name: 'Downloads' },
    {
      path: '/Users/xmy/Library/Mobile Documents/com~apple~CloudDocs/Documents/壁纸',
      name: '壁纸',
    },
  ]);

  return { folders };
});
