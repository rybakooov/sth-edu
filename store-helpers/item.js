import Vue from 'vue'

export default function (url, filter = {}, options = {}) {
  return {
    namespaced: true,
    state: {
      filter: { ...filter },
      items: {}
    },
    getters: {
      getItem: state => id => state.items[id]
    },
    actions: {
      // async create ({ dispatch }, data) {
      //   const path = await dispatch('getUrl')
      //   const result = await this.$api.post(path, data)
      //   return result.data
      // },
      updateUrl (store, newUrl) {
        url = newUrl
      },
      getUrl (store, id) {
        return `${url}/${id}`
      },
      setFilter ({ commit }, filter) {
        commit('reset')
        commit('filter', filter)
      },
      async get ({ state, dispatch, commit, getters }, { id, filter }) {
        const path = await dispatch('getUrl', id)
        
        try {
          const requestFilter = {
            ...state.filter,
            ...filter
          }
          const result = await this.$api.get(path, { params: requestFilter })
          commit('item', { id, data: result.data })
          return result.data
        } catch (e) {
          commit('item', { id, data: null })
        }
      }
      // async remove ({ commit, dispatch }, id) {
      //   const path = await dispatch('getUrl') + '/' + id
      //   const result = await this.$api.delete(path)
      //   commit('remove', id)
      //   return result
      // },
      // async update ({ commit, dispatch }, { id, updates }) {
      //   const path = await dispatch('getUrl') + '/' + id
      //   const result = await this.$api.put(path, updates)
      //   commit('update', result.data)
      //   return result.data
      // },
      // reset ({ commit }) {
      //   commit('reset')
      // }
    },
    mutations: {
      update (state, data) {
        const item = state.items[+data.id]
        if (item) {
          Object.keys(data).forEach((key) => {
            Vue.set(item, key, data[key])
          })
        }
      },
      item (state, { id, data }) {
        Vue.set(state.items, id, data)
      },
      // reset (state) {
      //   state.list = []
      //   state.filter = { ...filter }
      //   state.meta = null
      // },
      filter (state, update = {}) {
        state.filter = { ...filter, ...update }
      }
      // remove (state, id) {
      //   const index = state.list.findIndex(item => item.id === +id)
      //   if (index > -1) {
      //     state.list.splice(index, 1)
      //   }
      //   state.meta.totalCount = state.meta.totalCount - 1
      // }
    }
  }
}
