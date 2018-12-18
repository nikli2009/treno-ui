import Vue from 'vue'
import App from './App.vue'

import TrenoUI from './index.js'

Vue.use(TrenoUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
