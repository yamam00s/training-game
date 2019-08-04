<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TgCharacter extends Vue {}
</script>

<style></style>
