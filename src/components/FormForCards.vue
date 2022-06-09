<template>
  <form class="form" @submit.prevent="submitForm" noValidate>
    <fieldset class="form__fieldset">
      <section class="form__section">
        <form-input
          class="form__input"
          :class="{ form__input_invalid: errorMessage.title }"
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
          <span class="form__error" v-show="errorMessage.title">
            {{ errorMessage.title }}
          </span>
        </transition>
      </section>
      <section class="form__section">
        <form-text-area
          class="form__input form__input_textarea"
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
          :class="{ form__input_invalid: errorMessage.image }"
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
          :class="{ form__input_invalid: errorMessage.price }"
          id="price"
          name="price"
          :placeholder="placeHolder.price"
          v-model="newCard.formattedPrice"
          @validate="checkInputValidity"
          required
          type="text"
          pattern="^[0-9 ]+$"
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
    </fieldset>
    <main-button class="form__submit" :disabled="!this.formValidity">
      Добавить товар
    </main-button>
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
        formattedPrice: '',
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
  watch: {
    newCard: {
      // при вводе цены применяется маска
      // и парсится цена в числах без пробелов
      handler(dataFromInputs) {
        const { formattedPrice } = dataFromInputs;
        if (formattedPrice) {
          this.newCard.formattedPrice = this.applyMaskForPrice(formattedPrice);
          this.newCard.price = Number(this.newCard.formattedPrice.replace(/\s+/g, ''));
        }
      },
      deep: true,
    },
  },
  methods: {
    submitForm() {
      this.newCard.id = uuidv4();
      this.$emit('createCard', this.newCard);
      this.newCard = {
        image: '',
        title: '',
        body: '',
        price: null,
        formattedPrice: '',
      };

      if (this.formValidity) this.formValidity = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  // form__fieldset
  &__fieldset {
    margin-bottom: 24px;
    padding: 0;
  }

  // form__section

  &__section {
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;

    position: relative;

    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  }

  // .form__label

  &__label {
    margin-bottom: 4px;

    align-self: flex-start;
    position: relative;

    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 1.3;
    letter-spacing: -0.02em;
    color: $textColorMain;
  }

  // .form__input

  &__input {
    @include contentBlockPreset;
    min-height: 36px;
    padding: 10px 16px;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.25;

    transition: $transition;

    // .form__input_textarea

    &_textarea {
      min-height: 108px;
    }

    // .form__input_invalid

    &_invalid {
      outline: 2px solid $accentColor !important;
    }

    &::placeholder {
      color: $textColorSecondary;
    }
    &:focus {
      outline: 2px solid $textColorMain;
    }

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
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 1.25;
    letter-spacing: -0.02em;

    color: $accentColor;

    position: absolute;
    top: calc(100% + 5px);
    left: 0;
  }

  // .form__submit

  &__submit {
    padding: 10px;
    min-height: 36px;
    background: $submitColorActive;

    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.25;

    color: $accentColorLight;

    transition: $transition;

    &:disabled {
      background: $submitColorDisabled;
      color: $textColorSecondary;
    }
  }
}

// animations
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
