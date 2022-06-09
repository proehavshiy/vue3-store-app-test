<template>
  <div class="cards-substitute">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cards-substitute',
};
</script>

<style lang="scss" scoped>
.cards-substitute {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 32px;
  line-height: 1.25px;

  text-align: center;
  color: $textColorSecondary;
}
</style>
