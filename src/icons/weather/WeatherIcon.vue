<script setup>
import { computed } from "vue";

import CloudIcon from "./CloudIcon.vue";
import RainIcon from "./RainIcon.vue";
import SunIcon from "./SunIcon.vue";

const {
  iconCode,
  size = 54,
  variant = "light", // light | dark
} = defineProps({
  iconCode: Number,
  size: Number,
  variant: String,
});

const icon = computed(() => {
  switch (iconCode) {
    case 1000:
      return "sun";
    case 1003:
    case 1006:
    case 1009:
      return "cloud";

    default:
      return "rain";
  }
});
</script>

<template>
  <div
    :class="`icon icon-${variant}`"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <SunIcon v-if="icon === 'sun'" />
    <CloudIcon v-else-if="icon === 'cloud'" />
    <RainIcon v-else />
  </div>
</template>

<style scoped>
.icon svg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  color: inherit;
}
</style>
