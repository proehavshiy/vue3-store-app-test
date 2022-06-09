<template>
  <aside class="side-bar" :class="{ 'side-bar_closed': isAsideBarHide }">
    <div class="side-bar__content">
      <section-heading class="side-bar__heading">
        Добавление товара
      </section-heading>
      <form-for-cards class="side-bar__form" @createCard="handleCreateCard" />
    </div>
    <main-button
      class="side-bar__toggle-btn"
      :class="{ 'side-bar__toggle-btn_closed': isAsideBarHide }"
      @click="toggleAsideBar"
    />
  </aside>
</template>

<script>
import FormForCards from '@/components/FormForCards.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'side-bar',
  components: {
    FormForCards,
  },
  data() {
    return {
      isAsideBarHide: false,
    };
  },
  methods: {
    ...mapMutations({
      addCard: 'addCard',
    }),
    handleCreateCard(card) {
      this.addCard(card);
      this.toggleAsideBar(false);
      this.$emit('createCard', 'createCard');
    },
    // сворачивание/раскрытие aside
    toggleAsideBar(e) {
      const documentWidth = document.documentElement.clientWidth;
      if (e.type === 'resize' || e.type === 'DOMContentLoaded') {
        // изначальные положения aside в зависимости от текущего разрешения
        documentWidth <= 1024
          ? this.isAsideBarHide = true
          : this.isAsideBarHide = false;
      } else {
        // для вызова функции не по кнопке, а при сабмите формы
        // чтобы aside скрывался автоматически при размере экрана менее 1024
        if (documentWidth >= 1024) return;
        // просто клик по кнопке: скрывает/открывает aside
        this.isAsideBarHide = !this.isAsideBarHide;
        // на малых разрешениях допом эмитится эвент переключения грид-сетки в 1 колонку,
        // чтобы карточки уходили под aside
        if (documentWidth <= 768) this.$emit('toggleGrid');
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.toggleAsideBar);
    window.addEventListener('DOMContentLoaded', this.toggleAsideBar);
  },
  unmounted() {
    window.removeEventListener('resize', this.toggleAsideBar);
    window.removeEventListener('DOMContentLoaded', this.toggleAsideBar);
  },
};
</script>

<style lang="scss" scoped>
.side-bar {
  width: 332px;
  position: relative;
  top: 0;
  left: 0;
  transition: all 0.5s;

  @media (max-width: $b768) {
    width: 100%;
    z-index: 888;
  }

  // плавность открытия контента
  // иначе будет некрасиво бликовать
  & > .side-bar__content {
    opacity: 1;
    transition: all 0.5s linear 0.3s;
  }

  &_closed {
    width: 0;

    // плавность скрытия контента
    // иначе будет некрасиво бликовать
    & > .side-bar__content {
      opacity: 0;
      transition: all 0.1s ease;
    }
  }

  // side-bar__toggle-btn
  // кнопка скрытия-открытия сайдбара
  &__toggle-btn {
    display: none;
    width: 20px;
    height: 50px;
    border-radius: 10px;
    background-color: $textColorMain;

    background-image: url("~@/assets/img/arrow.svg");
    background-repeat: no-repeat;
    background-position: center;

    position: absolute;
    top: 100px;
    left: 100%;

    transform: translate(-50%);
    transition: transform 1s ease;
    @media (max-width: $b1024) {
      display: block;
    }

    &_closed {
      transform: translate(-50%) rotateY(180deg);
    }
  }

  // .side-bar__heading

  &__heading {
    margin-bottom: 16px;
  }

  // .side-bar__form

  &__form {
    padding: 24px;
    @include contentBlockPreset;
  }
}
</style>
