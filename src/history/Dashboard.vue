<template>
  <v-container>
    <add-payment-form />
    <PaymentDisplay show-items :items="paymentsList" />
    <pagination :cur="page" :n="n" :length="getPaymentsList.length" @paginate="changePage"/>
  </v-container>
</template>

<script>
import PaymentDisplay from '../components/PaymentDisplay.vue'
import { mapMutations, mapGetters } from 'vuex'
import AddPaymentForm from '../components/AddPaymentForm.vue'
import Pagination from '../components/Pagination.vue'
export default {
  components: { PaymentDisplay, AddPaymentForm, Pagination },
  name: 'Dashboard',
  data: () => ({
    dialog: false,
    page: 1,
    n: 3
  }),
  computed: {
    ...mapGetters(['getPaymentsList']),
    paymentsList () {
      return this.$store.getters.getPaymentsList
    },
    currentElements () {
      const { n, page } = this
      return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n)
    }
  },
  methods: {
    ...mapMutations({
      addData: 'setPaymentsListData'
    }),
    changePage (p) {
      this.page = p
      this.$store.dispatch('fetchData', p)
    },
    addPayment () {
      this.$modal.show({ title: 'Add Payment Form', content: 'AddPaymentForm' })
    }
  },
  created () {
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCategoryList')
  }
}
</script>

<style></style>
