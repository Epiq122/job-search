<script>
import ActionButton from '@/components/shared/ActionButton.vue';
import ProfileImage from '@/components/navigation/ProfileImage.vue';
import TheSubNav from '@/components/navigation/TheSubNav.vue';

export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    TheSubNav,
  },
  data() {
    return {
      navItems: ['Teams', 'Location', 'Life at Epiq Careers', 'How we hire', 'Students', 'Jobs'],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return this.isLoggedIn ? 'h-32' : 'h-16';
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>

<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="flex-no-wrap mx-auto flex h-full border-b border-solid border-brand-gray-1 px-8">
        <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-xl"
          >Epiq Careers</router-link
        >
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="navItem in navItems" :key="navItem" class="ml-9 h-full first:ml-0">
              <a href="/" class="flex h-full items-center py-2.5">{{ navItem }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign In" @click="loginUser" />
        </div>
      </div>
      <the-sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>
