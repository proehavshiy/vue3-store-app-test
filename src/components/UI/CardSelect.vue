<template>
  <select class="select" @change="changeOption">
    <option value="" selected>По умолчанию</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>
<script>

export default {
  name: 'card-select',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

<style lang="scss">
.select {
  border: 1px solid black;
  color: green;
}
</style>
