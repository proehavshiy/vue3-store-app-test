<template>
  <section class="main-content">
    <card-select style="align-self: flex-end" />
    <ul class="cards-wrapper">
      <store-card />
    </ul>
  </section>
</template>

<script>
import StoreCard from '@/components/StoreCard.vue';
import CardSelect from './UI/CardSelect.vue';

export default {
  name: 'main-content',
  components: { StoreCard, CardSelect },
};
</script>

<style lang="scss">
.main-content {
  display: flex;
  flex-direction: column;
}
.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
}
</style>
