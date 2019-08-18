<template>
  <div class="container">
    <form></form>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
// import TgField from '~/components/molecules/field/TgField.vue'
@Component({
  // components: {
  //   TgField
  // }
})
export default class Form extends Vue {
  @Prop({})
  value!: string

  update(key: string, value: string) {
    this.value[key] = value
    this.$emit('input', this.value)
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 400px;
  height: 400px;
  flex-wrap: wrap;
  text-align: left;
}
</style>
