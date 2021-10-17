<template>
  <div class="pagination__wrapper">
    <div @click="onClick(cur - 1)"> <v-icon
      >
        mdi-chevron-left
      </v-icon></div>
    <div
      v-for="i in amount"
      :key="i"
      :class="{ active: cur === i }"
      @click="onClick(i)"
    >
      {{ i }}
    </div>
    <div @click="onClick(cur + 1)"><v-icon
      >
        mdi-chevron-right
      </v-icon></div>
  </div>
</template>

<script>
export default {
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

<style lang="scss" scoped>
.pagination {
  &__wrapper {
    justify-content: center;
    display: flex;
    & > div {
      cursor: pointer;
      padding: 10px;
    }
  }
}
.active {
    color: teal;
}
</style>
