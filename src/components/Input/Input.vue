<script setup>
const inputModel = defineModel({ type: String, required: true });
</script>

<template>
  <input v-model="inputModel" v-focus class="input" type="text" />
</template>

<style scoped>
.input {
  min-width: 260px;
  height: 53px;
  padding: 15px 18px;
  border: none;
  border-radius: 10px;
  background-color: var(--card-bg);
  box-shadow: var(--shadow);
  color: var(--color-light);
  font-size: 18px;
  font-weight: 400;
}

.input::placeholder {
  color: var(--color-grey);
}
</style>
