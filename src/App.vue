<template>
  <div id="app">
    <header>
      <h1>My personal costs</h1>
      <button class="info-button2" @click="show=!show">ADD NEW COSTS&nbsp;&nbsp;&nbsp;+</button>
    </header>
    <main>
      <AddPaymentForm @addNewPayment="addNewPayment" :categoryList="getCategoryList" v-if="show"/>
      <PaymentsDisplay :items="currentElements"/>
      <Pagination :current="current" :n="n" :length="getPaymentsList.length" @paginate="reName"/>
    </main>
  </div>
</template>
<script>
import PaymentsDisplay from './components/PaymentsDisplay'
import AddPaymentForm from './components/AddPaymentForm.vue'
import Pagination from './components/Pagination.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination
  },
  data: () => ({
    current: 1,
    n: 10,
    show: false,
    fields: {}
  }),
  computed: {
    ...mapGetters([
      'getPaymentsList',
      'getCategoryList'
    ]),
    getFPV () {
      return this.$store.getters.getPaymentsListFullPrice
    },
    paymentsList () {
      return this.$store.getters.getPaymentsList
    },
    currentElements () {
      const { n, current } = this
      return this.paymentsList.slice(n * (current - 1), n * (current - 1) + n)
    }
  },
  methods: {
    ...mapMutations({
      addData: 'setPaymentsListData'
    }),
    addNewPayment (data) {
      this.$store.commit('addDataToPaymentsList', data)
    },
    reName (p) {
      this.current = p
    }
  },
  created () {
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCategoryList')
  }
}
</script>
<style>
  body {
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  }
  .info-button2 {
    width: 150px;
    padding: 7px;
    color: #fff;
    border: none;
    background:rgba(3, 201, 175, 0.849)
  }

  .info-button2:hover {
  background: lightgrey;
  cursor: pointer;
}
</style>
