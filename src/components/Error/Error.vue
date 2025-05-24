<script setup>
import { computed } from "vue";
import { ERRORS } from "../../constants";

const { errorCode } = defineProps({
  errorCode: Number,
});

const errorText = computed(() => {
  return ERRORS[errorCode] || null;
});
</script>

<template>
  <div class="error">
    {{ errorText }}
  </div>
</template>

<style scoped>
.error {
  position: absolute;
  top: 0;
  right: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 404px;
  padding: 15px 0;
  background: var(--card-bg);
  border-radius: 0 0 25px 25px;
  font-size: 18px;
  font-weight: 400;
  color: var(--color-light);
}
</style>
