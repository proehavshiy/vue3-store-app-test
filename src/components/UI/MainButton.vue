<template>
  <button class="btn"><slot></slot></button>
</template>

<script>

export default {
  name: 'main-button',
};
</script>

<style lang="scss">
.btn {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: none;
  border: 1px solid black;
}
</style>
