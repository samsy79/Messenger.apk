<template>
  <div class="connexion">
    <div class="connexion-content">
      <div class="connexionForm">
        <div class="input-field">
          <h1>Login</h1>
        </div>
        <form @submit.prevent="login">
          <div class="input-field">
            <input type="text" placeholder="email" v-model="userData.email" />
          </div>
          <div class="input-field">
            <input
              type="password"
              placeholder="password"
              v-model="userData.password"
            />
          </div>
          <div class="input-field">
            <div class="forgot">
              <div>
                <input type="checkbox" style="width: 15px; margin-right: 5px" />
                <span>Remember me</span>
              </div>
              <RouterLink to="/">
                <span>Forgot Password?</span>
              </RouterLink>
            </div>
          </div>
          <div class="input-field">
            <!-- <input type="submit" value="Login" /> -->

            <button
              type="button"
              @click="showToatSuccess(),login()"
              style="z-index: 1000"
            >
              Login
            </button>
          </div>
        </form>
        <div class="input-field">
          <RouterLink to="/register">
            <span>Don't have an account ?</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavBar from "../NavBar.vue";
import { RouterLink } from "vue-router";
import router from "@/router";
import { clientHttp } from "../../libs/clientHttps";
import { ref } from "vue";
import axios from "axios";
const error = ref(" ");
const userData = ref({
  email: "",
  password: "",
});
const login = async function () {
  if (
    userData.value.email.trim() === "" ||
    userData.value.password.trim() === ""
  ) {
    error.value = "Tous les champs sont requis";

    console.log("Tous les champs sont requis");
  } else {
    try {
      const userExist = await clientHttp.post("/users/login", userData.value);
      localStorage.setItem("token", userExist.data.token);
      console.log(userExist);

      userData.value.email = "";
      userData.value.password = "";

      /*   Cookies.set("token", userExist.data.token,{ expires: '1h' }); */
      const token = localStorage.getItem("token");
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
      router.replace("/home");
    } catch (e) {
      error.value = "oups something wrong";
      console.log(e);
    }
  }
};

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

function showToatSuccess() {
  toast.success("Wow success!", {
    autoClose: 1000,
  });
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}
.connexion {
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/image/Ab.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner-opacity {
  background-color: rgba(77, 73, 73, 0.551);
  width: 100%;
  height: 100%;
}

.connexion-content {
  color: #fff;
  background-color: none;
  backdrop-filter: blur(10px);
  padding: 25px 15px;
  width: 400px;
  border-radius: 8px;
}

.input-field {
  padding: 10px;
}

.input-field input,
button {
  width: 100%;
  border-radius: 15px;
  padding: 12px 15px;
  outline: none;
  border: solid 2px #ccc;
}

.input-field .forgot {
  display: flex;
  justify-content: space-between;
}
</style>
