<template>
  <div class="connexion">
    <div class="connexion-content">
      <div class="connexionForm">
        <div class="input-field">
          <h1>Register</h1>
        </div>
        <form action="" @submit.prevent="register,showToatSuccess()">
          <div class="input-field">
            <input type="text" placeholder="Name" v-model="user.name" />
          </div>
          <div class="input-field">
            <input type="text" placeholder="Surname" v-model="user.surname" />
          </div>
          <div class="input-field">
            <input type="text" placeholder="Username" v-model="user.username" />
          </div>
          <div class="input-field">
            <input type="text" placeholder="Email" v-model="user.email" />
          </div>
          <div class="input-field">
            <input
              type="password"
              placeholder="Password"
              v-model="user.password"
            />
          </div>
          <!--  <div class="input-field">
          <div class="forgot">
            <div>
            <input type="checkbox" style=" width:15px ;margin-right:5px">
            <span>Remember me</span>
          </div>
          </div>
        </div> -->
          <div class="input-field">
            <!-- <input type="submit" value="Sign Up" /> -->
            <button type="submit" >Sign Up</button>
          </div>
          <div class="input-field">
            <RouterLink to="/login">
              <span>I already have an account ?</span>
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { clientHttp } from "../../libs/clientHttps";
import { ref } from "vue";
const error = ref("");
const user = ref({
  email: "",
  password: "",
  name: "",
  surname: "",
  username: "",
});
const register = async function () {
  if (
    user.value.email.trim() === "" ||
    user.value.password.trim() === "" ||
    user.value.name === "" ||
    user.value.surname === "" ||
    user.value.username === ""
  ) {
    error.value = "Tous les champs sont requis";
    console.log("Tous les champs sont requis ");
  } else {
    try {
      const userData = await clientHttp.post("/users/register", user.value);

      const email = localStorage.setItem(
        "email",
        userData.data.PersonalId.email
      );

      console.log(userData.data);

      router.replace("/verify");
    } catch (error) {
      console.log(error);
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
