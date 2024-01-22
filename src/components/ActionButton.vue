<script>
export default {
  name: 'ActionButton',
  methods: {
    handleClick() {
      console.log('Sign In');
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
