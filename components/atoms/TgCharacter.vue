<template>
  <div>
    <img
      src="/image/marimo.png"
      :width="width"
      :height="height"
      class="isFloat"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class TgCharacter extends Vue {
  @Prop({ default: '100px' })
  width!: string

  @Prop({ default: '100px' })
  height!: string
}
</script>

<style>
.isFloat {
  animation: img_box_9955 10s linear infinite;
}

@keyframes img_box_9955 {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
