<template>
  <div>
    <tg-header
      :title="currenData.name"
      @modal-open="modalOpen"
      @button-click-2="buttonClick2"
    ></tg-header>
    <div class="container">
      <tg-box>
        <tg-character :name="currenData.image" />
      </tg-box>
      <tg-balloon @balloon-click="balloonClick">
        {{ currenData.description }}
      </tg-balloon>
    </div>

    <tg-modal
      v-show="isModal"
      @modal-submit="modalSubmit"
      @modal-close="modalClose"
    >
      <template slot="header">
        <h3>アイテムを選択してください</h3>
      </template>
      <template slot="body">
        <div v-for="character in characters" :key="character.index">
          <tg-radio
            :value="character.index"
            :checked="checkedItem"
            @change="setCheckedItem"
          >
            {{ character.item }}
            <tg-item :name="character.itemImage" />
          </tg-radio>
        </div>
      </template>
    </tg-modal>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
import { CharacterData } from '~/types/index'
import stubData from '~/static/stub/characterData.js'
import TgCharacter from '~/components/atoms/character/TgCharacter.vue'
import TgItem from '~/components/atoms/item/TgItem.vue'
import TgBalloon from '~/components/atoms/balloon/TgBalloon.vue'
import TgBox from '~/components/atoms/box/TgBox.vue'
import TgRadio from '~/components/atoms/radio/TgRadio.vue'
import TgHeader from '~/components/organisms/header/TgHeader.vue'
import TgModal from '~/components/organisms/modal/TgModal.vue'

@Component({
  components: {
    TgCharacter,
    TgItem,
    TgBalloon,
    TgBox,
    TgRadio,
    TgHeader,
    TgModal
  }
})
export default class App extends Vue {
  @Mutation('setCurrentIndex') setCurrentIndex
  @Mutation('setCharacters') setCharacters
  @Getter('currentIndex') currentIndex
  @Getter('characters') characters

  currenData!: CharacterData
  isModal: boolean = false
  checkedItem: number = 0

  private modalOpen(): void {
    this.isModal = true
  }

  private modalClose(): void {
    this.isModal = false
  }

  private modalSubmit(): void {
    this.modalClose()
    this.currenData = this.characters[this.checkedItem]
  }

  private setCheckedItem(item): void {
    this.checkedItem = item
  }

  private balloonClick(): void {
    console.log('balloonClick')
  }

  private buttonClick2(): void {
    console.log('buttonClick2')
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
