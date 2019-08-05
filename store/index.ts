import { RootState, IndexState } from '~/types'
import { MutationTree, GetterTree } from 'vuex'

export const state = (): IndexState => ({
  isLive: true,
})

export const getters: GetterTree<IndexState, RootState> = {
  isLive: state => state.isLive,
}

export const mutations: MutationTree<IndexState> = {
  setLive(state: IndexState, isLive: boolean): void {
    state.isLive = isLive
  }
}
