<template>
  <div class="preloader">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cards-preloader',
};
</script>

<style lang="scss" scoped>
.preloader {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 32px;
  line-height: 1.25px;

  color: $textColorSecondary;

  @media (max-width: $b768) {
    font-size: 24px;
  }
}
</style>
