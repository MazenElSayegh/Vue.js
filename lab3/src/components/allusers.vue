<template>
  <div>
    <table class="table table-success table-striped">
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
          <td>{{ user.last_name }}</td>
          <td>
            <router-link
              :to="`/users/${user.id}`"
              class="btn btn-sm btn-success m-1"
              >View</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
  name: "allusersApp",
  setup() {
    let users = ref(null);
    onMounted(async () => {
      axios.get("http://localhost:2000/users").then((res) => {
        users.value = res.data;
      });
    });

    return {
      users,
    };
  },
};
</script>

<style scoped></style>
