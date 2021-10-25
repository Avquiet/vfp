<template>
  <div class="showMenu" v-if="modalIsShow">
    <div class="hideMenu">{{ header }}</div>
    <div class="menu">
      <component :is="menu" />
      <div class="podval">
        <button class="menu-but" >Редактировать</button>
        <button class="menu-but" @click="openCloseMenu">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalWindowMenu',
  components: {
    ContextMenu: () => import('./ContextMenu.vue')
  },
  props: {
    menu: String,
    info: String,
    modalIsShow: Boolean
  },
  methods: {
    openCloseMenu () {
      this.$modal.hide()
    }
  }
}
</script>

<style>
.showMenu {
  position: absolute;
  top: 415px;
  bottom: 0;
  right: 0;
  left: 475px;
}
.hideMenu {
  z-index: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.menu {
  position: relative;
  z-index: 100;
}

.menu-but {
  background: #fff;
  margin-top: 5px;
  border: none;
  border: 1px solid lightgrey;
}
.menu-but:hover {
  cursor: pointer;
  color: grey;
}
.podval {
  display: flex;
  flex-direction: column;
  width: 105px;
  background: #fff;
}
</style>
