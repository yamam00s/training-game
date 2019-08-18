import { MutationTree, GetterTree } from 'vuex'
import { FormState } from '~/types'

export const state = (): FormState => ({
  name: '',
  item: '',
  itemImage: '',
  description: ''
})

export const getters: GetterTree<FormState, FormState> = {
  name: (state) => state.name,
  item: (state) => state.item,
  itemImage: (state) => state.itemImage,
  description: (state) => state.description
}

export const mutations: MutationTree<FormState> = {
  setName(state: FormState, name: string): void {
    state.name = name
  },
  setItem(state: FormState, item: string): void {
    state.item = item
  },
  setItemImage(state: FormState, itemImage: string): void {
    state.itemImage = itemImage
  },
  setDescription(state: FormState, description: string): void {
    state.description = description
  }
}
