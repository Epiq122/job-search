<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'primary',
      validator: (value) => {
        return ['primary', 'secondary'].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
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
  @apply hover:bg-brand-blue-2 bg-transparent text-brand-blue-1 hover:text-white;
}
</style>
