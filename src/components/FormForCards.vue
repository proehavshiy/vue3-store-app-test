/* eslint-disable vuejs-accessibility/label-has-for */
<template>
  <section-heading>Добавление товара</section-heading>
  <form>
    <label class="label">
      Наименование товара
      <form-input placeholder="Введите наименование товара" />
    </label>
    <label class="label">
      Описание товара
      <form-text-area
        style="border: 1px solid black"
        placeholder="Введите описание товара"
      />
    </label>
    <label class="label">
      Ссылка на изображение товара
      <form-input placeholder="Введите ссылку" />
    </label>
    <label class="label">
      Цена товара
      <form-input placeholder="Введите цену" />
    </label>
    <form-button>Добавить товар</form-button>
  </form>
</template>

<script>

export default {
  name: 'form-for-cards',
  components: {
  },
};
</script>

<style lang="scss">
.label {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

input {
  border: 1px solid black;
}
</style>
