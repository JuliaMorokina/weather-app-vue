<script setup>
import { inject } from "vue";

import { activeIndexProvide } from "../../constants";

import Day from "./Day.vue";

const { list = [] } = defineProps({
  list: Array,
});

const activeIndex = inject(activeIndexProvide);
</script>

<template>
  <ul class="days">
    <Day
      v-for="(item, i) in list"
      :key="item.date_epoch"
      :is-active="activeIndex === i"
      v-bind="item"
      @click="activeIndex = i"
    />
  </ul>
</template>

<style scoped>
.days {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1px;

  margin: 80px 0 0;
  padding: 0;
  list-style: none;
}
</style>
