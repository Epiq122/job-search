<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <button class="primary">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply hover:shadow-blue border-0 bg-brand-blue-1 text-white;
}
.secondary {
}
</style>
