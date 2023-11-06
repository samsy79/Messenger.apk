<script lang="ts" setup>
import logo from "./icons /logoSvg.vue";

import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <nav class="navBar">
      <RouterLink to="#" class="logo">
        <logo />
      </RouterLink>
      <div class="nav_links">
        <slot> </slot>
      </div>
    </nav>
  </div>
</template>

<style scoped>
p {
  font-family: "Poppins-Black";
}

* {
  font-size: 16px;
  margin: 0;
  z-index: 5;
}

.navBar{
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  background-color: none;
  backdrop-filter: blur(px);
}

.nav_links ul {
  display: flex;
}

.nav_links ul li {
  margin: 0 25px;
}

.nav_links ul li.active a {
  color: #ed3c57;
}
</style>
