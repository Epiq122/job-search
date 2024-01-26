<script>
import MainNav from '@/components/navigation/MainNav.vue';
export default {
  name: 'App',
  components: {
    MainNav,
  },
};
</script>

<template>
  <main-nav />
  <router-view />
</template>
