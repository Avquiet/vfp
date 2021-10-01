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
    // editValue (state, payload) {
    //   state.paymentsList[0] = payload
    //   state.paymentsList = [...state.paymentsList]
    // Vue.set(state.paymentsList, 0, payload)
    // }
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          const items = []
          for (let i = 1; i < 1; i++) {
            items.push({
              page1: [
                { id: 1, date: '20.03.2020', category: 'Food', value: 169 },
                { id: 2, date: '21.03.2020', category: 'Navigation', value: 50 },
                { id: 3, date: '22.03.2020', category: 'Sport', value: 450 }
              ],
              page2: [
                { id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969 },
                { id: 5, date: '24.03.2020', category: 'Education', value: 1500 },
                { id: 6, date: '25.03.2020', category: 'Work', value: 200 }
              ]
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
      return state.paymentsList.reduce((res, cur) => res + cur.amount, 0)
    },
    getCategoryList: state => state.categoryList
  }
})
