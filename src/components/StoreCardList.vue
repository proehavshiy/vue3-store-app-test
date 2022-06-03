<template>
  <ul class="cards-wrapper">
    <store-card
      v-for="card in cards"
      :key="card.id"
      :card="card"
      @deleteCard="$emit('deleteCard', card.id)"
    />
  </ul>
</template>

<script>
import StoreCard from '@/components/StoreCard.vue';

export default {
  name: 'store-card-list',
  components: {
    StoreCard,
  },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
}
</style>
