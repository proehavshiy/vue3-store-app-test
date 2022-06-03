<template>
  <input type="text" :value="modelValue" @input="changeInputValue" />
</template>

<script>

export default {
  name: 'form-input',
  props: {
    modelValue: {
      type: [String, Number, null],
      required: true,
    },
  },
  methods: {
    changeInputValue(e) {
      console.log('e.target.value:', e.target.value);
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

<style lang="scss">
</style>
