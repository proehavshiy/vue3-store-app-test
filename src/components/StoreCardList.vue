<template>
  <ul class="cards" v-if="cards.length > 0">
    <transition-group name="card">
      <store-card
        v-for="card in cards"
        :key="card.id"
        :card="card"
        @deleteCard="$emit('deleteCard', card.id)"
      />
    </transition-group>
  </ul>
  <cards-preloader v-else>список товаров пуст</cards-preloader>
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
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(332px, 1fr));
  grid-gap: 16px;

  @media (max-width: $b1440) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

// transitions
.card-item {
  display: inline-block;
  margin-right: 10px;
}
.card-enter-active,
.card-leave-active {
  @include standartTransition(0.4);
}
.card-enter,
.card-enter-from,
.card-leave-to {
  opacity: 0;
}
.card-move {
  @include standartTransition(0.4);
}
</style>
