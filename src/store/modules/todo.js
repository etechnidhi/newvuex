import Vue from "vue";

export default {
  state: {
    todos: [],
    addTodo: {
      id: "",
      name: "",
      email: "",
      password: "",
      confirm: "",
      message: ""
    },
    isEdit: false,
    seen: false,
    seenList: false,
    status: false,
    isActive: false,
    formseen: true
  },
  getters: {
    allTodos: state => state.todos,
    getCompletedTodos: state => {
      return state.todos.filter(todo => todo.isCompleted);
    }
  },
  mutations: {
    TOGGLE(state, value) {
      state.seen = value;
    },
    seenlist(state, value) {
      state.seenList = value;
    },
    isactive: (state, value) => {
      state.isActive = value;
    },
    formseen: (state, value) => {
      state.formseen = value;
    },
    addTodo: (state, todo) => {
      state.todos.push(todo);
    },
    updateTodo: (state, item) => {
      state.addTodo = item;
    },
    taskupdate: (state, todo) => {
      state.todos.forEach((addTodo, index) => {
        if (addTodo.id === todo.id) {
          Vue.set(state.todos, index, todo);
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
    },
    blankform: (state, value) => {
      state.addTodo.id = value;
      state.addTodo.name = value;
      state.addTodo.email = value;
      state.addTodo.password = value;
      state.addTodo.confirm = value;
      state.addTodo.message = value;
      state.isEdit = false;
      state.isActive = false;
      state.formseen = true;
    }
  }
};
