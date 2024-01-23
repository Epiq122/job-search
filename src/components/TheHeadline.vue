<script>
export default {
  name: 'TheHeadline',
  data() {
    return {
      sample: 'Build for everyone',
    };
  },
  created() {
    console.log('TheHeadline.vue created', this.sample);
  },
};
</script>

<template>
  <section>
    <h1>Build for everyone</h1>
    <h2>Find your next job at Epiq Careers</h2>
  </section>
</template>
