<template>
  <input type="text" :value="modelValue" @input="changeInputValue" />
</template>

<script>

export default {
  name: 'form-input',
  emits: ['update:modelValue', 'validate'],
  props: {
    modelValue: {
      type: [String, Number, null],
      required: true,
    },
  },
  methods: {
    changeInputValue(e) {
      this.$emit('update:modelValue', e.target.value);
      this.$emit('validate', e.target);
    },
    applyMaskForPrice(num) {
      let formattedNum = num.toString();
      formattedNum = formattedNum.replace(/\D/g, '');
      formattedNum = formattedNum.replace(/(\d)(\d{3})$/, '$1 $2');
      formattedNum = formattedNum.replace(/(?=(\d{3})+(\D))\B/g, ' ');
      return formattedNum;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
