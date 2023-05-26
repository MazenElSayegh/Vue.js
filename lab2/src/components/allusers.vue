<template>
  <div>
    <h1>All users</h1>
    <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col ">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <th scope="row">{{ user.id }}</th>
      <td>{{ user.first_name }}</td>
      <td>{{user.last_name}}</td>
      <td>
        <button class="btn btn-sm btn-danger m-1" @click="deleteUser(user.id)">Delete</button>
        <router-link :to="`/users/update/${user.id}`" class="btn btn-sm btn-primary m-1">Update</router-link>
        <router-link :to="`/users/${user.id}`" class="btn btn-sm btn-warning m-1">View</router-link>
      </td>
    </tr>
   
  </tbody>
</table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "allusersApp",
  created() {
    this.getallusers();
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getallusers() {
      axios
        .get("  http://localhost:2000/users")
        .then((res) => {
          console.log(res.data);
          this.users = res.data
        })
        .catch((err) => console.log(err));
    },
    deleteUser(id){
        axios.delete(`  http://localhost:2000/users/${id}`)
        .then((res)=>{
            console.log(res.data)
            this.getallusers()
        })
        .catch((err)=>console.log(err))
    }
  },
};
</script>

<style scoped></style>
