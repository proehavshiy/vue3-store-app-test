<template>
  <form @submit.prevent="submitForm" noValidate>
    <label class="label">
      {{ label.title }}
      <form-input
        name="title"
        :placeholder="placeHolder.title"
        v-model.trim="newCard.title"
        @validate="checkInputValidity"
        required
        minLength="2"
      />
      <span class="error" :class="{ error__active: errorMessage.title }">
        {{ errorMessage.title }}
      </span>
    </label>
    <label class="label">
      {{ label.body }}
      <form-text-area
        name="body"
        :placeholder="placeHolder.body"
        :model-value="newCard.body"
        @input="newCard.body = $event.target.value.trim()"
      />
    </label>
    <label class="label">
      {{ label.image }}
      <form-input
        name="image"
        :placeholder="placeHolder.image"
        v-model.trim="newCard.image"
        @validate="checkInputValidity"
        required
        type="url"
        pattern="(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)"
      />
      <span class="error" :class="{ error__active: errorMessage.image }">
        {{ errorMessage.image }}
      </span>
    </label>
    <label class="label">
      {{ label.price }}
      <form-input
        name="price"
        :placeholder="placeHolder.price"
        v-model.trim.number="newCard.price"
        @validate="checkInputValidity"
        required
        type="number"
        min="990"
        max="1000000"
        step="0.01"
      />
      <span class="error" :class="{ error__active: errorMessage.price }">
        {{ errorMessage.price }}
      </span>
    </label>
    <main-button :disabled="!this.formValidity">Добавить товар</main-button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import formValidity from '@/mixins/formValidity';

export default {
  name: 'form-for-cards',
  mixins: [formValidity],
  data() {
    return {
      newCard: {
        image: '',
        title: '',
        body: '',
        price: null,
        formattedPrice: null,
        id: null,
      },
      placeHolder: {
        image: 'Введите ссылку',
        title: 'Введите наименование товара',
        body: 'Введите описание товара',
        price: 'Введите цену',
      },
      label: {
        image: 'Ссылка на изображение товара',
        title: 'Наименование товара',
        body: 'Описание товара',
        price: 'Цена товара',
      },
    };
  },
  methods: {
    submitForm() {
      this.newCard.id = uuidv4();
      this.newCard.formattedPrice = this.newCard.price.toLocaleString();
      this.$emit('createCard', this.newCard);
      this.newCard = {
        image: '',
        title: '',
        body: '',
        price: null,
      };

      if (this.formValidity) this.formValidity = false;
    },
  },
};
</script>

<style lang="scss">
.label {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

input {
  border: 1px solid black;
}

.error {
  display: block;
  width: 100%;
  height: 20px;
  border: 1px solid red;

  opacity: 0;

  &__active {
    opacity: 1;
  }
}
</style>
