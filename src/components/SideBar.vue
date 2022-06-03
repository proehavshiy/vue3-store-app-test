<template>
  <section>
    <section-heading>Добавление товара</section-heading>
    <form-for-cards></form-for-cards>
  </section>
</template>

<script>
import FormForCards from '@/components/FormForCards.vue';

export default {
  name: 'side-bar',
  components: {
    FormForCards,
  },
};
</script>

<style lang="scss">
</style>
