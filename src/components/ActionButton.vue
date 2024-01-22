<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      primary: true,
    };
  },
  computed: {
    buttonClass() {
      return {
        primary: this.primary,
        secondary: !this.primary,
      };
    },
  },
};
</script>

<template>
  <button :class="buttonClass">
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
