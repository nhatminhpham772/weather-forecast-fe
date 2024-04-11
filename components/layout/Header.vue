<template>
    <header class="antialiased bg-white">
        <nav class="bg-primary-black border-b-2 px-4 py-1 max-w-full">
            <div class="flex w-full justify-between items-center" aria-label="Global">
                <div class="flex items-center justify-between w-full lg:hidden">
                    <div class="flex">
                        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        @click="mobileMenuOpen = true">
                            <span class="sr-only">Open main menu</span>
                            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                        </button>
                        <button type="button" data-modal-target="popup-search" data-modal-toggle="popup-search"
                        class="-m-2.5 ml-3 inline-flex items-center justify-center rounded-md p-2.5 text-white">
                            <span class="sr-only">Search</span>
                            <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="flex">
                        <a href="/">
                        <span class="sr-only">Weather Forecast</span>
                        <img class="h-10 my-2 md:h-[56px] md:my-3 w-auto" src="/logo.png" alt="" />
                        </a>
                    </div>
                </div>

                <div class="lg:flex lg:justify-center lg:items-center hidden">
                    <a href="/">
                        <span class="sr-only">Weather Forecast</span>
                        <img class="h-14 w-auto" src="/logo.png" alt="" />
                    </a>
                    <span class="text-2xl text-gray-700 font-bold">Weather Forecast</span>
                </div>

                <div class="hidden lg:flex lg:justify-end w-32">
                    <button type="button" data-modal-target="popup-search" data-modal-toggle="popup-search"
                        class="inline-flex items-center justify-center rounded-md p-3">
                        <span class="sr-only">Location</span>
                        <MagnifyingGlassIcon class="h-6 w-6 text-gray-700" aria-hidden="true" />
                    </button>
                    <button type="button" class="inline-flex items-center justify-center rounded-md p-3 text-gray-700"
                        id="multiLevelDropdownButton" data-dropdown-toggle="dropdown">
                        <span class="sr-only">User</span>
                        <UserIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div id="dropdown"
                        class="z-10 hidden bg-primary-black overflow-hidden divide-y divide-gray-100 rounded-lg shadow shadow-gray-700 w-44 dark:bg-gray-700">
                        <ul class="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                        <li>
                            <a href="/auth" class="block px-4 py-2 hover:bg-gray-900">Đăng nhập ngay</a>
                        </li>
                        <li>
                            <a href="/orders" class="block px-5 py-3 hover:bg-gray-900">Đơn hàng</a>
                        </li>
                        <li>
                            <a class="block px-5 py-3 hover:bg-gray-900">Đăng xuất</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <!-- <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <DialogPanel
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary-black px-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between w-full mt-1 lg:hidden">
                    <div class="flex mr-[22px]">
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-white" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="flex ml-6">
                        <a href="/">
                        <span class="sr-only">Weather Forecast</span>
                        <img class="h-10 my-2 w-auto" src="/logo.png" alt="" />
                        </a>
                    </div>
                </div> -->
                <!-- <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                    <div v-for="category in dataCategory.categories" :key="category">
                        <a :href="'/categories/' + category.slug"
                        class="my-3 font-normal text-[14px] leading-3 tracking-widest text-white" v-if="category.parent === '' &&
                            category.subCategories.length === 0
                            ">{{ category.name }}</a>
                        <Disclosure as="div" class="-mx-3" v-slot="{ open }" v-if="category.subCategories.length > 0">
                        <DisclosureButton
                            class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-900">
                            <a :href="'/categories/' + category.slug"
                            class="py-1 font-normal text-[14px] leading-3 tracking-widest text-white">{{ category.name }}</a>
                            <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                        </DisclosureButton>
                        <DisclosurePanel class="mt-2 space-y-2">
                            <DisclosureButton v-for="item in category.subCategories" :key="item.name" as="a"
                            :href="'/categories/' + item.slug"
                            class="block rounded-lg py-2 pl-6 pr-3 font-normal text-[14px] leading-3 tracking-widest text-white">
                            {{ item.name }}</DisclosureButton>
                        </DisclosurePanel>
                        </Disclosure>
                    </div>
                    </div>
                    <div class="py-6">
                    <a href="/orders"
                        class="-mx-3 block rounded-lg px-3 py-2.5 font-normal text-[14px] leading-3 tracking-widest text-white"
                        v-if="isAuth != null">Đơn Hàng</a>
                    <a v-on:click="logout"
                        class="-mx-3 mt-3 block rounded-lg px-3 py-2.5 font-normal text-[14px] leading-3 tracking-widest text-white"
                        v-if="isAuth != null">Đăng xuất</a>
                    </div>
                </div>
                </div> -->
            <!-- </DialogPanel>
        </Dialog> -->
    </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  MagnifyingGlassIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";

const mobileMenuOpen = ref(false);

</script>

<style lang="scss" scoped>

</style>