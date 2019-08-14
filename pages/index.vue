<template>
  <div>
    <tg-header :title="result.name" @button-click-1="buttonClick"></tg-header>
    <div class="container">
      <tg-box>
        <tg-character />
      </tg-box>
      <tg-balloon>
        <p>{{ result.description }}</p>
      </tg-balloon>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import { Getter, Mutation } from 'vuex-class'
import stubData from '~/static/stub/characterData.js'
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
  // @Mutation('')
  // @Getter('')

  result: CharacterData = stubData[0]

  private buttonClick() {
    console.log('aa')
  }

  async created() {
    const result = await stubData[0]
    console.log(result)
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
