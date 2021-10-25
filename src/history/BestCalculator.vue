<template>
  <div class='calc'>
    <v-container>
    <div class="main">
      <v-text-field v-model.number="operand1" name="operand1"></v-text-field>
      <v-text-field v-model.number="operand2" name="operand2"></v-text-field>
      <h3 class="result-table"> {{ result }}</h3>
      <h6> {{ error }}</h6>
    </div>
    <div class="keyboard">
      <v-btn v-for="operand in operands" :key="operand" @click="calculate(operand)" name="operand"  :disabled="operand === '/' && operand2 === 0">
        {{ operand }}
      </v-btn>
    </div>
      <v-btn class="keyboard" @click="onClick(element)" name="element" :title="element" v-show="board" v-for="element in myCollections" :key="element">
        {{ element }}
      </v-btn>
      <v-btn @click="deleteElement(element)" name="deleteElement" v-show="board">&#8592;</v-btn>
      <p class="text-check">{{ 'Отобразить экранную клавиатуру' }}
        <v-checkbox class="text-check2" name="board" type="checkbox" id="checkbox" v-model="board"></v-checkbox>
      </p>
      <label><input type="radio" name="op1" v-model="clickOp" value="1">Операнд 1</label>
      <label><input type="radio" name="op2" v-model="clickOp" value="2">Операнд 2</label>
    </v-container>
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

<style>
.text-check {
  position: relative;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  margin-left: 100px;
}
.text-check2 {
  top: 20px;
  position: absolute;
  text-align: center;
  margin-left: 200px;
}
.result-table {
  text-align: center;
}
.keyboard {
  margin: 0 auto;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
