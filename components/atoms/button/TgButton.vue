<template>
  <component
    :is="tag"
    :type="nativeType"
    class="button"
    :class="(size, color)"
    @click="$emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class TgButton extends Vue {
  @Prop({ default: 'button' })
  tag!: 'button' | 'span' | 'a'
  @Prop({ default: 'button' })
  nativeType!: 'button' | 'submit' | 'reset'
  @Prop({ default: 'medium' })
  size!: string
  @Prop({ default: 'monokuro' })
  color!: string
}
</script>

<style lang="scss" scoped>
.button {
  height: 2.25em;
  line-height: 1.5;
  padding: calc(0.375em - 1px) 0.75em;
  text-align: center;
  border: 1px solid;
  border-radius: 4px;
  box-shadow: none;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }
}

.monokuro {
  color: $white;
  border: 1px solid $white;
  background: $black;
}

.small {
  border-radius: 2px;
  font-size: 1.4rem;
}
.medium {
  font-size: 1.8rem;
}
.large {
  font-size: 2rem;
}
</style>
