<script setup>
import { onMounted, provide, ref, watch } from "vue";

import Error from "./components/Error/Error.vue";
import PanelLeft from "./components/PanelLeft/PanelLeft.vue";
import PanelRight from "./components/PanelRight/PanelRight.vue";
import { activeIndexProvide, API_ENDPOINT, cityProvide } from "./constants";

const data = ref();
const errorStatusCode = ref();
const activeIndex = ref(0);
const city = ref("Moscow");

provide(activeIndexProvide, activeIndex);
provide(cityProvide, city);

const getCity = async (city) => {
  const params = new URLSearchParams({
    q: city,
    lang: "ru",
    key: "15a1eb60d3d4448fa7691112252205",
    days: 4,
  });

  const res = await fetch(`${API_ENDPOINT}/forecast.json?${params.toString()}`);

  if (res.status !== 200) {
    errorStatusCode.value = res.status;
    data.value = null;
    return;
  }

  errorStatusCode.value = null;
  data.value = await res.json();
};

watch(city, () => getCity(city.value));
onMounted(() => getCity(city.value));
</script>

<template>
  <main class="panel">
    <Error v-if="errorStatusCode" :error-code="errorStatusCode" />
    <PanelLeft :day-data="data ? data.forecast.forecastday[activeIndex] : {}" />
    <PanelRight :data />
  </main>
</template>

<style scoped>
.panel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 60px;
  width: 944px;
  height: 623px;
  margin-left: 70px;
  padding: 55px 50px;
  padding-left: 45%;
  border-radius: 25px;
  background-color: var(--color-bg);
}

.stats {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
