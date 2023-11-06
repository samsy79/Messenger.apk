<template>
<div class="container">

<div class="main">
    <RouterView />
</div>
</div>

</template>
<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'


</script>
<style scoped>
.container{
    display: flex;
    justify-content: space-between;
    height:750px;
    width : calc(100% - 200px);
    margin:auto;

}
.slidebar {
    width: 200px;
    color: white;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.slidebar RouterLink{
    color:rgb(143, 61, 61);
    text-decoration: none;
    
}
.main{
    width: 600px;
}

.router-link-exact-active{
    background-color: white;
}

</style>