<template>
  <section class="main-content">
    <div class="main-content__control-bar">
      <card-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>
    <store-card-list
      v-if="!isPostsLoading"
      :cards="sortedCards"
      @deleteCard="handleDeleteCard"
    />
    <cards-preloader v-else>Загрузка товаров...</cards-preloader>
  </section>
</template>

<script>
import StoreCardList from '@/components/StoreCardList.vue';
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'main-content',
  components: { StoreCardList },
  mounted() {
    // мок подгрузки списка товаров
    this.setLoading(true);
    const mockFetchingData = () => {
      setTimeout(() => this.setLoading(false), 2000);
    };
    mockFetchingData();
  },
  computed: {
    ...mapState({
      sortOptions: (state) => state.sortOptions,
      selectedSort: (state) => state.selectedSort,
      isPostsLoading: (state) => state.isPostsLoading,
    }),
    ...mapGetters({
      sortedCards: 'sortCards',
    }),
  },
  methods: {
    ...mapMutations({
      setSelectedSort: 'setSelectedSort',
      deleteCard: 'deleteCard',
      setLoading: 'setLoading',
    }),
    handleDeleteCard(card) {
      this.deleteCard(card);
      this.$emit('deleteCard', 'deleteCard');
    },
  },
};

</script>

<style lang="scss" scoped>
.main-content {
  display: flex;
  flex-direction: column;

  // .main-content__control-bar

  &__control-bar {
    margin-bottom: 16px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
