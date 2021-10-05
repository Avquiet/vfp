<template>
  <div class="info">
    <input class="info-put" placeholder="Value" v-model="amount"/>
    <input class="info-put" placeholder="Date" v-model="date"/>
    <select class="put-category" v-model="type">
      <option class="put-option" v-for="option in categoryList" :key="option">
        {{ option }}
      </option>
    </select>
    <button class="info-button" @click="onSaveClick">ADD&nbsp;&nbsp;&nbsp;&nbsp;+</button>
  </div>
</template>
<script>

export default {
  name: 'AddPaymentForm',
  props: {
    categoryList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      amount: '',
      type: '',
      date: ''
    }
  },
  computed: {
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
        amount: Number(this.amount),
        type: this.type,
        date: this.date || this.getCurrentDate
      }
      this.$emit('addNewPayment', data)
    }
  },
  created () {
    this.type = this.$route.params.type
  }
}

</script>
<style>
.info {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.info-put {
  border-top: 1px solid gainsboro;
  border-right: 1px solid gainsboro;
  padding: 8px;
  margin-top: 10px;
  width: 200px;
  outline: none;
}
.info-button {
  margin-left: 100px;
  width: 120px;
  padding: 5px;
  margin-top: 10px;
  color: #fff;
  border: none;
  background:rgba(3, 201, 175, 0.849)
}

.info-button:hover {
  background: lightgrey;
  cursor: pointer;
}
.put-category {
  margin-top: 10px;
  padding: 8px;
  width: 219px;
  border-top: 1px solid gainsboro;
  border-right: 1px solid gainsboro;
  outline: none;
}
</style>
