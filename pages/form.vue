<template>
  <div class="container">
    <tg-loading v-show="isLoading">アップロードしています...</tg-loading>
    <tg-form
      :upload-character-file-name="uploadCharacterFileName"
      :upload-material-file-name="uploadMaterialFileName"
      @set-character-image="setCharacterImage"
      @set-material-image="setMaterialImage"
      @form-submit="formSubmit"
    ></tg-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
import { CharacterData } from '~/types/index'
import { db, storage } from '~/plugins/firebase'
import TgLoading from '~/components/atoms/loading/TgLoading.vue'
import TgForm from '~/components/organisms/form/TgForm.vue'

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
    TgLoading,
    TgForm
  }
})
export default class Form2 extends Vue {
  @Getter('characters') characters
  @Getter('isLoading') isLoading
  @Mutation('startLoading') startLoading
  @Mutation('endLoading') endLoading

  // storage upload data
  uploadCharacterImage!: File
  uploadMaterialImage!: File
  uploadCharacterFileName: string = ''
  uploadMaterialFileName: string = ''

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

  private async formSubmit(formValue) {
    this.startLoading()
    const characterImageUrl = await this.imageFileSubmit(
      this.uploadCharacterImage,
      `/characters/${this.uploadCharacterFileName}`
    )
    const materialImageUrl = await this.imageFileSubmit(
      this.uploadMaterialImage,
      `/items/${this.uploadMaterialFileName}`
    )

    const character: CharacterData = {
      index: this.characters.length,
      characterName: formValue.characterName,
      materialName: formValue.materialName,
      characterImageUrl,
      materialImageUrl,
      description: formValue.description
    }

    const usersRef = db.collection('characters')
    await usersRef.add(character)
    alert('アップロードしました！')
    this.endLoading()
    // TOPへ戻る
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
</style>
