<template>
  
       <NavBar class="navBar" >

       </NavBar>
     
  <div>
    <Register />
  </div>
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import Register from "@/components/connexion/Register.vue";
</script>

<style scoped>
.navBar{
  position: absolute !important;
}

</style>
