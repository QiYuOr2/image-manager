<script setup lang="ts">
const props = defineProps<{
  title: string;
  path: string;
  active: boolean;
}>();

defineEmits<{
  (event: 'click'): void;
}>();

const IconClassNames = 'text-sm mr-1 text-gray-500';
const IconActiveClassNames = 'text-sm mr-1 text-indigo-600';

const exportIconClassName = computed(() => (props.active ? IconActiveClassNames : IconClassNames));
</script>

<template>
  <Card :class="['cursor-pointer mb-2.5 border-2', active ? 'border-indigo-600' : 'border-white']" @click="$emit('click')">
    <div class="px-2.5 flex items-center">
      <slot name="icon" :className="exportIconClassName">
        <i-mdi-folder-open-outline v-if="active" :class="[active ? IconActiveClassNames : IconClassNames]" />
        <i-mdi-folder-outline v-else :class="IconClassNames" />
      </slot>
      <span :class="[active ? `text-indigo-600 font-medium` : '']">{{ title }}</span>
    </div>
  </Card>
</template>
