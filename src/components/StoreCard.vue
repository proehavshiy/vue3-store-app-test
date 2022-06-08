<template>
  <li class="card">
    <div class="card__img-wrapper">
      <img :src="card.image" alt="card image" class="card__img" />
    </div>
    <div class="card__content">
      <h3 class="card__heading">{{ card.title }}</h3>
      <p class="card__text">
        {{ card.body }}
      </p>
      <div class="card__price">{{ card.formattedPrice }} руб.</div>
    </div>
    <main-button class="card__btn" @click="$emit('deleteCard')" />
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
  @include contentBlockPreset;
  max-width: 332px;
  position: relative;

  &:hover .card__btn {
    opacity: 1;
  }

  // card__img-wrapper

  &__img-wrapper {
    display: flex;

    width: 100%;
    height: 200px;
    overflow: hidden;

    cursor: pointer;
  }
  // .card__img

  &__img {
    margin: auto;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: transform 0.4s cubic-bezier(0.6, 0, 0.5, 1),
      object-fit 0.4s cubic-bezier(0.6, 0, 0.5, 1);

    &:hover {
      object-fit: contain;
      transform: scale(80%);
    }
  }

  // .card__content

  &__content {
    padding: 16px 16px 24px;
    display: flex;
    flex-direction: column;

    color: $textColorMain;
    font-style: normal;
    line-height: 1.25;
  }

  // .card__heading

  &__heading {
    margin-bottom: 16px;

    font-weight: 600;
    font-size: 20px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  // .card__text

  &__text {
    flex: 0 0 80px;
    margin-bottom: 32px;

    font-weight: 400;
    font-size: 16px;

    overflow: hidden;
    position: relative;

    // display: -webkit-box;
    // -webkit-line-clamp: 4;
    // -webkit-box-orient: vertical;

    // overflow: hidden;
    // text-overflow: ellipsis;

    // градиент на обрезанный текст при переполнении
    &:after {
      content: "";
      text-align: right;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 80%;
      height: 1.2em;
      background: linear-gradient(to right, rgba(255, 255, 255, 0), white 100%);
      pointer-events: none;
    }
  }

  // .card__price

  &__price {
    font-weight: 600;
    font-size: 24px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  // card__btn
  &__btn {
    width: 32px;
    height: 32px;
    background-color: $accentColor;
    background-image: url("~@/assets/img/delete.svg");
    background-size: 16px;
    background-position: center;
    background-repeat: no-repeat;

    opacity: 0;
    transition: $transitionlinear;

    position: absolute;
    top: -8px;
    right: -8px;

    &:hover {
      background-color: $submitColorActive;
    }
  }
}
</style>
