<template>
  <div>
    <img :src="`/image/items/${name}.png`" :width="width" :height="height" />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class TgItem extends Vue {
  @Prop({ default: '30px' })
  width!: string
  @Prop({ default: '30px' })
  height!: string
  @Prop({})
  name!: string
}
</script>

<style lang="scss" scoped></style>
