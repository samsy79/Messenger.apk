  <template>
    <NavBar class="navBar" >
    </NavBar>
  <div>
    <Login />
  </div>
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import Login from "@/components/connexion/Login.vue";
</script>

<style scoped>
.navBar{
  position: absolute !important;
}
</style>
