<template>
  <li class="card">
    <img :src="card.image" alt="card image" class="card__img" />
    <div class="card__content">
      <h3 class="card__heading">{{ card.title }}</h3>
      <p class="card__text">
        {{ card.body }}
      </p>
      <div class="card__price">{{ card.price }} руб.</div>
    </div>
    <main-button class="card__btn" @click="$emit('deleteCard')"></main-button>
  </li>
</template>

<script>

export default {
  name: 'store-card',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.card {
  max-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // width: 332px;
  height: 423px;
  border: 1px solid red;
  position: relative;

  &:hover .card__btn {
    display: block;
  }

  // .card__img

  &__img {
    width: 100%;
    height: 100px;
    object-fit: contain;
  }

  // .card__content

  &__content {
  }

  // .card__heading

  &__heading {
    padding: 10px;
  }

  // .card__text

  &__text {
    padding: 10px;
  }

  // .card__price

  &__price {
    padding: 10px;
  }

  // card__btn
  &__btn {
    width: 32px;
    height: 32px;
    background: #ff8484;

    display: none;
    position: absolute;
    top: -8px;
    right: -8px;
  }
}
</style>
