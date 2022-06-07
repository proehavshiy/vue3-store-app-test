<template>
  <h1 class="section-heading"><slot></slot></h1>
</template>

<script>

export default {
  name: 'section-heading',
};
</script>

<style lang="scss" scoped>
.section-heading {
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.25;
  color: $textColorMain;
}
</style>
