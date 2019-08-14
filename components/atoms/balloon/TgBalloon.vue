<template>
  <div class="balloon">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TgBalloon extends Vue {}
</script>

<style lang="scss" scoped>
.balloon {
  position: relative;
  display: inline-block;
  min-width: 100%;
  min-height: 50px;
  margin: 1.5em 0;
  padding: 5px 10px;
  font-size: 1.6rem;
  border-radius: 10px;
  border: 4px solid;
  text-align: left;

  &:before {
    content: '';
    position: absolute;
    top: -30px;
    left: 10%;
    border: 15px solid transparent;
    border-bottom: 15px solid $white;
  }
}
</style>
