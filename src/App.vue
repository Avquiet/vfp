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
    <transition name="fade">
      <modalWindowMenu v-bind="modalSettings" v-if="modalSettings.modalIsShow"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    modalSettings: {
      modalIsShow: false
    },
    modalMenuSettings: {
      modalReName: false
    }
  }),
  components: {
    ModalWindowMenu: () => import('./components/ModalWindowMenu.vue')
  },
  computed: {},
  methods: {
    goToPage (pageName) {
      this.$router.push({
        name: pageName
      })
    },
    onShown (settings) {
      this.modalSettings = settings
      this.modalSettings.modalIsShow = true
    },
    showMenu (settings) {
      this.modalMenuSettings = settings
      this.modalMenuSettings.modalReName = true
    },
    onHide () {
      this.modalSettings = {}
      this.modalSettings.modalIsShow = false
    },
    hideMenu () {
      this.modalMenuSettings = {}
      this.modalMenuSettings.modalReName = false
    }
  },
  mounted () {
    this.$modal.EventBus.$on('showMenu', this.showMenu)
    this.$modal.EventBus.$on('onHide', this.onHide)
    this.$modal.EventBus.$on('onShown', this.onShown)
    this.$modal.EventBus.$on('hideMenu', this.hideMenu)
  },
  created () {
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCategoryList')
  }
}
</script>
