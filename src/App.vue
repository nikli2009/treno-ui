<template>
  <div>
    <tr-drawer v-model="collapse" width="30vw"
               :autoHide="false" :showClose="true" customClass="customClass"
               :beforeClose="beforeDrawerClose"
               @close="onClose"
               @open="onOpen"
    >
      <div>
        <span>Slot Content</span>
      </div>
    </tr-drawer>
    <div class="button" @click="_onDrawerOpen">Open Drawer</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        collapse: false
    }
  },
  methods: {
    _onDrawerOpen() {
      this.collapse = false
    },
    beforeDrawerClose(callback) {
      callback()
    },
    onClose() {
      console.log('onClose')
    },
    onOpen() {
      console.log('onOpen')
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    padding: 8px 10px;
    border: 1px solid #333;
    width: 100px;
    text-align: center;
    border-radius: 5px;
    font-size: 14px;
    color: #333;
    &:hover {
      cursor: pointer;
      background-color: #e4e4e4;
    }
  }
  .customClass {
    &.tr-drawer {
      padding: 25px;
    }
  }
</style>
