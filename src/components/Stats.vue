<template>
  <div class="stats">
    <h1>A </h1>
  <p> There are current {{ countLinks }} links</p>
  </div>
</template>

<script>
// import Stats from '@/components/Stats.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Stats', 
  computed:{
    ...mapGetters  ([ 
      'countLinks' 
    ]),
           }
}
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
