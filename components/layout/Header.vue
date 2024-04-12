<template>
    <header class="antialiased bg-white">
        <nav class="bg-primary-black border-b-2 px-4 py-1 max-w-full">
            <div class="flex w-full justify-between items-center" aria-label="Global">
                <div class="flex justify-center items-center">
                    <a href="/">
                        <span class="sr-only">Weather Forecast</span>
                        <img class="h-14 w-auto" src="/logo.png" alt="" />
                    </a>
                    <span class="text-2xl text-gray-700 font-bold">Weather Forecast</span>
                </div>

                <div class="flex justify-end w-32">
                    <button :class="dataAuth.accessToken !== '' ? 'invisible': ''" id="popup-auth-btn" class="inline-flex items-center justify-center rounded-md p-3 text-gray-700"
                        data-modal-target="popup-auth" data-modal-toggle="popup-auth">
                        <span class="sr-only">User</span>
                        <UserIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                    <button v-if="dataAuth.accessToken !== ''" type="button" id="popup-notify-btn" class="inline-flex items-center justify-center rounded-md p-3 text-gray-700"
                        data-modal-target="popup-notify" data-modal-toggle="popup-notify">
                        <span class="sr-only">Notify</span>
                        <BellIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                    <button v-if="dataAuth.accessToken !== ''" @click="dataAuth.logout" type="button" class="inline-flex items-center justify-center rounded-md p-3 text-gray-700">
                        <span class="sr-only">Logout</span>
                        <ArrowRightEndOnRectangleIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import {
  UserIcon,
  BellIcon,
  ArrowRightEndOnRectangleIcon  
} from "@heroicons/vue/24/outline";

import { useAuthStore } from "@/stores/auth"

const dataAuth = useAuthStore();

onMounted(() => {
  const $buttonElementAuth = document.querySelector("#popup-auth-btn");
  const $modalElementAuth = document.querySelector("#popup-auth");
  const $closeButtonAuth = document.querySelector("#popup-auth-close");

  const modalOptionsAuth = {
    backdrop: 'static ',
    backdropClasses:
      "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
  };

  if ($modalElementAuth) {
    const modal = new Modal($modalElementAuth, modalOptionsAuth);
    $buttonElementAuth.addEventListener("click", () => modal.toggle());
    $closeButtonAuth.addEventListener("click", () => modal.hide());
  }

  const $buttonElementNotify = document.querySelector("#popup-notify-btn");
  const $modalElementNotify = document.querySelector("#popup-notify");
  const $closeButtonNotify = document.querySelector("#popup-notify-close");

  const modalOptionsNotify = {
    backdrop: 'static ',
    backdropClasses:
      "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
  };

  if ($modalElementNotify) {
    const modal = new Modal($modalElementNotify, modalOptionsNotify);
    $buttonElementNotify.addEventListener("click", () => modal.toggle());
    $closeButtonNotify.addEventListener("click", () => modal.hide());
  }
});
</script>

<style lang="scss" scoped>

</style>