<template>
  <div class="container">
    <navbarApp v-if="!$route.meta.hideNavbar" />
    <router-view></router-view>
  </div>
</template>

<script>
import navbarApp from "./components/navbar.vue";
export default {
  name: "App",
  components: {
    navbarApp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
