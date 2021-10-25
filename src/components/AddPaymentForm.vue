<template>
<div></div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  data: () => ({
    value: '',
    type: '',
    date: ''
  }),
  computed: {
    categoryList () {
      return this.$store.getters.getCategoryList
    },
    getCurrentDate () {
      return new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).format(new Date())
    }
  },
  methods: {
    onSaveClick () {
      const data = {
        value: Number(this.value),
        category: this.type,
        date: this.date || this.getCurrentDate
      }
      this.addData(data)
    },
    addData (data) {
      this.$store.commit('addDataToPaymentsList', data)
    }
  }
}
</script>
