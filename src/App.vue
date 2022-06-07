<template>
  <main class="main">
    <side-bar @createCard="showModalInfo"></side-bar>
    <main-content @deleteCard="showModalInfo"></main-content>
    <modal-info v-model:visibility="modalStatus">
      <div>{{ this.modalPhrase }}</div>
    </modal-info>
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
  data() {
    return {
      modalStatus: false,
      modalPhrase: '',
    };
  },
  methods: {
    showModalInfo(action) {
      switch (action) {
        case 'deleteCard':
          this.modalPhrase = 'Товар удален';
          break;
        case 'createCard':
          this.modalPhrase = 'Товар успешно добавлен!';
          break;
        default:
          this.modalPhrase = 'hello';
      }
      this.modalStatus = true;
    },
  },
};
</script>

<style lang="scss">
.main {
  padding: 32px;
  display: grid;
  grid-template-columns: 332px 1fr;
  grid-gap: 16px;
}
</style>
