<script setup>
import { computed, inject } from "vue";

import LocationIcon from "../../icons/LocationIcon.vue";
import WeatherIcon from "../../icons/weather/WeatherIcon.vue";
import { cityProvide } from "../../constants";

const { dayData } = defineProps({
  dayData: Object,
});

const city = inject(cityProvide);

const date = computed(() => {
  if (!dayData) return "-";
  return new Date(dayData.date)
    .toLocaleDateString("ru-Ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .trim()
    .replace("г.", "");
});

const day = computed(() => {
  if (!dayData) return "-";
  return new Date(dayData.date).toLocaleDateString("ru-Ru", {
    weekday: "long",
  });
});
</script>

<template>
  <div class="panel-left">
    <div class="panel-left__top">
      <div class="day">{{ day }}</div>
      <div class="date">{{ date }}</div>
      <div class="location">
        <LocationIcon :size="27" />
        <span>{{ city }}</span>
      </div>
    </div>
    <div class="panel-left__bottom">
      <WeatherIcon :icon-code="dayData?.day?.condition?.code ?? 0" :size="95" />
      <div class="temp">{{ dayData?.day?.avgtemp_c ?? "-" }} °C</div>
      <div>{{ dayData?.day?.condition?.text ?? "-" }}</div>
    </div>
  </div>
</template>

<style scoped>
.panel-left {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: -22px -70px;
  margin-right: 0;
  width: 50%;
  padding: 48px 32px 84px;
  background: url("../../assets/bgr.png") no-repeat center;
  border-radius: 30px;
}

.day {
  margin-bottom: 16px;
  font-size: 37px;
  font-weight: 700;
}

.day::first-letter {
  text-transform: uppercase;
}

.date {
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 500;
}

.location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 20px;
}

.panel-left__bottom {
  font-size: 30px;
  font-weight: 700;
}

.temp {
  margin: 9px 0 13px;
  font-size: 50px;
}
</style>
