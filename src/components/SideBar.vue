<template>
  <aside class="side-bar">
    <section-heading class="side-bar__heading">
      Добавление товара
    </section-heading>
    <form-for-cards class="side-bar__form" @createCard="handleCreateCard" />
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
  computed: {
  },
  methods: {
    ...mapMutations({
      addCard: 'addCard',
    }),
    handleCreateCard(card) {
      this.addCard(card);
      this.$emit('createCard', 'createCard');
    },
  },
};
</script>

<style lang="scss" scoped>
.side-bar {
  min-width: 332px;
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
