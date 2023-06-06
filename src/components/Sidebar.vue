<script setup lang="ts">
import { open } from '@tauri-apps/api/dialog';
import { homeDir } from '@tauri-apps/api/path';
import { metadata } from 'tauri-plugin-fs-extra-api';
import { RouteNames } from '../routes';

const searchKey = ref('');
const search = () => {
  console.log(searchKey.value);
};

interface Item {
  id: string;
  path: string;
  name: string;
  view: string;
}

const overviewList = [{ id: 'overview', name: '概览', path: 'overview', view: RouteNames.Overview }];

const folderList = [
  { id: 'folder01', name: '文件夹1', path: '1', view: RouteNames.Folder },
  { id: 'folder02', name: '文件夹2', path: '2', view: RouteNames.Folder },
];

const openFolder = async () => {
  const selected = await open({
    directory: true,
    multiple: false,
    defaultPath: await homeDir(),
  });
  
  if (typeof selected === 'string') {
    console.log(await metadata(selected));
  }
};

const router = useRouter();

const currentOpenFolder = ref('overview');
const setCurrentOpenFolder = (item: Item) => {
  currentOpenFolder.value = item.id;
  router.push({ name: item.view });
};
</script>

<template>
  <div class="h-full px-2.5 py-3 bg-gray-100">
    <!-- 搜索 -->
    <Input v-model="searchKey" placeholder="搜索" @enter="search" />
    <!-- 概览区 -->
    <Section>
      <FolderItem
        v-for="(item, i) in overviewList"
        :key="i"
        :active="currentOpenFolder === item.id"
        :title="item.name"
        :path="item.path"
        @click="setCurrentOpenFolder(item)"
      >
        <template #icon="{ className }">
          <i-mdi-view-dashboard-outline :class="className" />
        </template>
      </FolderItem>
    </Section>
    <!-- 置顶的文件夹列表 -->
    <!-- 文件夹列表 -->
    <Section title="文件夹">
      <template #actions>
        <i-mdi-plus class="cursor-pointer" @click="openFolder" />
      </template>
      <FolderItem
        v-for="(folder, i) in folderList"
        :key="i"
        :active="currentOpenFolder === folder.id"
        :title="folder.name"
        :path="folder.path"
        @click="setCurrentOpenFolder(folder)"
      />
    </Section>
    <!-- 标签列表 -->
    <Section title="标签">
      <Tag value="测试" />
    </Section>
  </div>
</template>

<style scoped></style>
