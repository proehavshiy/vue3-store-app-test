<template>
  <select name="" id="" class="select">
    <option value="" selected>По умолчанию</option>
    <!-- <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option> -->
    <option>Цена по возрастанию</option>
    <option>Цена по убыванию</option>
  </select>
</template>
<script>

export default {
  name: 'card-select',
};
</script>

<style lang="scss">
.select {
  border: 1px solid black;
}
</style>
