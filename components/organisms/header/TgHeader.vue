<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <tg-button @button-click="$emit('modal-open', $event)">餌をやる</tg-button>
    <tg-button @button-click="$emit('button-click-2', $event)"
      >学習させる</tg-button
    >
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import TgButton from '~/components/atoms/button/TgButton.vue'

@Component({
  components: {
    TgButton
  }
})
export default class TgHeader extends Vue {
  @Prop({})
  title!: string
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  padding: 30px 0 10px;
  display: flex;

  h1 {
    margin-right: auto;
  }

  button {
    margin-left: 5px;
  }
}
</style>
