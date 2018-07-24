<template>
  <div id="hello">
      <h2>{{ title }}</h2>
      <ul>
        <li v-for="(link,index) in links" v-bind:key="index">
          {{ link }}
        </li>
      </ul>
      <h1 class="cunter">{{counter}}</h1>
      <div class="actions">
        <div class="actions-inner">
          <button @click="increment">+</button>
          <button @click="decrement">-</button>
        </div>
      </div>
      
  </div>
</template>

<script>
  // import Stats from './Stats.vue'
  import {
    mapState
  } from "vuex";
  export default {
    name: "HelloWorld",
    components: {
      // Stats
    },
    computed: {
      ...mapState(["title", "links"]),
      counter: function() {
        return this.$store.getters.counter;
      }
    },
    methods: {
      increment: function() {
        this.$store.commit("increment");
      },
      decrement: function (){
        this.$store.commit('decrement')
      }
    }
  };
  // App.$mount('#hello');
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
