<template>
  <div class="container">
    <tg-button>button</tg-button>
    <tg-character :is-live="isLive" />
    <tg-balloon>
      <p>
        aaaa
      </p>
    </tg-balloon>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
import TgCharacter from '~/components/atoms/character/TgCharacter.vue'
import TgBalloon from '~/components/atoms/balloon/TgBalloon.vue'
import TgButton from '~/components/atoms/button/TgButton.vue'

@Component({
  components: {
    TgCharacter,
    TgBalloon,
    TgButton
  }
})
export default class App extends Vue {
  @Mutation('setLive') setLive
  @Getter('isLive') isLive
}
</script>

<style>
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('/image/bg.png') center center no-repeat;
}
</style>
