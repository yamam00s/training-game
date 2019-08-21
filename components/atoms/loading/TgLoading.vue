<template>
  <transition name="loading">
    <div class="loading-mask">
      <div class="loading-wrapper">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TgLoading extends Vue {}
</script>

<style lang="scss" scoped>
.loading-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.loading-wrapper {
  height: 100%;
  width: 100%;
  @include flexCenter;
  font-size: 5rem;
}
</style>
