<template>
  <div>
    <header class="header">
      <router-link to="/dashboard">dashboard</router-link>
      <router-link to="/about">about</router-link>
      <div @click="goToPage('NotFound')">404</div>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
  }),
  computed: {},
  methods: {
    goToPage (pageName) {
      this.$router.push({
        name: pageName
      })
    }
  },
  mounted () {
  },
  created () {
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCategoryList')
  }
}
</script>
