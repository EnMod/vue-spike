import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import App from '/assets/components/App.vue'

const vm1 = new Vue({
  el: 'app',
  // renders the component specified
  render: h => h(App)
})
