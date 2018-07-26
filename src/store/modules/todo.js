import Vue from "vue";

export default {
  state: {
    todos: [],
    addTodo: {
      id: "",
      message: "",
      name: "",
      email: "",
      password: "",
      confirm: ""
    },
    isEdit: false
  },
  getters: {
    allTodos: state => state.todos,
    getCompletedTodos: state => {
      return state.todos.filter(todo => todo.isCompleted);
    }
  },
  mutations: {
    addTodo: (state, todo) => {
      state.todos.push(todo);
    },
    updateTodo: (state, item) => {
      state.addTodo.id = item.id;
      state.addTodo.name = item.name;
      state.addTodo.email = item.email;
      state.addTodo.password = item.password;
      state.addTodo.confirm = item.confirm;
      state.addTodo.message = item.message;
    },
    taskupdate: (state, todo) => {
      state.todos.forEach((addTodo,index) => {      
        if (addTodo.id === todo.id) {
            Vue.set(state.todos,index,todo);
        }
      });
    },
    isedit: (state, value) => {
      state.isEdit = value;
    },
    updateId: (state, newid) => {
      state.addTodo.id = newid;
    },
    updateName: (state, newname) => {
      state.addTodo.name = newname;
    },
    updateEmail: (state, email1) => {
      state.addTodo.email = email1;
    },
    updatePassword: (state, newpass) => {
      state.addTodo.password = newpass;
    },
    updateConfirm: (state, confirmpass) => {
      state.addTodo.confirm = confirmpass;
    },
    updateMessage: (state, msg) => {
      state.addTodo.message = msg;
    }
  }
};
