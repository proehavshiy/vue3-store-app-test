<template>
  <form class="form" @submit.prevent="submitForm" noValidate>
    <fieldset>
      <section class="form__section">
        <form-input
          class="form__input"
          id="title"
          name="title"
          :placeholder="placeHolder.title"
          v-model.trim="newCard.title"
          @validate="checkInputValidity"
          required
          minLength="2"
        />
        <label class="form__label" for="title">
          {{ label.title }}
        </label>
        <transition name="fade">
          <div class="form__error" v-show="errorMessage.title">
            {{ errorMessage.title }}
          </div>
        </transition>
      </section>
      <section class="form__section">
        <form-text-area
          class="form__input"
          id="body"
          name="body"
          :placeholder="placeHolder.body"
          :model-value="newCard.body"
          @input="newCard.body = $event.target.value.trim()"
        />
        <label class="form__label" for="body">
          {{ label.body }}
        </label>
      </section>
      <section class="form__section">
        <form-input
          class="form__input"
          id="image"
          name="image"
          :placeholder="placeHolder.image"
          v-model.trim="newCard.image"
          @validate="checkInputValidity"
          required
          type="url"
          pattern="(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)"
        />
        <label class="form__label" for="image">
          {{ label.image }}
        </label>
        <transition name="fade">
          <span class="form__error" v-show="errorMessage.image">
            {{ errorMessage.image }}
          </span>
        </transition>
      </section>
      <section class="form__section">
        <form-input
          class="form__input"
          id="price"
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
        <label class="form__label" for="price">
          {{ label.price }}
        </label>
        <transition name="fade">
          <span class="form__error" v-show="errorMessage.price">
            {{ errorMessage.price }}
          </span>
        </transition>
      </section>
      <main-button class="form__submit" :disabled="!this.formValidity">
        Добавить товар
      </main-button>
    </fieldset>
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

<style lang="scss" scoped>
.form {
  // form__section

  &__section {
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
  }

  // .form__label

  &__label {
    align-self: flex-start;
    position: relative;

    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 1.3;
    letter-spacing: -0.02em;
    color: $textColorMain;

    // &::after {
    //   content: "";

    //   width: 4px;
    //   height: 4px;

    //   background: $accentColor;
    //   border-radius: 4px;

    //   position: absolute;
    //   top: 0;
    //   left: 100%;
    // }

    // & :has(input) {
    //   color: red;
    // }

    // @at-root *:required {
    //   background: red;
    // }
    // $selector: .form__label > *:required
    // @if *:required {
    //   background: red;
    // }

    // & + input[required] {
    //   display: block;
    //   width: 100px;
    //   height: 100px;
    //   background: red;
    // }
  }

  // &__label:has(> input[required]) {
  //   background: red;
  // }

  // form__required-label

  &__required-label {
  }

  // .form__input

  &__input {
    // стилизуем label красной точкой, если инпут обязательный
    &:required ~ label::before {
      content: "";
      width: 4px;
      height: 4px;

      background: $accentColor;
      border-radius: 4px;

      position: absolute;
      top: 0;
      left: 100%;
    }
  }

  // .form__error

  &__error {
    display: block;
    width: 100%;
    height: 20px;
    border: 1px solid red;

    position: absolute;
    top: calc(100% + 5px);
    left: 0;
  }

  // .form__submit

  &__submit {
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
