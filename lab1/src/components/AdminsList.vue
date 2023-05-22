<template>
    <div>
      <h2>Admins</h2>
      <ul>
        <h3 v-for="user in users" :key="user.name">
          {{ user.name }} - {{ user.age }}
          <button @click="$emit('deleteAdmin', user)">Delete</button>
        </h3>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdminsList",
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
    methods: {
    },
  };
  </script>