<script setup lang="ts"></script>

<template>
  <div class="grid gap-4 grid-cols-4 px-5 py-4">
    <DataItem title="图片总数" :value="100" unit="张" />
    <DataItem title="占用空间" :value="100" unit="MB" />
    <DataItem title="文件夹数" :value="3" unit="个" />
    <DataItem title="标签数" :value="13" unit="个" />
  </div>
</template>
