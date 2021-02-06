import {SET_OBJ} from "../assets/js/mutations";

export const state = () => ({
  windowWidth: null,
  payCur: [
    {id: 0, name: '%'},
    {id: 1, name: '€'},
  ],
  breadcrumbs: [],
  sidebarMenu: true,
})

export const mutations = { SET_OBJ,
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

export const actions = {
  async nuxtServerInit({state, commit, dispatch}, ctx) {

  }
}

export const getters = {}





