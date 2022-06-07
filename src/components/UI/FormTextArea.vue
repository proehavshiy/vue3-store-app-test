<template>
  <textarea name="area" aria-label="form-area" :value="modelValue"></textarea>
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

<style lang="scss" scoped>
textarea {
  resize: none;
}
</style>
