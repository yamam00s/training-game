<template>
  <div class="balloon" @click="$emit('balloon-click', $event)">
    <span class="balloon-text"><slot /></span>
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
.balloon-text {
  position: relative;

  &:before {
    content: '';
    top: 30%;
    right: -2rem;
    border: 1rem solid transparent;
    border-top: 1rem solid $white;
    position: absolute;
    animation: blink 0.5s ease-in-out infinite alternate;
  }
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
