<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <input
      type="text"
      placeholder="text"
      @blur="blurMethod"
      @focus="focusMethod"
      @keydown="blurMethod"
      @keyup="focusMethod"
    />
    <button @click="c = a + b">Click</button>
    <button @click="doThat('Hello', $event)">Clear</button>
    {{ c }} -->
    <calc />
  </div>
</template>

<script>
import Calc from './components/CalcBest.vue'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Calc
  },
  data: () => ({
    show: false,
    c: 0,
    a: 1,
    b: 1
  }),
  methods: {
    doThat (str, event) {
      console.log(str, event)
      this.c = 0
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 20px;
}
</style>
