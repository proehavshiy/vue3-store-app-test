<template>
  <section>
    <section-heading>Добавление товара</section-heading>
    <form-for-cards @createCard="addCard" />
  </section>
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
  },
};
</script>

<style lang="scss">
</style>
