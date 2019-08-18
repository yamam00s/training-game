<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label>
          <span class="label">名前</span>
          <input v-model="characterName" type="text" class="input" />
        </label>
      </div>
      <div class="form-group">
        <label>
          <span class="label">アイテム</span>
          <input v-model="materialName" type="text" class="input" />
        </label>
      </div>
      <div class="form-group">
        <label>
          <span class="label">画像</span>
          <div class="upload-button">
            Click to upload
            <input type="file" class="upload" @change="setCharacterImage" />
          </div>
          <p>{{ uploadCharacterFileName }}</p>
        </label>
      </div>
      <div class="form-group">
        <label>
          <span class="label">アイテム画像</span>
          <div class="upload-button">
            Click to upload
            <input type="file" class="upload" @change="setMaterialImage" />
          </div>
          <p>{{ uploadMaterialFileName }}</p>
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
import { db, storage } from '~/plugins/firebase'
import TgButton from '~/components/atoms/button/TgButton.vue'

const storageRef = storage.ref()

const getStorageUrl = (path: string): Promise<string> => {
  return new Promise((resolve) => {
    const imagesRef = storageRef.child(path)
    imagesRef.getDownloadURL().then(function(url) {
      resolve(url)
    })
  })
}
const uploadStorageUrl = (file: any, path: string): Promise<any> => {
  return new Promise((resolve) => {
    const imagesRef = storageRef.child(path)
    imagesRef.put(file).then(function(snapshot) {
      resolve(snapshot)
    })
  })
}

@Component({
  components: {
    TgButton
  }
})
export default class Form extends Vue {
  @Getter('characters') characters
  @Action('addCharacter') addCharacter
  // storage upload data
  uploadCharacterImage: any | null = null
  uploadCharacterFileName: string = ''
  uploadMaterialImage: any | null = null
  uploadMaterialFileName: string = ''
  // firestore upload data
  characterName: string = ''
  materialName: string = ''
  characterImageUrl: string = ''
  materialImageUrl: string = ''
  description: string = ''

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private setSelectFile = (event) => {
    event.preventDefault()
    const files = event.target.files
    return files[0]
  }

  private setCharacterImage(event): void {
    this.uploadCharacterImage = this.setSelectFile(event)
    this.uploadCharacterFileName = this.uploadCharacterImage.name
  }

  private setMaterialImage(event): void {
    this.uploadMaterialImage = this.setSelectFile(event)
    this.uploadMaterialFileName = this.uploadMaterialImage.name
  }

  private async imageFileSubmit(uploadFile: any, uploadFileName: string) {
    await uploadStorageUrl(uploadFile, uploadFileName)
    const imageUrl = await getStorageUrl(uploadFileName)
    return imageUrl
  }

  private async formSubmit() {
    this.characterImageUrl = await this.imageFileSubmit(
      this.uploadCharacterImage,
      `/characters/${this.uploadCharacterFileName}`
    )

    this.materialImageUrl = await this.imageFileSubmit(
      this.uploadMaterialImage,
      `/items/${this.uploadMaterialFileName}`
    )

    const character: CharacterData = {
      index: this.characters.length,
      characterName: this.characterName,
      materialName: this.materialName,
      characterImageUrl: this.characterImageUrl,
      materialImageUrl: this.materialImageUrl,
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

.upload-button {
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

.upload {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  outline: none;
  cursor: pointer;
  z-index: -1;
}
</style>
