import { defineStore } from 'pinia';

export interface Folder {
  path: string;
}

export const useFolderList = defineStore('folderList', () => {
  const folders = ref<Folder[]>([{ path: '/Users/xmy/Downloads' }]);

  return reactive({ folders });
});
