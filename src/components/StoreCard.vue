<template>
  <li class="card">
    <img src="" alt="card image" class="card__img" />
    <div class="card__content">
      <h3 class="card__heading">Наименование товара</h3>
      <p class="card__text">
        Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк
      </p>
      <div class="card__price">10 000 руб.</div>
    </div>
  </li>
</template>

<script>

export default {
  name: 'store-card',
};
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // width: 332px;
  height: 423px;
  border: 1px solid red;
  // .card__img

  &__img {
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
}
</style>
