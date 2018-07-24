<template>
 <div>
    <b-field label="Enter Todo..">
          <b-input v-model="message"  @keypress.native.enter="addTodo"></b-input>
      </b-field>
</div>
</template>

<script>
export default {
  name: "Form",
  computed: {
    message: {
      set: function(val) {
        this.$store.commit("updateMessage", val);
      },
      get: function() {
        return this.$store.state.todo.addTodo.message;
      }
    }
  },
  methods: {
    addTodo: function(evt) {
      if (evt.keyCode === 13) {
        this.$store.commit("addTodo", {
          id: Math.random(0, 100) * 100,
          text: this.$store.state.todo.addTodo.message,
          isCompleted: false
        });
        this.$store.commit("updateMessage", "");
      }
    }
  }
};
</script>

<style>
</style>