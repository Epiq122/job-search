<script>
export default {
  name: 'ActionButton',
  methods: {
    handleClick(event) {
      console.log(event);
    },
  },
};
</script>

<template>
  <button
    class="hover:shadow-blue rounded border-0 bg-brand-blue-1 px-5 py-3 font-medium text-white"
    @click="handleClick"
  >
    Sign In
  </button>
</template>
