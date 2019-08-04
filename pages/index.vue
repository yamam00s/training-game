<template>
  <div class="container">
    <TgCharacter />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TgCharacter from '~/components/atoms/TgCharacter.vue'

@Component({
  components: {
    TgCharacter
  }
})
export default class App extends Vue {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('/image/bg.png') center center no-repeat;
}
</style>
