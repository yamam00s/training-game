<template>
  <div class="background is-bule">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TgBackground extends Vue {}
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  height: 100%;
  @include flexCenter;
  text-align: center;
}

.is-bule {
  background: linear-gradient(to bottom, rgb(100, 143, 224), rgb(2, 59, 165));
}
</style>
