<template>
  <div>
    <form>
      <tg-field label="test">
        <tg-input
          v-model="value"
          name="test"
          placeholder="placeholder"
        ></tg-input>
      </tg-field>
      <!-- <tg-button @button-click="formSubmit">登録</tg-button> -->
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
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
  value: string = ''
}
</script>

<style lang="scss" scoped></style>
