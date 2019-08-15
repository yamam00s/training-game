<template>
  <div>
    <tg-header
      :title="currenData.name"
      @button-click-1="buttonClick1"
      @button-click-2="buttonClick2"
    ></tg-header>
    <div class="container">
      <tg-box>
        <tg-character :name="currenData.image" />
      </tg-box>
      <tg-balloon>
        <p>{{ currenData.description }}</p>
      </tg-balloon>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
import { CharacterData } from '~/types/index'
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
  @Mutation('setCurrentIndex') setCurrentIndex
  @Mutation('setCharacters') setCharacters
  @Getter('currentIndex') currentIndex
  @Getter('characters') characters

  currenData!: CharacterData

  private buttonClick1(): void {
    console.log('button1')
  }

  private buttonClick2(): void {
    console.log('button2')
  }

  created() {
    this.setCharacters(stubData)
    this.currenData = this.characters[0]
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
