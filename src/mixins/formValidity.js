export default {
  data() {
    return {
      errorMessage: {},
      formValidity: false,
    };
  },
  methods: {
    checkInputValidity(input) {
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
          stepMismatch,
        },
      } = input;

      if (badInput) this.errorMessage[input.name] = 'Введено недопустимое значение';
      if (patternMismatch) this.errorMessage[input.name] = 'Некорректный формат данных';

      if (rangeOverflow) this.errorMessage[input.name] = `Значение должно быть менее ${input.max}`;
      if (rangeUnderflow) this.errorMessage[input.name] = `Значение должно быть более ${input.min}`;

      if (valueMissing) this.errorMessage[input.name] = 'Поле является обязательным';
      if (tooShort) this.errorMessage[input.name] = `Значение менее ${input.minLength} симв.`;
      if (tooLong) this.errorMessage[input.name] = `Значение более ${input.maxLength} симв.`;
      if (typeMismatch) this.errorMessage[input.name] = `Поле не соответствует типу ${input.type}`;

      if (stepMismatch) {
        const stepDivisor = input.step.toString().indexOf('.');
        const floatLength = input.step.toString().slice(stepDivisor + 1).length;
        this.errorMessage[input.name] = `Дробная часть - не более ${floatLength} знаков`;
      }
      if (valid) this.errorMessage[input.name] = '';
      this.formValidity = formValidity;
    },
    applyMaskForPrice(num) {
      let formattedString = num.toString();
      formattedString = formattedString.replace(/\D/g, '');
      formattedString = formattedString.replace(/(\d)(\d{3})$/, '$1 $2');
      formattedString = formattedString.replace(/(?=(\d{3})+(\D))\B/g, ' ');
      return formattedString;
    },
  },
};
