<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      profileImage: '/images/profile.jpeg',
    };
  },
};
</script>

<template><img class="h-8 w-8 rounded-3xl object-contain" :src="profileImage" /></template>
