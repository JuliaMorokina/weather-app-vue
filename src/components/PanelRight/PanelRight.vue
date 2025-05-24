<script setup>
import { computed, inject } from "vue";

import City from "../City/City.vue";
import DaysList from "../DaysList/DaysList.vue";
import Stat from "../Stat/Stat.vue";
import { activeIndexProvide } from "../../constants";

const { data } = defineProps({
  data: Object,
});

const activeIndex = inject(activeIndexProvide);

const forecastdays = computed(() => {
  const { forecastday = [] } = data?.forecast || {};
  return forecastday;
});

const statData = computed(() => {
  if (!forecastdays.value) return [];
  const stat = forecastdays.value[activeIndex.value];

  return [
    {
      label: "Влажность",
      stat: `${stat.day.avghumidity}%`,
    },
    {
      label: "Вероятность дождя",
      stat: `${stat.day.daily_chance_of_rain}%`,
    },
    {
      label: "Ветер",
      stat: `${stat.day.maxwind_kph} км/ч`,
    },
  ];
});
</script>

<template>
  <div>
    <template v-if="data">
      <div class="stats">
        <Stat
          v-for="(item, index) in statData"
          :key="`stat-${index}`"
          v-bind="item"
        />
      </div>
      <DaysList :list="forecastdays" />
    </template>
    <City />
  </div>
</template>

<style scoped>
.stats {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
