<template>
  <div class='calc'>
    <div class="main">
      <input v-model.number="operand1" name="operand1"/>
      <input v-model.number="operand2" name="operand2"/>
      <h3>= {{ result }}</h3>
      <h6> {{ error }}</h6>
    </div>
    <div class="keyboard">
      <button v-for="operand in operands" :key="operand" @click="calculate(operand)" name="operand"  :disabled="operand === '/' && operand2 === 0">
        {{ operand }}
      </button>
    </div>
      <button @click="onClick(element)" name="element" :title="element" v-show="board" v-for="element in myCollections" :key="element">
        {{ element }}
      </button>
      <button @click="deleteElement(element)" name="deleteElement" v-show="board">&#8592;</button>
      <p>{{ 'Отобразить экранную клавиатуру' }}
        <input name="board" type="checkbox" id="checkbox" v-model="board">
      </p>
      <label><input type="radio" name="op1" v-model="clickOp" value="1">Операнд 1</label>
      <label><input type="radio" name="op2" v-model="clickOp" value="2">Операнд 2</label>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      error: '',
      clickOp: '',
      operands: ['+', '-', '/', '*', '**', '%'],
      myCollections: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      board: true
    }
  },
  methods: {
    deleteElement () {
      const { clickOp } = this
      const input = clickOp === '1' ? 'operand1' : 'operand2'
      // this[input] = Math.trunc(this[input] / 10)
      this[input] = +String(this[input]).slice(0, -1)
    },
    onClick (myCollections) {
      const { clickOp } = this
      const input = clickOp === '1' ? 'operand1' : 'operand2'
      this[input] = +(this[input] += String(myCollections))
    },

    calculate (operand) {
      const operand1 = this.operand1
      const operand2 = this.operand2

      const calcOperations = {
        '+': () => operand1 + operand2,
        '-': () => operand1 - operand2,
        '/': () => operand1 / operand2,
        '*': () => operand1 * operand2,
        '**': () => operand1 ** operand2,
        '%': () => operand1 % operand2
      }
      this.result = calcOperations[operand]()
    }
  }
}
</script>
