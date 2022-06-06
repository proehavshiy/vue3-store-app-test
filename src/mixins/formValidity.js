export default {
  data() {
    return {
      errorMessage: {},
      formValidity: false,
    };
  },
  methods: {
    checkInputValidity(input) {
      // const input = e.target;
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
      } = input;

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
