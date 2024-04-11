<template>
  <div class="h-auto bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <ToastList />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import ToastList from "./components/toast/ToastList.vue";

onMounted(() => {
  const $body = document.body;
  $body.classList.add('scrollbar-hide');
  initFlowbite();
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>