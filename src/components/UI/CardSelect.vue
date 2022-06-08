<template>
  <div class="select">
    <p
      class="select__title"
      @click="areOptionsVisible = !areOptionsVisible"
      ref="selector"
    >
      {{ modelValue.name }}
      <span></span>
    </p>
    <transition name="fade">
      <ul class="select__options" v-show="areOptionsVisible">
        <li
          class="select__option"
          v-for="option in options.filter(
            (option) => option.value !== modelValue.value
          )"
          :key="option.value"
          @click="selectOption(option)"
        >
          {{ option.name }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'card-select',
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    closeOptionsTab(e) {
      if (e.target === this.$refs.selector) return;
      this.areOptionsVisible = false;
    },
    selectOption(option) {
      this.closeOptionsTab(false);
      this.$emit('update:modelValue', option);
    },
  },
  mounted() {
    document.addEventListener('click', this.closeOptionsTab, true);
  },
  unmounted() {
    document.removeEventListener('click', this.closeOptionsTab);
  },
};
</script>

<style lang="scss" scoped>
.select {
  @include contentBlockPreset;
  min-width: 122px;
  position: relative;
  cursor: pointer;
  z-index: 999;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.25;
  color: $textColorSecondary;

  // select__title

  &__title {
    padding: 10px 27.5px 10px 16px;
    position: relative;

    display: flex;
    justify-content: center;

    // галочка
    & > span {
      display: block;
      position: relative;
      top: 50%;
      left: 5px;

      &::after {
        content: "";
        display: block;
        width: 5px;
        height: 1px;
        background: $textColorSecondary;
        transform: rotate(-45deg);

        position: absolute;
        left: 3px;
        top: 0px;
      }
      &::before {
        content: "";
        display: block;
        width: 5px;
        height: 1px;
        background: $textColorSecondary;
        transform: rotate(45deg);

        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  // select__options
  &__options {
    @include contentBlockPreset;
    background: $contentBlockBg;
    position: absolute;
    top: calc(100% + 5px);
    right: 0;
    width: 100%;
  }

  // .select__option

  &__option {
    padding: 10px 16px;

    &:hover {
      background: $bgColor;
    }
  }

  // transitions
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s linear;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
