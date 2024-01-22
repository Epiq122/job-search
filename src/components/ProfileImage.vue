<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      profileImage: '@/images/profile.jpg',
    };
  },
};
</script>

<template><img class="h-8 w-8 rounded-3xl object-contain" :src="profileImage" /></template>
