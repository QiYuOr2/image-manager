<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string;
    alt?: string;
    lazy?: boolean;
    fit?: string;
  }>(),
  {
    lazy: true,
  }
);

const isLoaded = ref(false);
const selfSrc = ref('');

onMounted(() => {
  if (!props.lazy) {
    selfSrc.value = props.src;
  } else {
    createObserver();
  }
});

const imageContainer = ref<HTMLDivElement>();
function createObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        selfSrc.value = props.src;
        observer.unobserve(imageContainer.value!);
      }
    });
  });

  observer.observe(imageContainer.value!);
}

function onImageLoaded() {
  isLoaded.value = true;
}
</script>

<template>
  <div ref="imageContainer" class="relative cursor-pointer transition-all hover:scale-125 hover:z-50">
    <img v-if="selfSrc" :class="['w-full h-full bg-gray-950', fit]" :src="selfSrc" :alt="alt" @load="onImageLoaded" />
    <div class="bg-gray-100 absolute inset-0 z-10" v-if="!isLoaded"></div>
  </div>
</template>
