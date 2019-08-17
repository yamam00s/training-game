<template>
  <div>
    <input
      :id="`radio-${value}`"
      type="radio"
      class="radio-input"
      :value="value"
      :checked="value === checked"
      @change="$emit('change', value)"
    />
    <label :for="`radio-${value}`" class="radio-label">
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Model, Component } from 'vue-property-decorator'

@Component
export default class TgRadio extends Vue {
  @Prop({})
  value!: string

  @Model('change', { type: String })
  readonly checked!: string
}
</script>

<style lang="scss" scoped></style>
