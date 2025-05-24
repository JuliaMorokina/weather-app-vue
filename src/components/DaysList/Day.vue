<script setup>
import { computed } from "vue";
import WeatherIcon from "../../icons/weather/WeatherIcon.vue";

const {
  date = new Date(),
  day,
  isActive,
} = defineProps({
  day: Object,
  date: String,
  isActive: Boolean,
});

const dayName = computed(() => {
  return new Date(date).toLocaleDateString("ru-Ru", { weekday: "short" });
});
</script>

<template>
  <li class="day">
    <button class="day-btn" :class="{ 'day-btn__active': isActive }">
      <WeatherIcon :icon-code="day.condition.code" />
      <div class="day-name">{{ dayName }}</div>
      <div class="day-temp">{{ day.avgtemp_c }} °C</div>
    </button>
  </li>
</template>

<style scoped>
.day-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;

  width: 100%;
  height: 100%;
  padding: 15px 20px 20px;
  background-color: var(--card-bg);
  border-radius: 10px;
  border: none;
  color: var(--color-light);
  font-size: 20px;
  box-shadow: var(--shadow);
  cursor: pointer;
}

.day-btn:not(.day-btn__active):hover {
  background: var(--card-bg-hover);
}

.day-btn__active {
  background-color: var(--color-light);
  color: var(--color-dark);
}

.day-btn__active:hover {
  opacity: 0.8;
}

.day-name {
  font-weight: 400;
}

.day-name::first-letter {
  text-transform: uppercase;
}

.day-temp {
  font-weight: 700;
}
</style>
