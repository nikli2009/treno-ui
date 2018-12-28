<template>
  <div class="tr-picture">
    <template v-if="loadStatus === LOAD_STATUS.LOADED">
      <img src="" alt="">
    </template>
    <template v-else-if="loadStatus === LOAD_STATUS.LOADING">
      <img src="../../assets/loading.svg" alt="">
    </template>

  </div>
</template>
<script>
  const LOAD_STATUS = [
    'IDLE',
    'LOADING',
    'LOADED',
    'ERROR'
  ];
  export default {
    props: {
      source: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: '200px'
      },
      width: {
        type: String,
        default: '300px'
      }
    },
    data() {
      return {
        LOAD_STATUS,
        loadStatus: this.LOAD_STATUS.IDLE,
        localSource: ''
      }
    },
    computed: {},
    watch: {
      'source': {
        handler(newVal) {
          this.localSource = newVal;
          this.reload()
        },
        deep: true
      }
    },
    methods: {
      setToLoadedView() {
        this.status = this.LOAD_STATUS.LOADED
      },
      setToErrorView() {
        this.status = this.LOAD_STATUS.ERROR
      },
    },
    created() {
      this.localSource = this.source
    },
    mounted() {}
  }
</script>
