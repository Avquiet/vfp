<template>
  <div class='calc'>
    <v-container>
    <div class="main">
      <v-text-field v-model.number="operand1" name="operand1"></v-text-field>
      <v-text-field v-model.number="operand2" name="operand2"></v-text-field>
      <h3 class="result-table"> = {{ result }}</h3>
      <h6> {{ error }}</h6>
    </div>
    <div class="keyboard">
      <v-btn v-for="operand in operands" :key="operand" @click="calculate(operand)" name="operand"  :disabled="operand === operand && operand2 === 0">
        {{ operand }}
      </v-btn>
    </div>
    <div class="keyboard">
      <v-btn @click="onClick(element)" name="element" :title="element" v-show="board" v-for="element in myCollections" :key="element">
        {{ element }}
      </v-btn>
      <v-btn @click="deleteElement(element)" name="deleteElement" v-show="board">&#8592;</v-btn>
    </div>
      <v-checkbox name="board" type="checkbox" id="checkbox" v-model="board"></v-checkbox>
      <p class="text-check">{{ 'Show On-Screen Keyboard' }}</p>
      <v-radio-group v-model="clickOp">
        <v-radio
          name="op1"
          :label="`Operand ${1}`"
          value="1"
        ></v-radio>
        <v-radio
          name="op2"
          :label="`Operand ${2}`"
          value="2"
        ></v-radio>
      </v-radio-group>
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
      myCollections: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
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
  margin-top: -45px;
  margin-left: 35px;
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
