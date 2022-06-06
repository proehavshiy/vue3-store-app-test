<template>
  <form @submit.prevent="submitForm" noValidate>
    <label class="label">
      {{ label.title }}
      <form-input
        :placeholder="placeHolder.title"
        v-model.trim="newCard.title"
        @input="checkInputValidity"
        minLength="2"
        name="title"
        required
      />
      <span class="error" :class="{ error__active: errorMessage.title }">{{
        errorMessage.title
      }}</span>
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
        required
        type="url"
        pattern="(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)"
        @input="checkInputValidity"
        name="image"
      />
      <span class="error" :class="{ error__active: errorMessage.image }">{{
        errorMessage.image
      }}</span>
    </label>
    <label class="label">
      {{ label.price }}
      <form-input
        :placeholder="placeHolder.price"
        v-model.trim.number="newCard.price"
        required
        type="number"
        min="100"
        max="500000"
        @input="checkInputValidity"
        name="price"
      />
      <span class="error" :class="{ error__active: errorMessage.price }">{{
        errorMessage.price
      }}</span>
    </label>
    <main-button :disabled="!this.formValidity">Добавить товар</main-button>
  </form>
</template>

<script>
// import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'form-for-cards',
  components: {},
  watch: {
    errorMessage: {
      handler(newVal) {
        console.log('errorMessage:', newVal);
        console.log('this.formValidity:', this.formValidity);
      },
      deep: true,
    },
    formValidity: {
      handler(e) {
        console.log('this.formValidity:', e);
      },
    },
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
      errorMessage: {},
      formValidity: false,
    };
  },
  methods: {
    submitForm() {
      this.newCard.id = Date.now();
      this.$emit('createCard', this.newCard);
      this.newCard = {
        image: '',
        title: '',
        body: '',
        price: null,
      };

      this.formValidity = false;
    },
    checkInputValidity(e) {
      const input = e.target;
      const formValidity = input.closest('form').checkValidity();
      const {
        validity: {
          valid,
          badInput,
          valueMissing,
          tooShort,
          tooLong,
          typeMismatch,
          patternMismatch,
          rangeOverflow,
          rangeUnderflow,
        },
      } = e.target;

      // console.log('validity:', input.validity);
      // console.log('badInput:', badInput);
      // const onlyNums = /^\d+$/;
      //  pattern="/^\d+$/"
      if (badInput) this.errorMessage[input.name] = 'Введено недопустимое значение';
      if (patternMismatch) this.errorMessage[input.name] = `Некорректный формат данных для ${input.type}`;

      if (rangeOverflow) this.errorMessage[input.name] = `Значение должно быть более ${input.max}`;
      if (rangeUnderflow) this.errorMessage[input.name] = `Значение должно быть менее ${input.min}`;

      if (valueMissing) this.errorMessage[input.name] = 'Поле является обязательным';
      if (tooShort) this.errorMessage[input.name] = `Значение менее ${input.minLength} симв.`;
      if (tooLong) this.errorMessage[input.name] = `Значение более ${input.maxLength} симв.`;
      if (typeMismatch) this.errorMessage[input.name] = `Поле не соответствует типу ${input.type}`;

      if (valid) this.errorMessage[input.name] = '';
      this.formValidity = formValidity;
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
