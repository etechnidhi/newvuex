<template>
  <div>
    <form @submit.prevent="onSubmit">
      <section v-if="seen">
        <b-field label="Name" :type="errors.has('name') ? 'is-danger': ''" :message="errors.has('name') ? errors.first('name') : ''">
          <b-input type="text" placeholder="Name" name="name" v-model="name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }"></b-input>
        </b-field>

        <b-field label="Email" :type="errors.has('email') ? 'is-danger': ''" :message="errors.has('email') ? errors.first('email') : ''">
          <b-input type="text" placeholder="Email" name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }"></b-input>
        </b-field>
  
        <b-field label="Password" :type="errors.has('password') ? 'is-danger': ''" :message="errors.has('password') ? errors.first('password') : ''">
          <b-input type="password" name="password" placeholder="Password" v-model="password" v-validate="'required|max:16|min:8'" :class="{'input': true, 'is-danger': errors.has('password') }"></b-input>
        </b-field>
  
        <b-field label="Confirm Password" :type="errors.has('conf-password') ? 'is-danger': ''" :message="errors.has('conf-password') ? errors.first('conf-password') : ''">
          <b-input type="password" name="conf-password" v-model="confirm" placeholder="Confirm Password" v-validate="'required|max:16|min:8'" :class="{'input': true, 'is-danger': errors.has('conf-password') }"></b-input>
        </b-field>
        
        <b-field label="Task" :type="errors.has('message-task') ? 'is-danger': ''" :message="errors.has('message-task') ? errors.first('message-task') : ''">
          <b-input v-model="message" name="message-task" v-validate="'required'" placeholder="Enter Your Todo's here!" :class="{'input': true, 'is-danger': errors.has('conf-password') }"></b-input>
        </b-field>
  
        <div class="two-button">
          <button type="button" class="button is-warning" value="cancel">Cancel</button>
          <button type="submit" class="button is-success" value="submit" :disabled="errors.any()" v-on:click="submit">Submit</button>
        </div>
      </section>
      
    </form>
    <b-notification type="is-success" has-icon v-if="isActive">
      Form is successfully submitted ! :)
      <br/> Go to the list
    </b-notification>
  </div>
</template>

<script>
let count = 0;
export default {
  name: "Form",
  data() {
    return {
      isActive: false,
      seen: true
    };
  },
  computed: {
    id: {
      set: function(val) {
        this.$store.commit("updateId", val);
      },
      get: function() {
        return this.$store.state.todo.addTodo.id;
      }
    },
    name: {
      set: function(val) {
        this.$store.commit("updateName", val);
      },
      get: function() {
        return this.$store.state.todo.addTodo.name;
      }
    },
    email: {
      set: function(val) {
        this.$store.commit("updateEmail", val);
      },
      get: function() {
        return this.$store.state.todo.addTodo.email;
      }
    },
    password: {
      set: function(val) {
        this.$store.commit("updatePassword", val);
      },
      get: function() {
        return this.$store.state.todo.addTodo.password;
      }
    },
    confirm: {
      set: function(val) {
        this.$store.commit("updateConfirm", val);
      },
      get: function() {
        return this.$store.state.todo.addTodo.confirm;
      }
    },
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
    submit: function() {
      if (this.$store.state.todo.isEdit) {
        if (this.$store.state.todo.addTodo.id == this.id) {
          this.$store.commit("taskupdate", {
            id: this.$store.state.todo.addTodo.id,
            name: this.$store.state.todo.addTodo.name,
            email: this.$store.state.todo.addTodo.email,
            password: this.$store.state.todo.addTodo.password,
            confirm: this.$store.state.todo.addTodo.confirm,
            message: this.$store.state.todo.addTodo.message
          });
        }
        this.$store.commit("updateId", "");
        this.$store.commit("updateName", "");
        this.$store.commit("updateEmail", "");
        this.$store.commit("updatePassword", "");
        this.$store.commit("updateConfirm", "");
        this.$store.commit("updateMessage", "");
        this.isActive = true;
        this.seen = false;
      }
      else {
        this.id = count++;
        this.$store.commit("addTodo", {
          id: count,
          name: this.$store.state.todo.addTodo.name,
          email: this.$store.state.todo.addTodo.email,
          password: this.$store.state.todo.addTodo.password,
          confirm: this.$store.state.todo.addTodo.confirm,
          message: this.$store.state.todo.addTodo.message
        });
        this.$store.commit("updateId", "");
        this.$store.commit("updateName", "");
        this.$store.commit("updateEmail", "");
        this.$store.commit("updatePassword", "");
        this.$store.commit("updateConfirm", "");
        this.$store.commit("updateMessage", "");
        this.isActive = true;
        this.seen = false;
      }
      this.count++;
      this.$store.state.todo.isEdit ==false; 
    }
  }
};
</script>

<style>
.field.has-addons {
  display: block !important;
}

.two-button {
  margin: 0 auto;
}

button {
  margin-right: 25px !important;
}
</style>