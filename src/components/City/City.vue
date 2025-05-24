<script setup>
import { inject, ref } from "vue";

import LocationIcon from "../../icons/LocationIcon.vue";
import Button from "../Button/Button.vue";
import Input from "../Input/Input.vue";
import { cityProvide } from "../../constants";

const city = inject(cityProvide);
const inputValue = ref(city.value);
const isEdited = ref(false);

const changeEdited = () => {
  isEdited.value = true;
};

const select = () => {
  city.value = inputValue.value;
  isEdited.value = false;
};
</script>

<template>
  <div class="city">
    <div v-if="isEdited" class="form">
      <Input
        v-model="inputValue"
        placeholder="Введите город"
        @keyup.enter="select()"
      />
      <Button @click="select()">Сохранить</Button>
    </div>
    <Button v-else @click="changeEdited()">
      <LocationIcon />
      <span>Изменить город</span>
    </Button>
  </div>
</template>

<style scoped>
.city {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 70px;
}

.form {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
