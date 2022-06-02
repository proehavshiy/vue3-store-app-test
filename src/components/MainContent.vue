<template>
  <section class="main-content">
    <card-select style="align-self: flex-end" />
    <store-card-list :cards="cards" />
  </section>
</template>

<script>
import StoreCardList from '@/components/StoreCardList.vue';
import { mapState } from 'vuex';

export default {
  name: 'main-content',
  components: { StoreCardList },
  computed: {
    ...mapState({
      cards: (state) => state.cards,
    }),
  },
};

</script>

<style lang="scss">
.main-content {
  display: flex;
  flex-direction: column;
}
</style>
