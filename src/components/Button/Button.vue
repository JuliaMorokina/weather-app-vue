<script setup></script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  height: 53px;
  padding: 10px 14px;
  background: var(--gradient-hor);
  color: var(--color-light);
  border-radius: 10px;
  border: none;
  font-family: var(--font);
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.button:hover {
  background: var(--gradient-hor-reverse);
}
</style>
