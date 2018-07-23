import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    title:'this is my first vuex',
    links:[
      'www.google.com',
      'www.youtube.com'
    ],
    counter:0
  },
  getters:{
countLinks: state=>{
  return state.links.length
},
counter:state => state.counter*2
  },
  mutations:{
    increment: state => state.counter++,
    decrement: state => state.counter--
  },
  actions:{

  }
})