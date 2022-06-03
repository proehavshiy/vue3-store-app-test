<template>
  <form @submit.prevent="createNewCard">
    <label class="label">
      {{ label.title }}
      <form-input
        :placeholder="placeHolder.title"
        v-model.trim="newCard.title"
      />
    </label>
    <label class="label">
      {{ label.body }}
      <form-text-area
        style="border: 1px solid black"
        :placeholder="placeHolder.body"
        :model-value="newCard.body"
        @input="newCard.body = $event.target.value.trim()"
      />
    </label>
    <label class="label">
      {{ label.image }}
      <form-input
        :placeholder="placeHolder.image"
        v-model.trim="newCard.image"
      />
    </label>
    <label class="label">
      {{ label.price }}
      <form-input
        :placeholder="placeHolder.price"
        v-model.trim.number="newCard.price"
      />
    </label>
    <form-button>Добавить товар</form-button>
  </form>
</template>

<script>

export default {
  name: 'form-for-cards',
  components: {
  },
  data() {
    return {
      newCard: {
        image: '',
        title: '',
        body: '',
        price: null,
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
    createNewCard() {
      this.newCard.id = Date.now();
      this.$emit('createCard', this.newCard);
      this.newCard = {
        image: '',
        title: '',
        body: '',
        price: null,
      };
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
</style>
