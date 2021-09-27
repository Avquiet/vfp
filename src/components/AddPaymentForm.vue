<template>
  <div class="info" v-show="true">
    <input class="info-put" placeholder="Value" v-model="value"/>
    <input class="info-put" placeholder="Category" v-model="category"/>
    <input class="info-put" placeholder="Date" v-model="date"/>
    <button class="info-button" @click="onSaveClick">ADD&nbsp;&nbsp;&nbsp;&nbsp;+</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      category: '',
      date: ''
    }
  },
  computed: {
    getCurrentDate () {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  methods: {
    onSaveClick () {
      const data = {
        value: +this.value,
        category: this.category,
        date: this.date || this.getCurrentDate
      }
      this.$emit('addNewPayment', data)
    }
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
</style>
