import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    setCategoryList (state, payload) {
      state.categoryList = payload
    },
    addDataToPaymentsList (state, payload) {
      state.paymentsList.push(payload)
    }
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          const items = []
          for (let i = 1; i < 51; i++) {
            items.push({
              date: '27.09.2021',
              category: 'Education',
              amount: i
            })
          }
          resolve(items)
        }, 2000)
      }).then(res => {
        commit('setPaymentsListData', res)
      })
    },
    fetchCategoryList ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(['Food', 'Navigation', 'Sport', 'Entertaiment', 'Education', 'Work'])
        }, 1000)
      }).then(res => {
        commit('setCategoryList', res)
      })
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListFullPrice: state => {
      return state.paymentsList.reduce((res, current) => res + current.amount, 0)
    },
    getCategoryList: state => state.categoryList
  }
})
