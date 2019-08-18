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
          <div class="upload-button">
            Click to upload
            <input type="file" class="upload" @change="selectFile" />
          </div>
          <p>{{ uploadFileName }}</p>
        </label>
      </div>
      <div class="form-group">
        <label>
          <span class="label">アイテム画像</span>
          <div class="upload-button">
            Click to upload
            <input type="file" class="upload" @change="selectFileItem" />
          </div>
          <p>{{ uploadItemFileName }}</p>
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

  // 画像の型とは
  uploadFile: any | null = null
  uploadFileName: string = ''
  uploadItemFile: any | null = null
  uploadItemFileName: string = ''

  name: string = ''
  item: string = ''
  image: string = ''
  itemImage: string = ''
  description: string = ''

  selectFile(event): void {
    event.preventDefault()
    const files = event.target.files
    this.uploadFile = files[0]
    this.uploadFileName = this.uploadFile.name
  }

  selectFileItem(event): void {
    event.preventDefault()
    const files = event.target.files
    this.uploadItemFile = files[0]
    this.uploadItemFileName = `/items/${this.uploadFile.name}`
  }

  private async formSubmit() {
    await uploadStorageUrl(
      this.uploadFile,
      `/characters/${this.uploadFileName}`
    )
    await uploadStorageUrl(
      this.uploadItemFile,
      `/items/${this.uploadItemFileName}`
    )

    this.image = await getStorageUrl(`/characters/${this.uploadFileName}`)
    this.itemImage = await getStorageUrl(`/items/${this.uploadItemFileName}`)

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
