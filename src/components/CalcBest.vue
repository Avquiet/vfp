<template>
  <div class='calc'>
    <div class="main">
      <input v-model.number="op1" type="number"/>
      <input v-model.number="op2" type="number"/>
      <h3>{{ result }}</h3>
      <h6>{{ error }}</h6>
    </div>
    <div class="keyboard">
      <button v-for="operand in operands" :key="operand" @click="calculate(operand)" v-bind:title="operand" v-bind:disabled="op1 === '' || op2 === '' ">
        {{ operand }}
      </button>
    </div>
      <button @click="onClick(value)" :title="value" v-show="board" v-for="value in myCollections" :key="value">
        {{ value }}
      </button>
      <button @click="deleteElement(operch)" v-show="board">&#8592;</button>
      <p>{{ 'Отобразить экранную клавиатуру' }}
        <input type="checkbox" id="checkbox" v-model="board">
      </p>
      <input type="radio" v-model="clickOp" value="op1">
      <label for="one">Операнд 1</label>
      <input type="radio" v-model="clickOp" value="op2">
      <label for="two">Операнд 2</label>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      op1: '',
      op2: '',
      result: '',
      error: '',
      clickOp: 'op1',
      operands: ['+', '-', '/', '*', '**', '%'],
      myCollections: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      board: true
    }
  },
  methods: {
    deleteElement (operch) {
      const input = operch === '1' ? 'op1' : 'op2'
      this[input] = Math.trunc(this[input] / 10)
      this[input] = +String(this[input]).slice(0, -1)
    },
    onClick (value) {
      const { operch } = this
      const input = operch === '1' ? 'op1' : 'op2'
      this[input] = +(this[input] += String())
      this[this.clickOp] += value
    },
    calculate (operation = '+') {
      switch (operation) {
        case '+':
          this.plus()
          break
        case '-':
          this.sub()
          break
        case '*':
          this.multi()
          break
        case '/':
          this.div()
          break
        case '%':
          this.procent()
          break
        case '**':
          this.degree()
          break
      }
    },
    plus () {
      const { op1, op2 } = this
      this.result = op1 + op2
    },
    sub () {
      const { op1, op2 } = this
      this.result = op1 - op2
    },
    multi () {
      const { op1, op2 } = this
      this.result = op1 * op2
    },
    div () {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = 'ОШИБКА: Делить на 0 нельзя!'
      } else {
        this.result = op1 / op2
      }
    },
    procent () {
      const { op1, op2 } = this
      this.result = op1 % op2
    },
    degree  () {
      const { op1, op2 } = this
      this.result = op1 ** op2
    }
  }
}
</script>
