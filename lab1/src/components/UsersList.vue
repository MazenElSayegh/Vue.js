<template>
  <div>
    <h2>Users</h2>
    <ul>
      <h3 v-for="user in users" :key="user.name">
        {{ user.name }} - {{ user.age }}
        <button @click="$emit('deleteUser', user)">Delete</button>
      </h3>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  emits:['deleteUser'],
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
    };
  },
};
</script>