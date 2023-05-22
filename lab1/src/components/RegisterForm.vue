<template>
  <div class="d-flex gap-5 justify-content-center align-items-center mb-5">
      <button type="button" class="btn btn-dark" @click="selectedComponent = 'RegisterForm'">
        Form view
      </button>
      <button type="button" class="btn btn-primary" @click="selectedComponent = 'AdminsList'">
        Admins Table
      </button>
      <button type="button" class="btn btn-warning" @click="selectedComponent = 'UsersList'">
        User Table
      </button>
</div>
    <div v-if="selectedComponent === 'RegisterForm'">
      <form @submit.prevent="addUser">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" />
        </div>
        <div>
          <label for="age">Age:</label>
          <input type="number" id="age" v-model.number="age" />
        </div>
        <div>
          <label>Role:</label>
          <input type="radio" id="admin" v-model="role" value="admin" />
          <label for="admin">Admin</label>
  
          <input type="radio" id="user" v-model="role" value="user" />
          <label for="user">User</label>
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
    <UsersList  v-if="selectedComponent === 'UsersList'" :users="users.filter(user => user.role === 'user')" @deleteUser="deleteUser" />
    <AdminsList  v-if="selectedComponent === 'AdminsList'" :users="users.filter(user => user.role === 'admin')" @deleteAdmin="deleteUser" />
  
  </template>
  
  <script>
import UsersList from './UsersList.vue';
import AdminsList from './AdminsList.vue';

export default {
  name: "RegisterForm",
  components: {
    UsersList,
    AdminsList,
  },
  data() {
    return {
      name: "",
      age: null,
      role: "",
      users: [],
      selectedComponent:null,
    };
  },
  methods: {
    addUser() {
      const user = {
        name: this.name,
        age: this.age,
        role: this.role,
      };
      this.users.push(user);
      this.name = "";
      this.age = null;
      console.log(user);
    },
    deleteUser(user) {
      const index = this.users.indexOf(user);
      this.users.splice(index, 1);
    },
  },
};
</script>