import Vue from 'vue'

/**
 *
 * @param url
 * @param filter
 * @param options Object
 * @param options.pagination String ['' | 'page'| 'lastId'], Default: page
 */
export default function (url, filter = {}, options = { pagination: 'page' }) {
  let defaultFilter = {
    'per-page': 10,
    ...filter
  }
  
  if (options.pagination === 'page') {
    defaultFilter.page = 1
  }
  
  return {
    namespaced: true,
    state: {
      filter: { ...defaultFilter },
      list: [],
      meta: null,
      isFetching: false
    },
    getters: {
      isLastPage: (state) => {
        if (options.pagination === 'page') {
          return state.meta ? state.filter.page >= state.meta.pageCount : false
        } else if (options.pagination === 'lastId') {
          return state.meta ? !state.meta.totalCount : false
        }
        return true
      }
    },
    actions: {
      async create ({ dispatch }, data) {
        const path = await dispatch('getUrl')
        const result = await this.$api.post(path, data)
        return result.data
      },
      async getRequest ({ dispatch, state }, filter = {}) {
        const path = await dispatch('getUrl', filter)
        const initialFilter = { ...state.filter, ...filter }
        const result = await this.$api.get(path, { params: initialFilter })
        return result?.data
      },
      async createAndPush ({ commit, dispatch }, data) {
        const result = await dispatch('create', data)
        commit('push', [result])
        return result
      },
      async createAndUnshift ({ commit, dispatch }, data) {
        const result = await dispatch('create', data)
        commit('unshift', [result])
        return result
      },
      updateUrl (store, newUrl) {
        url = newUrl
      },
      getUrl () {
        return url
      },
      
      updateDefaultFilter ({ commit }, filter = {}) {
        defaultFilter = { ...defaultFilter, ...filter }
        commit('reset')
      },
      
      setFilter ({ commit }, filter) {
        commit('reset')
        commit('filter', filter)
      },
      
      async get ({ state, dispatch, commit, getters }, filter = {}) {
        if (state.isFetching) {
          return
        }
        
        if (options.pagination === 'page') {
          filter.page = 1
        } else if (options.pagination === 'lastId') {
          filter.last_id = null
        }
        
        try {
          commit('isFetching', true)
          const result = await dispatch('getRequest', filter)
          commit('meta', result)
          
          if (!options.pagination) {
            commit('list', result)
            return result
          } else {
            commit('list', result.items)
            return result.items
          }
        } finally {
          commit('isFetching', false)
        }
      },
      
      async getNextPage ({ state, dispatch, commit, getters }, filter = {}) {
        if (state.isFetching || getters.isLastPage) {
          return []
        }
        
        try {
          commit('isFetching', true)
          if (options.pagination === 'page') {
            commit('nextPage')
            filter.page = state.filter.page
          } else if (options.pagination === 'lastId') {
            const lastItem = state.list[state.list.length - 1]
            if (lastItem) {
              filter.last_id = lastItem.id
            }
          }
          const result = await dispatch('getRequest', filter)
          commit('meta', result)
          if (result && result.items) {
            commit('list', state.list.concat(result.items))
            return result.items
          }
        } finally {
          commit('isFetching', false)
        }
      },
      
      async remove ({ commit, dispatch }, id) {
        const path = await dispatch('getUrl') + '/' + id
        const result = await this.$api.delete(path)
        commit('remove', id)
        return result
      },
      async update ({ commit, dispatch }, { id, updates }) {
        const path = await dispatch('getUrl') + '/' + id
        const result = await this.$api.put(path, updates)
        commit('update', result.data)
        return result.data
      },
      unshift ({ commit }, data) {
        commit('unshift', data)
      },
      push ({ commit }, data) {
        commit('push', data)
      },
      reset ({ commit }) {
        commit('reset')
      }
    },
    mutations: {
      unshift (state, data = []) {
        state.list.unshift(...data)
        if (state.meta) {
          state.meta.totalCount = state.meta.totalCount + data.length
        }
      },
      push (state, data = []) {
        state.list.push(...data)
        if (state.meta) {
          state.meta.totalCount = state.meta.totalCount + data.length
        }
      },
      update (state, data) {
        const index = state.list.findIndex(item => item.id === +data.id)
        if (index > -1) {
          Object.keys(data).forEach((key) => {
            Vue.set(state.list[index], key, data[key])
          })
        }
      },
      isFetching (state, isFetching) {
        state.isFetching = isFetching
      },
      list (state, list) {
        state.list = list
      },
      reset (state) {
        state.list = []
        state.filter = { ...defaultFilter }
        state.meta = null
      },
      nextPage (state) {
        state.filter.page = state.filter.page + 1
      },
      filter (state, filter = {}) {
        state.filter = { ...defaultFilter, ...filter }
      },
      meta (state, result = {}) {
        if (result._meta) {
          state.meta = result._meta
        }
      },
      remove (state, id) {
        const index = state.list.findIndex(item => item.id === +id)
        if (index > -1) {
          state.list.splice(index, 1)
        }
        state.meta.totalCount = state.meta.totalCount - 1
      }
    }
  }
}
