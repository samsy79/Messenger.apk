<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import home from "../components/icons /homeSvg.vue";
import login from "../components/icons /searchSvg.vue";
import signin from "../components/icons /localiSvg.vue";
import message from "../components/icons /messageSvg.vue";
import user from "../components/icons /userSvg.vue";
import router from "@/router";
import { ref } from "vue";
const userData = ref({
  email: "",
  name: "",
  username: "",
  surname: "",
});
const token = localStorage.getItem("token");
if (token) {
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  userData.value.email = decodedToken.email;
  userData.value.name = decodedToken.name;
  userData.value.surname = decodedToken.surname;
  userData.value.username = decodedToken.username;
} else {
  console.log("Le token n'a pas été trouvé dans localStorage.");
  router.replace("/");
}
</script>

<template>
  <!-- <div class="Big_container">
    </div> -->

  <div class="banner">
    <div class="banner-opacity">
      <NavBar>
        <ul>
          <li>
            <RouterLink to="/home">
              <home />
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/user-layout" class="">
              <message />
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/Info" class="">
              <user />
            </RouterLink>
            <div
              style="
                display: inline-block;
                color: #cac7c7;
                font-family: Poppins-Black;
                margin-left: 18px;
              "
            >
              <span style="margin-right: 8px">{{ userData.name }}</span>
              <span>{{ userData.surname }}</span>
            </div>
          </li>
        </ul>
      </NavBar>

      <div class="banner-content">
        <div class="container">
          <div class="banner-contentBox">
            <div class="banner-contentLeft">
              <div class="banner-contentLeftTitle">
                <h1>
                  Conçu pour les utilisateurs. <br />
                  <span>Optimisé pour la productivité.</span>
                </h1>
              </div>
              <div class="banner-contentRightParagraphe">
                <p>
                  Connectez les bons utilisateurs, trouvez ce dont vous avez
                  besoin et automatisez le reste. Ce n’est qu’un aperçu du
                  travail dans Slack, votre plateforme de productivité.
                </p>
              </div>
              <!-- <div class="signBox">
                <div class="signIn-btn">
                  <button>Se Connecter</button>
                </div>
                <div class="signup-btn">
                  <button>Se Connecter</button>
                </div>
              </div> -->
              <div class="banner-contentRightParagraphe">
                <p>
                  Vous pouvez essayer Slack gratuitement aussi longtemps que
                  vous le souhaitez
                </p>
              </div>
            </div>
            <div class="banner-contentRight">
              <div class="banner-contentRightContent">
                <video autoplay muted loop>
                  <source src="../assets/vid/vid1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="halthBanner-content">
    <div class="container">
      <div class="firt-paragraphe">
        <p>DES ENTREPRISES DU MONDE ENTIER NOUS FONT CONFIANCE</p>
      </div>
      <div class="partenaire-content">
        <div class="partenaire-image">
          <img src="../assets/image/airbnb-logo.png" alt="" />
        </div>
        <div class="partenaire-image">
          <img src="../assets/image/logo-nasa.png" alt="" />
        </div>
        <div class="partenaire-image">
          <img src="../assets/image/uber.png" alt="" />
        </div>
        <div class="partenaire-image">
          <img src="../assets/image/nyt.png" alt="" />
        </div>
        <div class="partenaire-image">
          <img src="../assets/image/logo-etsy.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <template>
 

  <div class="banner">
    <div class="banner-opacity">
      <NavBar>
        <ul>
          <li>
            <RouterLink to="/home">
              <home />
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/user-layout" class="">
              <message />
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/Info" class="">
              <user />
            </RouterLink>
            <div
              style="
                display: inline-block;
                color: #cac7c7;
                font-family: Poppins-Black;
                margin-left: 18px;
              "
            >
              <span style="margin-right: 8px">{{ userData.name }}</span>
              <span>{{ userData.surname }}</span>
            </div>
          </li>
        </ul>
      </NavBar>
    </div>
  </div>
</template> -->
<!-- <style scoped>
.banner {
  background-color: #541554;
  width: 100vw;
  height: 70vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
} 
a {
  color: white;
  text-decoration: none;
}

.nav_links ul {
  display: flex;
}
.nav_links ul li {
  margin: 0 25px;
}
</style> -->

<style scoped>
ul {
  display: flex;
  align-items: center;
  gap: 25px;
}
.log {
  display: inline-block;
  border: solid 1px #fff;
  padding: 10px 45px;
  border-radius: 4px;
}
.banner {
  /*  background-image: url("../assets/image/Ab.jpg"); */
  background-color: #541554;
  width: 100vw;
  height: 70vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
} /*
// rgba(51, 50, 50, 0.551); */
a {
  color: white;
  text-decoration: none;
}
/* .banner-opacity {
  background-color: rgba(77, 73, 73, 0.551);
  width: 100%;
  height: 100%;
} */

.banner-contentBox {
  display: flex;
  margin: 45px 0;
  align-items: center;
  gap: 25px;
}

.banner-contentBox .banner-contentLeft {
  max-width: 50%;
  width: 100%;
}

.banner-contentBox .banner-contentRight {
  max-width: 50%;
  width: 100%;
}

.banner-contentLeftTitle h1 {
  color: #fff;
  line-height: 1.6;
}

.banner-contentLeftTitle h1 span {
  color: #ecb22e !important;
}

.banner-contentRightParagraphe p {
  color: #fff;
  line-height: 2;
}

.signBox {
  display: flex;
  gap: 25px;
}

.signBox .signIn-btn button {
  width: 309px;
  padding: 15px 25px;
  border-radius: 4px;
  border: none;
  display: inline-block;
}

.signBox .signup-btn button {
  width: 309px;
  color: #fff;
  font-weight: bold;
  padding: 15px 25px;
  border-radius: 4px;
  border: none;
  background-color: #4285f4;
  display: inline-block;
}

.banner-contentRightContent video {
  width: 100%;
  height: 100%;
}

.firt-paragraphe {
  text-align: center;
  margin: 25px 0;
  font-weight: bold;
}

.partenaire-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 45px;
  margin: 25px 0;
}
</style>
