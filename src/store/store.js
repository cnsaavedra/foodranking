import Vue from 'vue'
import Vuex from 'vuex'

// allows store access with all view components
Vue.use(Vuex)

export default new Vuex.Store({
    //cant modify state unless thru action/mutation
    strict: true,
    state: {
    },
    mutations: {
    },
    // shud always invoke actions thru Vue components (eventnames)
    actions: {
        // call mutation, call setToken, and pass in that token object
    }
})