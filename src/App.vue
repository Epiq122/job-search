<script>
export default {
  name: 'App',
};
</script>

<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="jobs/results">Job Results</router-link>
  </div>
  <router-view />
</template>
