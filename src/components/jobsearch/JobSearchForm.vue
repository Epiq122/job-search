<script>
import ActionButton from '@/components/shared/ActionButton.vue';
import TextInput from '@/components/shared/TextInput.vue';
export default {
  name: 'JobSearchForm',
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: '',
      location: '',
    };
  },
  methods: {
    updateRole(role) {
      this.role = role;
    },
    updateLocation(location) {
      this.location = location;
    },
  },
};
</script>

<template>
  <form
    class="3xl flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
  >
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="ml-4 mr-3" />
    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label class="absolute -top-10 left-0">Role</label>
        <text-input v-model="role" placeholder="Software Engineer" />
      </div>
      <span
        class="flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
        >in</span
      >
      <div class="relative flex h-full flex-1 items-center pl-3">
        <label class="absolute -top-10 left-0">Where?</label>
        <text-input v-model="location" placeholder="Vancouver" />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>
