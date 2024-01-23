<script>
import MainNav from '@/components/navigation/MainNav.vue';
import TheHero from '@/components/TheHero.vue';

export default {
  name: 'App',
  components: {
    MainNav,
    TheHero,
  },
};
</script>

<template>
  <main-nav />
  <the-hero />
</template>
