<template>
<div class="pag-container">
    <button class="btn-active" @click="clickAbel(current - 1)">&#9665;</button>
    <button
        class="btn-active"
        v-for="i of amount"
        :key="i"
        :class="{ active: current === i }"
        @click="clickAbel(i)"
        >
        {{ i }}
    </button>
    <button class="btn-active" @click="clickAbel(current + 1)">&#9655;</button>
</div>

</template>

<script>
export default {
  name: 'Pagination',
  props: {
    n: Number,
    current: Number,
    length: Number
  },
  methods: {
    clickAbel (p) {
      if (p < 1 || p > this.amount) {
        return
      }
      this.$emit('paginate', p)
    }
  },
  computed: {
    amount () {
      return Math.ceil(this.length / this.n)
    }
  }
}
</script>

<style>
.btn-active {
  border-radius: 5px;
  margin: 0 auto;
  align-items: center;
  background: #fff;
  border: none;
  margin-left: 5px;
}
.btn-active:hover {
  background:grey;
}
.pag-container {
  border: 1px solid gainsboro;
  padding: 5px;
  width: 300px;
  margin-left: 70px;
}
.active {
  color: rgba(3, 201, 175, 0.849);
}
.active:hover {
  color: rgba(3, 201, 175, 0.849);
}
</style>
