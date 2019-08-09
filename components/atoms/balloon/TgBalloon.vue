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
  min-width: 100px;
  margin: 1.5em 0;
  padding: 5px 10px;
  color: #555;
  font-size: 1.6rem;
  background: #e0edff;
  border-radius: 10px;
  text-align: left;

  &:before {
    content: '';
    position: absolute;
    top: -30px;
    left: 50%;
    border: 15px solid transparent;
    border-bottom: 15px solid #e0edff;
  }
}
</style>
