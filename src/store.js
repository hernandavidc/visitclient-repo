import Vue from 'vue'
import Vuex from 'vuex'
import dates from '@/modules/dates'
import cities from '@/modules/cities'
import states from '@/modules/states'
import sellers from '@/modules/sellers'
import clients from '@/modules/clients'
import auth from '@/modules/authentication'
import countries from '@/modules/countries'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth']
})

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading (state, bool) {
      state.loading = bool
    }
  },
  modules: {
    auth,
    countries,
    states,
    cities,
    clients,
    sellers,
    dates
  },
  plugins: [vuexLocal.plugin]
})
