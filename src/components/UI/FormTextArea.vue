<template>
  <textarea
    class="form__textarea"
    name="area"
    cols="30"
    rows="10"
    aria-label="form-area"
    :value="modelValue"
  ></textarea>
</template>

<script>
export default {
  name: 'form-text-area',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    methods: {
      changeInputValue(e) {
        // doesnt work with v-model
        this.$emit('update:modelValue', e.target.value);
        this.$emit('validate', e.target);
      },
    },
  },
};
</script>

<style lang="scss">
// @include contentBlockPreset;
.form__textarea {
  // border: 1px solid black;
}
</style>
