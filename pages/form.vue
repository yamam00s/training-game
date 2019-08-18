<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label>
          <span class="label">名前</span>
          <input v-model="name" type="text" class="input" />
        </label>
      </div>
      <div class="form-group">
        <label>
          <span class="label">アイテム</span>
          <input v-model="item" type="text" class="input" />
        </label>
      </div>
      <div class="form-group">
        <label>
          <span class="label">画像</span>
          <input v-model="image" type="text" class="input" />
        </label>
      </div>
      <div class="form-group">
        <label>
          <span class="label">アイテム画像</span>
          <input v-model="itemImage" type="text" class="input" />
        </label>
      </div>
      <div class="form-group">
        <label>
          <span class="label">詳細</span>
          <input v-model="description" type="text" class="input" />
        </label>
      </div>

      <tg-button @button-click="formSubmit">登録</tg-button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { CharacterData } from '~/types/index'
import db from '~/plugins/firebase'
import TgButton from '~/components/atoms/button/TgButton.vue'

@Component({
  components: {
    TgButton
  }
})
export default class Form extends Vue {
  @Getter('characters') characters
  @Action('addCharacter') addCharacter

  name: string = ''
  item: string = ''
  image: string = ''
  itemImage: string = ''
  description: string = ''

  private async formSubmit() {
    const character: CharacterData = {
      index: this.characters.length,
      name: this.name,
      item: this.item,
      image: this.image,
      itemImage: this.itemImage,
      description: this.description
    }

    const usersRef = db.collection('characters')
    await usersRef.add(character)
    this.$router.push('/')
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 400px;
  height: 400px;
  flex-wrap: wrap;
  text-align: left;
}

.form-group {
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 40px;
  }
  .input {
    width: 100%;
    font-size: 1.6rem;
    height: 3.2rem;
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
    border: 1px solid transparent;
    border-radius: 4px;
    line-height: 1.6;
  }

  .label {
    display: block;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5em;
  }
}
</style>
