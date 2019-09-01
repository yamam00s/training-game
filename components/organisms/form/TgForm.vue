<template>
  <div>
    <form>
      <div class="form-group">
        <tg-field label="名前">
          <tg-input
            v-model="characterName"
            type="input"
            name="characterName"
            placeholder="キャラクター名"
          ></tg-input>
        </tg-field>
      </div>

      <div class="form-group">
        <tg-field label="素材">
          <tg-input
            v-model="materialName"
            type="input"
            name="materialName"
            placeholder="素材名"
          ></tg-input>
        </tg-field>
      </div>

      <div class="form-group">
        <tg-field label="キャラクター画像">
          <div class="upload-file-button">
            Click to upload
            <tg-input
              v-model="characterImage"
              type="file"
              name="characterImage"
              placeholder="キャラクター画像"
            ></tg-input>
          </div>
        </tg-field>
        <p>{{ uploadCharacterFileName }}</p>
      </div>

      <div class="form-group">
        <tg-field label="素材画像">
          <div class="upload-file-button">
            Click to upload
            <tg-input
              v-model="materialImage"
              type="file"
              name="materialImage"
              placeholder="素材画像"
            ></tg-input>
          </div>
          <p>{{ uploadMaterialFileName }}</p>
        </tg-field>
      </div>

      <div class="form-group">
        <tg-field label="詳細">
          <tg-input
            v-model="description"
            type="textarea"
            name="materialName"
            placeholder="詳細を書け"
          ></tg-input>
        </tg-field>
      </div>

      <div class="form-buttons">
        <tg-button @button-click="formSubmit">登録</tg-button>
        <tg-button tag="nuxt-link" to="/">TOPへ</tg-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { FormData } from '~/types'
import TgInput from '~/components/atoms/input/TgInput.vue'
import TgButton from '~/components/atoms/button/TgButton.vue'
import TgField from '~/components/molecules/field/TgField.vue'

@Component({
  components: {
    TgButton,
    TgInput,
    TgField
  }
})
export default class TgForm extends Vue {
  @Prop({})
  uploadCharacterFileName!: string
  @Prop({})
  uploadMaterialFileName!: string

  characterName: string = ''
  materialName: string = ''
  characterImage!: File
  materialImage!: File
  description: string = ''

  private formSubmit() {
    const formValue: FormData = {
      characterName: this.characterName,
      materialName: this.materialName,
      characterImage: this.characterImage,
      materialImage: this.materialImage,
      description: this.description
    }
    return formValue
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 40px;
  }
}

.form-buttons {
  width: 100%;
  height: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;

  h1 {
    margin-right: auto;
  }

  a {
    margin-left: 5px;
  }
}

.upload-file-button {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 1.5;
  padding: calc(0.375em - 1px) 0.75em;
  text-align: center;
  border: 1px solid;
  border-radius: 4px;
  box-shadow: none;
  font-size: 1.6rem;
  cursor: pointer;

  &:hover {
    opacity: 0.3;
  }

  &:active {
    opacity: 1;
  }
}
</style>
