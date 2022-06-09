<template>
  <main class="main" :class="{ main_collapsed: !gridColumns }">
    <side-bar @createCard="showModalInfo" @toggleGrid="toggleGrid" />
    <main-content @deleteCard="showModalInfo" />
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
      gridColumns: true,
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
          this.modalPhrase = 'Событие произошло';
      }
      this.modalStatus = true;
    },
    toggleGrid() {
      this.gridColumns
        ? this.gridColumns = !this.gridColumns
        : (
        // задержка нужна, чтобы карточки не "прыгали вверх" рвано на свое прежнее место
        // после сворачивания aside с формой при экране < 768
          setTimeout(() => {
            this.gridColumns = !this.gridColumns;
          }, 500)
        );
    },
  },
};
</script>

<style lang="scss">
.main {
  padding: 32px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 16px;
  position: relative;

  @media (max-width: $b768) {
    grid-gap: 16px 0;
  }

  // main_collapsed
  &_collapsed {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
}
</style>
