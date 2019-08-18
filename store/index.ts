import { MutationTree, GetterTree, ActionTree } from 'vuex'
import { firestoreAction, vuexfireMutations } from 'vuexfire'
import { db } from '~/plugins/firebase'
import { IndexState } from '~/types'

export const state = (): IndexState => ({
  // isLoading: false,
  characters: [],
  character: {
    index: 0,
    characterName: '',
    materialName: '',
    characterImageUrl: '',
    materialImageUrl: '',
    description: ''
  }
})

export const getters: GetterTree<IndexState, IndexState> = {
  // isLoading: (state) => state.isLoading,
  characters: (state) => state.characters
}

export const mutations: MutationTree<IndexState> = {
  // startLoading(state: IndexState): void {
  //   state.isLoading = true
  // },
  // endLoading(state: IndexState): void {
  //   state.isLoading = false
  // },
  setCharacters(state: IndexState, characters: []): void {
    state.characters = characters
  },
  ...vuexfireMutations
}

export const actions: ActionTree<IndexState, IndexState> = {
  setCharactersRef: firestoreAction(({ bindFirestoreRef }) => {
    // this will unbind any previously bound ref to 'todos'
    bindFirestoreRef('characters', db.collection('characters'))
    // you can unbind any ref easily
    // unbindFirestoreRef('characters')
  })
}
