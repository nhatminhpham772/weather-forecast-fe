import { defineStore } from "pinia";

export const toastStore = defineStore("toastStore", {
  state: () => ({
    toasts: ref<[]>([]),
  }),
  actions: {
    add(toast: { message: string; toastStatus: string }) {
      this.toasts.unshift({
        key: Symbol(),
        ...toast,
      });
    },
    remove(index: number) {
      this.toasts.splice(index, 1);
    },
  },
});
