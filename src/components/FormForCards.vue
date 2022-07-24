<template>
  <form class="form" @submit.prevent="submitForm" noValidate>
    <fieldset class="form__fieldset">
      <form-section
        class="form__section"
        :labelFor="'title'"
        :title="label.title"
        :errorMessage="errorMessage.title"
      >
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
      </form-section>
      <form-section
        class="form__section"
        :labelFor="'body'"
        :title="label.body"
        :errorMessage="''"
      >
        <form-text-area
          class="form__input form__input_textarea"
          id="body"
          name="body"
          :placeholder="placeHolder.body"
          :model-value="newCard.body"
          @input="newCard.body = $event.target.value.trim()"
        />
      </form-section>
      <form-section
        class="form__section"
        :labelFor="'image'"
        :title="label.image"
        :errorMessage="errorMessage.image"
      >
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
      </form-section>
      <form-section
        class="form__section"
        :labelFor="'price'"
        :title="label.price"
        :errorMessage="errorMessage.price"
      >
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
      </form-section>
    </fieldset>
    <main-button class="form__submit" :disabled="!this.formValidity">
      Добавить товар
    </main-button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import formValidity from '@/mixins/formValidity';
import FormSection from './UI/FormSection.vue';

export default {
  components: { FormSection },
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

  // .form__input

  &__input {
    @include contentBlockPreset;
    min-height: 36px;
    padding: 10px 16px;

    font-size: 12px;
    @include standartTransition(0.2);

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
    &:required::v-deep ~ label::before {
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

  // .form__submit

  &__submit {
    padding: 10px;
    min-height: 36px;
    background: $submitColorActive;

    font-weight: 600;
    font-size: 12px;

    color: $accentColorLight;

    @include standartTransition(0.2);

    &:disabled {
      background: $submitColorDisabled;
      color: $textColorSecondary;
    }
  }
}
</style>
