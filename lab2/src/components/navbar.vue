<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center"
        >
          <li class="nav-item">
            <router-link
              class="nav-link active btn btn-dark m-1 text-white px-5"
              aria-current="page"
              to="/"
              >Users</router-link
            >
            <router-link
              class="nav-link active btn btn-success m-1"
              aria-current="page"
              to="/users/create"
              >Create user</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbarApp",
};
</script>

<style scoped></style>
