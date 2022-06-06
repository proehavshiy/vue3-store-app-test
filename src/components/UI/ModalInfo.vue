<template>
  <div class="modal" :class="{ modal_visible: visibility }">
    <div class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import toggleVisibility from '@/mixins/toggleVisibility';

export default {
  name: 'modal-info',
  mixins: [toggleVisibility],
};
</script>

<style lang="scss">
.modal {
  position: absolute;
  opacity: 0;

  top: -100%;
  right: 0;

  transition: all 0.4s ease;

  &_visible {
    opacity: 1;
    min-width: 100px;
    min-height: 50px;

    top: 0;
  }

  // .modal__content

  &__content {
    display: flex;
    justify-content: flex-end;

    padding: 10px;
    background: green;
    border-radius: 10px;
    opacity: 0.6;

    position: relative;
    top: 20px;
    right: 20px;
  }
}
</style>
