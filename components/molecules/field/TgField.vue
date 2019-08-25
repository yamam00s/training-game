<template>
  <div>
    <label>
      <p class="label">{{ label }}</p>
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component({})
export default class TgField extends Vue {
  @Prop({})
  label!: string
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
