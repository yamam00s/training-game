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

  @Prop({ default: true })
  isLive!: boolean
}
</script>

<style>
.isFloat {
  animation: flot 3s linear infinite;
}

@keyframes flot {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
