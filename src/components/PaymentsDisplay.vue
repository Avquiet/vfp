<template>
  <div class="info-item-list">
    <ul class="list-items">
      <h4 class="list-property">#<li class="info-list" v-for="(item, index) of items" :key="index">&nbsp;&nbsp;{{ index + 1 }}</li></h4>
      <h4 class="list-property">Date:<li class="info-list" v-for="item of items" :key="item">&nbsp;&nbsp;{{ item.date }}</li></h4>
      <h4 class="list-property">Type:<li class="info-list" v-for="item of items" :key="item">&nbsp;&nbsp;{{ item.type }}</li></h4>
      <h4 class="list-property">Amount:<li class="info-list" v-for="item of items" :key="item">&nbsp;&nbsp;{{ item.amount }}
        <button @click="openContextMenu">&#8942;</button></li></h4>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    items: {
      props: ['items']
    }
  },
  methods: {
    openContextMenu () {
      this.$modal.show({ info: 'menu', menu: 'ContextMenu' })
    }
  }
}
</script>
<style>
.list-property {
  color: black;
  margin-left: 35px;
  margin-bottom: 10px;
}

.info-item-list {
  display: flex;
  justify-content: space-between;
}
.info-list {
  margin-top: 10px;
  border-bottom: 1px solid lightgray;
  list-style-type: none;
  color:dimgray;
}
.list-items {
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
}
</style>
