<template>
<v-card class="text-left pa-8">
  <v-text-field type="date" v-model="date" label="Date"/>
  <v-select v-model="type" label="Category" :items="categoryList" />
  <v-text-field v-model="value" label="Value"/>
    <v-btn color="teal" dark @click="onSaveClick">Save!</v-btn>
</v-card>
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
