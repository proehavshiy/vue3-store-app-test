<template>
  <main class="main">
    <side-bar></side-bar>
    <main-content></main-content>
  </main>
</template>

<script>
import MainContent from '@/components/MainContent.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  components: {
    SideBar,
    MainContent,
  },
};
</script>

<style lang="scss">
</style>
