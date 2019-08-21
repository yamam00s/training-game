<template>
  <div>
    <div v-if="currentData">
      <tg-header
        :title="currentData.characterName"
        @modal-open="modalOpen"
      ></tg-header>
      <div class="container">
        <tg-box>
          <tg-character :url="currentData.characterImageUrl" />
        </tg-box>
        <tg-balloon @balloon-click="balloonClick">
          {{ currentData.description }}
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
          <div v-for="(character, index) in characters" :key="index">
            <tg-radio
              :value="character.index"
              :checked="checkedItem"
              @change="setCheckedItem"
            >
              {{ character.materialName }}
              <tg-item :url="character.materialImageUrl" />
            </tg-radio>
          </div>
        </template>
      </tg-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Mutation, Action } from 'vuex-class'
import { CharacterData } from '~/types/index'
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
  @Mutation('setCharacters') setCharacters
  @Getter('characters') characters
  @Action('setCharactersRef') setCharactersRef

  currentIndex: number = 0
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
    this.currentIndex = this.checkedItem
  }

  private setCheckedItem(item): void {
    this.checkedItem = item
  }

  private balloonClick(): void {
    console.log('balloonClick')
  }

  get currentData(): CharacterData {
    return this.characters.find(
      (current) => current.index === this.currentIndex
    )
  }

  async created() {
    await this.setCharactersRef()
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
