<script setup lang="ts">
import { buildImageSrc } from '@/common/utils';
import { BreadCrumbItem } from '@/common/interfaces';

defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
});

const route = useRoute();

// Breadcrumbs
const routeList = computed(() => {
  const currentRoute = route.name;
  const result: BreadCrumbItem[] = [
    { label: 'Inicio', src: '/', isCurrentRoute: false },
  ];
  // Add child routes
  route.matched.forEach((r) => {
    result.push({
      label: r.name?.toString() || '',
      src: r.path,
      isCurrentRoute: r.name === currentRoute,
    })
  });
  
  return result;
});
</script>

<template>
  <div
    class="page-header flex items-center"
    :style="{ background }"
  >
    <div class="header-content">
      <h2 class="section-title">{{ title }}</h2>

      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <template
          v-for="(route, index) in routeList"
          :key="index"
        >
          <a
            :class="{ 'active': route.isCurrentRoute }"
            class="breadcrumb-item"
            :href="route.src"
          >
            {{ route.label }}
          </a>
          <i-mdi-chevron-right
            v-if="index + 1 !== routeList.length"
            class="separator"
          />
        </template>
      </div>
    </div>

    <img
      :src="buildImageSrc(image)"
      alt="Header image"
      class="hidden w-1/2 xl:block"
    >
  </div>
</template>

<style scoped>
.header-content {
  @apply text-white w-full px-5 py-8;
  @apply xl:w-1/2 xl:px-28 xl:py-10;
}

.section-title {
  @apply text-left mb-6 xl:mb-8;
}

.breadcrumbs {
  @apply inline-flex items-center bg-white/20 rounded-full;
}

.breadcrumb-item {
  @apply px-3 pt-1 pb-0.5 leading-6 font-light text-sm ;
  @apply xl:px-5 xl:pt-2 xl:pb-1 xl:text-lg xl:leading-8;
}

.active {
  @apply font-bold bg-white/40 rounded-full;
}

.separator {
  @apply text-lg mr-2;
  @apply xl:text-2xl xl:mr-3;
}
</style>