<template>
  <div>
    <header>
      <h1>My personal costs</h1>
      <button class="info-button2" @click="show=!show">ADD NEW COSTS&nbsp;&nbsp;&nbsp;+</button>
    </header>
    <main>
      <AddPaymentForm @addNewPayment="addNewPayment" v-if="show"/>
      <PaymentsDisplay :items="paymentsList"/>
    </main>
  </div>
</template>
<script>
import PaymentsDisplay from './components/PaymentsDisplay'
import AddPaymentForm from './components/AddPaymentForm.vue'

export default {
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  data () {
    return {
      paymentsList: [],
      show: false
    }
  },
  methods: {
    addNewPayment (data) {
      this.paymentsList = [...this.paymentsList, data]
    }
  },
  created () {
    this.paymentsList = this.fetchData()
  }
}
</script>
<style>
  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
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
