<template>
    <div class="connexion ">
      <div class="connexion-content ">
        <div class="connexionForm">
          <div class="input-field">
            <h1>Verification</h1>
          </div>
          <form @submit.prevent="Verify" >
          <div class="input-field">
            <input type="text" placeholder="Code" v-model="userData.code"   />
          </div>
          <div class="input-field">
            <input type="submit"  value="Send"/>
          </div>
      </form>
    
      </div>
    </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import {RouterLink  } from "vue-router";
  import router from "@/router";
  import { clientHttp } from "../../libs/clientHttps";
  import { ref } from "vue";
  import {useLocalStorage} from '@vueuse/core'
  import axios from "axios";
  const error = ref(" ")
  const userData = ref({
    email:"",
    code: ""
  });
  const email =localStorage.getItem('email')
  console.log(email);
  
  userData.value.email = email
  const Verify = async function () {
      
    if (
      userData.value.code.trim() === ""||
      userData.value.email.trim() === ""
    ) {
      error.value = "Tous les champs sont requis";
      
      console.log("Tous les champs sont requis");
    } else {
      try {
        const userExist = await clientHttp.post("/users/verify", userData.value);
       
 // const email = getEmail.email
 
        userData.value.email = "";
        userData.value.code = "";
  
      /*   Cookies.set("token", userExist.data.token,{ expires: '1h' }); */
       const email = localStorage.getItem('email')
        if(userExist.data.Verify === true){
          console.log("accès granted");
          
        }
        router.replace("/login");
      } catch (e) {
          error.value = "oups something wrong"
        console.log(e);
      }
    }
  };
  
  </script>
  
  <style scoped>
  a{
      text-decoration:none;
      color: #fff
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
  .banner-opacity{
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
  
  .input-field input {
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
  