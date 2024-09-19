<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons-vue'

const open = ref(false)

const openFunction = () => {
  open.value = !open.value
}

const routes = [
  {
    label: 'HOME',
    to: '/',
  },
  {
    label: 'ABOUT',
    to: '/about',
  },
]
</script>

<template>
  <div class="bg-[#bc103f] fixed w-full z-10 shadow">
    <div class="relative dt:w-[1088px] dt:m-auto py-3.5 dt:flex justify-between items-center">
      <!-- <RouterLink to="/"> -->
      <img alt="Vue logo" class="dt:mx-0 mx-3.5" src="@/assets/logo.svg" width="30" height="30" />
      <!-- </RouterLink> -->

      <div class="absolute dt:hidden right-4 top-0.5 cursor-pointer text-3xl text-white">
        <MenuOutlined @click="openFunction()" v-if="!open" />
        <CloseOutlined @click="openFunction()" v-if="open" />
      </div>
      <ul
        class="text-white dt:flex dt:items-center dt:mb-0 dt:px-0 px-3 dt:pb-0 pb-10 dt:static absolute bg-[#bc103f] dt:w-auto w-full top-13 duration-500 ease-in"
        :class="[open ? 'left-0' : 'left-[-100%]']"
      >
        <li class="dt:mx-4 mx-6 dt:my-0 my-5" v-for="route of routes">
          <RouterLink :to="route.to">{{ route.label }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #bc103f;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.wrapper {
  display: flex;
  place-items: flex-start;
  align-items: center;
  width: 1088px;
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
} */
</style>
