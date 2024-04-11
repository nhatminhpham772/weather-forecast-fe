<template>
    <LayoutHeader />
    <div class="h-auto">
      <slot />
    </div>
</template>

<script setup>
import { initModals } from "flowbite";
import { useAuthStore } from "@/stores/auth"

const dataAuth = useAuthStore();
dataAuth.getAccessToken()
dataAuth.getUserInfor()

onMounted(() => {
  initModals();
});
</script>

<style lang="scss" scoped>

</style>