<template>
  <div class="container">
    <TgCharacter :is-live="isLive" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
import TgCharacter from '~/components/atoms/TgCharacter.vue'

const sleep = (sec): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, sec)
  })
}

@Component({
  components: {
    TgCharacter
  }
})
export default class App extends Vue {
  @Mutation('setLive') setLive
  @Getter('isLive') isLive

  async mounted() {
    await sleep(10000)
    this.setLive(false)
  }
}
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
