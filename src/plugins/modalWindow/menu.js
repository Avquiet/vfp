export default {
  install (Vue) {
    if (this.installed) {
      return
    }
    this.installed = true

    Vue.prototype.$modal = {
      EventBus: new Vue(),

      menu (setting) {
        this.EventBus.$emit('showMenu', setting)
        console.log('showingMenu', setting)
      },

      hidingMenu () {
        this.EventBus.$emit('hideMenu')
        console.log('hidingMenu')
      }
    }
  }
}
