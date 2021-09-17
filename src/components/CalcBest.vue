<template>
  <div class='calc'>
    <div class="main">
      <input v-model="op1" type="number" />
      <input v-model="op2" type="number" />
      <h3>= {{ result }}</h3>
    </div>
    <div class="keyboard">
      <button @click="plus">+</button>
      <button @click="sub">-</button>
      <button @click="div">/</button>
      <button @click="multi">*</button>
      <button @click="degree">^**</button>
      <button @click="integer">%</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      op1: '',
      op2: '',
      result: ''
    }
  },
  methods: {
    integer () {
      const { op1, op2 } = this
      this.result = op1 % op2
    },
    degree () {
      const { op1, op2 } = this
      this.result = op1 ** op2
    },
    plus () {
      const { op1, op2 } = this
      this.result = op1 + op2
    },
    sub () {
      const { op1, op2 } = this
      this.result = op1 - op2
    },
    div () {
      const { op1, op2 } = this
      this.result = op1 / op2
    },
    multi () {
      const { op1, op2 } = this
      this.result = op1 * op2
    }
  }
}
</script>
