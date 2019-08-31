<template>
  <input
    v-if="type !== 'textarea'"
    class="input"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :value="value"
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
  />
  <textarea
    v-else
    class="textarea"
    :placeholder="placeholder"
    :value="value"
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class TgInput extends Vue {
  @Prop({ default: 'input' })
  type!: string
  @Prop({})
  name!: string
  @Prop({})
  placeholder!: string
  @Prop({})
  value!: string
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  font-size: 1.6rem;
  height: 3.2rem;
  padding: calc(0.375em - 1px) calc(0.625em - 1px);
  border: 1px solid transparent;
  border-radius: 4px;
  line-height: 1.6;
}
</style>
