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
  <button
    class="hover:shadow-blue rounded border-0 bg-brand-blue-1 px-5 py-3 font-medium text-white"
  >
    {{ text }}
  </button>
</template>
