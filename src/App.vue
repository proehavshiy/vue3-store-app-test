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
@import "@/assets/styles/styles";

.main {
  padding: 32px;
  display: grid;
  grid-template-columns: 332px 1fr;
  grid-gap: 16px;
}
</style>
