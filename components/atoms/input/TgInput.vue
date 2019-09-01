<template>
  <input
    v-if="type !== 'textarea'"
    :class="type !== 'file' ? 'input' : 'upload'"
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

.textarea {
  width: 100%;
  font-size: 1.6rem;
  height: 7rem;
  padding: calc(0.375em - 1px) calc(0.625em - 1px);
  border: 1px solid transparent;
  border-radius: 4px;
  line-height: 1.6;
}

.upload {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  outline: none;
  cursor: pointer;
  z-index: -1;
}
</style>
