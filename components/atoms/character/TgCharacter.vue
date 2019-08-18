<template>
  <div>
    <img :src="name" :width="width" :height="height" class="isFloat" />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class TgCharacter extends Vue {
  @Prop({ default: '300px' })
  width!: string
  @Prop({ default: '300px' })
  height!: string
  @Prop({})
  name!: string
}
</script>

<style lang="scss" scoped>
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
