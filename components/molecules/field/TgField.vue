<template>
  <div>
    <label>
      <p class="label"><slot /></p>
      <tg-input :placeholder="placeholder" @input="input"></tg-input>
    </label>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import TgInput from '~/components/atoms/input/TgInput.vue'

@Component({
  components: {
    TgInput
  }
})
export default class TgField extends Vue {
  @Prop({})
  placeholder!: string

  value: string = ''

  input(value) {
    this.value = value
    console.log(value)
  }
}
</script>

<style lang="scss" scoped>
.label {
  display: block;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5em;
}
</style>
