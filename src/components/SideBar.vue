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
      this.$emit('createCard', 'createCard');
    },
    toggleAsideBar(e) {
      console.log('hhh:', e.type);
      if (e.type === 'resize' || e.type === 'DOMContentLoaded') {
        console.log('inside:', e.type);
        console.log('e:', e);
        console.log('width:', e.target.innerWidth);
        if (e.target.innerWidth <= 1024) this.isAsideBarHide = true;
        // if (e.target.innerWidth > 1024) this.isAsideBarHide = false;
      } else {
        console.log('else:');
        this.isAsideBarHide = !this.isAsideBarHide;
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
    width: 300px;
  }

  // плавность открытия контента
  & > .side-bar__content {
    opacity: 1;
    transition: all 0.5s linear 0.3s;
  }

  &_closed {
    min-width: 0;
    width: 0;
    padding-right: 10px;

    // плавность скрытия контента
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
