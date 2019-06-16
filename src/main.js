import Vue from 'vue'
import App from './App.vue'
import Router  from 'vue-router'
import MainPage from './components/MainPage'
import MapView from './components/MapView'
import Vuex from 'vuex'
import store from '@/store/store'
import { sync } from 'vuex-router-sync'
import * as VueGoogleMaps from 'vue2-google-maps'
import '@/assets/css/tailwind.css'

Vue.use(Router)
Vue.use(Vuex)
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBnaNYqEdDu_cWetL3ssjBbeyFC88aib94',
    libraries: 'places,drawing,visualization'
  }
})

const routes = [
  {
    path: '/map',
    name: 'map',
    component: MapView
  },
  {
    path: '/',
    name: 'mainpage',
    component: MainPage
  }
]
const router = new Router({
  routes
})

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')