<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50"
      /></RouterLink>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #bc103f;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.wrapper {
  display: flex;
  place-items: flex-start;
  align-items: center;
  width: 1280px;
  margin: 0 auto;
}

.logo {
  display: block;
  margin: 2px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: right;
  color: black !important;
}

nav a.router-link-exact-active {
  border-bottom: 1px solid white !important;
}

nav a:hover {
  border-bottom: 1px solid white !important;
}

nav a {
  color: white !important;
  text-decoration: none;
  font-size: 1rem;
  display: inline-block;
  margin: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  /* .logo {
    margin: 0 2rem 0 0;
  } */

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
