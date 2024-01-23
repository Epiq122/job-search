<script>
export default {
  name: 'TheHeadline',
  data() {
    return {
      action: 'Build',
      interval: null,
    };
  },
  created() {
    this.changeTitle();
  },
  beforeUnMount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ['Build', 'Create', 'Design', 'Code'];
        const currentActionIndex = actions.indexOf(this.action);
        const nextActionIndex = (currentActionIndex + 1) % actions.length;
        this.action = actions[nextActionIndex];
      }, 3000);
    },
  },
};
</script>

<template>
  <section>
    <h1>{{ action }} for everyone</h1>
    <h2>Find your next job at Epiq Careers</h2>
  </section>
</template>
