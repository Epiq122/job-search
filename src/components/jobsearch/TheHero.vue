<script>
import TheHeadline from '@/components/jobsearch/TheHeadline.vue';
import JobSearchForm from '@/components/jobsearch/JobSearchForm.vue';
export default {
  name: 'TheHero',
  components: {
    TheHeadline,
    JobSearchForm,
  },
};
</script>

<template>
  <main>
    <section class="flex h-screen flex-col pb-20 pt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <the-headline />
          <job-search-form />
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img
            class="h-80 w-80 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            alt="vue logo"
          />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
  </main>
  ˆ
</template>
