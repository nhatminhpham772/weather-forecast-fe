<script setup>
import { toastStore } from "@/stores/toast";
const storeToast = toastStore();

function remove(index) {
  storeToast.remove(index);
}
</script>
<template>
  <TransitionGroup
    tag="div"
    enter-from-class="translate-x-full opacity-0"
    enter-active-class="duration-500"
    leave-active-class="duration-500"
    leave-to-class="translate-x-full opacity-0"
    class="fixed z-50 top-40 right-5 space-y-4 w-full max-w-xs"
  >
    <Toast
      v-for="(item, index) in storeToast.toasts"
      :key="item.key"
      :message="item.message"
      :status="item.toastStatus"
      @remove="remove(index)"
    />
  </TransitionGroup>
</template>