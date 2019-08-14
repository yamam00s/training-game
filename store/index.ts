import { MutationTree, GetterTree } from 'vuex'
import { RootState, IndexState } from '~/types'

export const state = (): IndexState => ({
  currentIndex: 0
})

export const getters: GetterTree<IndexState, RootState> = {
  currentIndex: (state) => state.currentIndex
}

export const mutations: MutationTree<IndexState> = {
  setCurrentIndex(state: IndexState, currentIndex: number): void {
    state.currentIndex = currentIndex
  }
}
