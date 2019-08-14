<template>
  <div>
    <tg-header title="ただのまりも" @button-click-1="buttonClick"></tg-header>
    <div class="container">
      <tg-box>
        <tg-character :is-live="isLive" />
      </tg-box>
      <tg-balloon>
        <p>
          aaaa
        </p>
      </tg-balloon>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
import TgCharacter from '~/components/atoms/character/TgCharacter.vue'
import TgBalloon from '~/components/atoms/balloon/TgBalloon.vue'
import TgBox from '~/components/atoms/box/TgBox.vue'
import TgHeader from '~/components/organisms/header/TgHeader.vue'

@Component({
  components: {
    TgCharacter,
    TgBalloon,
    TgBox,
    TgHeader
  }
})
export default class App extends Vue {
  @Mutation('setLive') setLive
  @Getter('isLive') isLive

  private buttonClick() {
    console.log('aa')
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 400px;
  height: 400px;
  @include flexCenter;
  flex-wrap: wrap;
  text-align: center;
}
</style>
