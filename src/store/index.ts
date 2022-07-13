import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

const state = {
  isCollapse: false,
  isFullScreen: false
}

export type State = typeof state

export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state,
  mutations: {
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    },

    setIsFullScreen (state, payload) {
      state.isFullScreen = payload
    }
  }
})
export function useStore () {
  return baseUseStore(key)
}
