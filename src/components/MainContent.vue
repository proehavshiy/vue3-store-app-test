<template>
  <section class="main-content">
    <card-select
      :model-value="selectedSort"
      @update:model-value="setSelectedSort"
      :options="sortOptions"
      style="align-self: flex-end"
    />
    <store-card-list :cards="cards" />
  </section>
</template>

<script>
import StoreCardList from '@/components/StoreCardList.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'main-content',
  components: { StoreCardList },
  computed: {
    ...mapState({
      cards: (state) => state.cards,
      sortOptions: (state) => state.sortOptions,
      selectedSort: (state) => state.selectedSort,
    }),
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapMutations({
      setSelectedSort: 'setSelectedSort',
    }),
    // ...mapMutations({
    //   setPage: "post/setPage",
    //   setSearchQuery: "post/setSearchQuery",
    //   setSelectedSort: "post/setSelectedSort",
    // }),
  },
};

</script>

<style lang="scss">
.main-content {
  display: flex;
  flex-direction: column;
}
</style>
