<template>
  <div>
    <div class="two-button">
      <button class="button is-primary" type="button" value="add" v-on:click="addForm">Add Task</button>
      <button class="button is-info" type="button" value="list" v-on:click="showList">Show List</button>
    </div>
    <br/><br/>
    <div class="show-form">
      <Form v-if="$store.state.todo.seen" />
    </div>
    <br/>
    <div>
      <!-- <table v-if="seenList"> -->
      <table class="table" :items="todos" v-if="$store.state.todo.seenList">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Task</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in todos" :key="index">
            <td>
              <div class="checkbox">
                <label><input type="checkbox" v-model="status"></label>
              </div>
            </td>
            <td v-bind:class="{checked : status}">{{item.message}}</td>
            <td>{{item.name}}</td>
            <td>{{item.email}}</td>
            <td><a href="#" @click="deleteItem(item)" class="a">Delete</a>
              <a href="#" @click="editfrom(item)">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
  import Form from "./Form";
  import {
    mapGetters
  } from "vuex";
  
  export default {
    name: "List",
    components: {
      Form
    },
    data() {
      return {
        status: false
      };
    },
    computed: {
      ...mapGetters({
        todos: "allTodos"
      })
    },
    methods: {
      addForm: function() {
        if (this.$store.state.todo.isEdit == false) {
          this.$store.commit("TOGGLE", true);
          this.$store.commit("seenlist", false);
        }
        this.$store.commit("blankform", "");
      },
      showList: function() {
        this.$store.commit("TOGGLE", false);
        this.$store.commit("seenlist", true);
      },
      editfrom: function(item) {
        this.$store.commit("seenlist", false);
        this.$store.commit("TOGGLE", true);
        this.$store.commit("updateTodo", item);
        this.$store.commit("isedit", true);
      },
      deleteItem: function(item) {
        this.todos.splice(this.todos.indexOf(item), 1);
        this.$store.commit("TOGGLE", true);
      }
    }
  };
</script>

<style>
  a {
    color: black;
  }
  
  .two-button {
    text-align: center;
  }
  
  .show-form {
    margin: 0 auto;
    width: 60%;
  }
  
  .checked {
    text-decoration: line-through;
    color: #e6e6e6;
  }
  
  .a {
    margin-right: 15px;
    font-weight: bold;
  }
  
  table {
    margin: 0 auto;
  }
</style>
