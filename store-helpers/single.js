export default function (url, filter = {}, options = { cache: 0 }) {
  return {
    namespaced: true,
    
    state: {
      filter: { ...filter },
      data: null,
      lastRequest: 0
    },
    
    actions: {
      getUrl () {
        return url
      },
      async get ({ state, dispatch, commit, getters }, filter = {}) {
        const path = await dispatch('getUrl')
        const availableRequest = options.cache ? state.lastRequest + options.cache < Date.now() : true
        const requestFilter = {
          ...state.filter,
          ...filter
        }
        
        if (availableRequest) {
          const result = await this.$api.get(path, { params: requestFilter })
          commit('data', result.data)
          commit('lastRequest')
          return result.data
        } else {
          return state.data
        }
      },
      async update ({ commit, dispatch }, { id, updates }) {
        const path = await dispatch('getUrl') + '/' + id
        const result = await this.$api.put(path, updates)
        commit('data', result.data)
        return result.data
      },
      reset ({ commit }) {
        commit('data', null)
      }
    },
    
    mutations: {
      data (state, data = null) {
        state.data = data
      },
      lastRequest (state) {
        state.lastRequest = Date.now()
      }
    }
  }
}
