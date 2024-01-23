<script>
export default {
  name: 'TheHeadline',
  data() {
    return {
      action: 'Build',
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        build: this.action === 'Build',
        create: this.action === 'Create',
        design: this.action === 'Design',
        code: this.action === 'Code',
      };
    },
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
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Epiq Careers</h2>
  </section>
</template>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
