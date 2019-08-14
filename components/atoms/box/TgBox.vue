<template>
  <div class="box">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TgBox extends Vue {}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  @include flexCenter;
  border-radius: 50px;
  border: 10px double $black;
  background: $white;
  text-align: center;
}
</style>
