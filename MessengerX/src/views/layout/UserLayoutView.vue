
<!-- ===================  D A S H B O A R D  L A Y O U T =================== -->

<template>
    <div id="dashbord-content">
        <SideBarVue />
        <NavBarVue />

        <RouterView>

        </RouterView>


    </div>
</template>

<script lang="ts" setup>
import NavBarVue from '../../components/Dashboard/NavBar.vue';
import SideBarVue from '../../components/Dashboard/SideBar.vue'
import MainDashbordVue from '@/components/Dashboard/MainDashbord.vue';
</script>