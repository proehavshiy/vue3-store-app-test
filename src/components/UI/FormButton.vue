<template>
  <button class="form__btn"><slot></slot></button>
</template>

<script>

export default {
  name: 'form-button',
};
</script>

<style lang="scss">
.form__btn {
  margin-top: 15px;
  padding: 10px;
  background-color: none;
  border: 1px solid black;
}
</style>
