<template>
  <div class="text-center">
    <v-pagination
      color="teal"
      v-model="page"
      :key="i"
      length="4"
      :class="{ active: cur === i }"
      @click="onClick(i)"
    >
      {{ i }}
    </v-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1
    }
  },
  name: 'Pagination',
  props: {
    n: Number,
    cur: Number,
    length: Number
  },
  computed: {
    amount () {
      return Math.ceil(this.length / this.n)
    }
  },
  methods: {
    onClick (p) {
      if (p < 1 || p > this.amount) {
        return
      }
      this.$emit('paginate', p)
    }
  }
}
</script>

<style>
.v-pagination__navigation {
  box-shadow: #fff;
}
.v-pagination__item {
  box-shadow: none;
}
</style>
