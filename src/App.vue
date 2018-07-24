<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
            VUEX
        </div>
      </div>
    </nav>
    
    <section class="section">
        <List />
    </section>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            Sample Vuex App
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import List from './components/List.vue';
export default {
  name: 'app',
  components: {
    List
  }
}
</script>