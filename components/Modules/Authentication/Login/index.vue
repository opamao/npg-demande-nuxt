<template>
  <div class="m-auto m-1230">
    <div class="row align-items-center">
      <div class="col-lg-6 d-none d-lg-block">
        <img src="~/assets/images/login.jpg" class="rounded-3" alt="login" />
      </div>
      <div class="col-lg-6">
        <div class="mw-480 ms-lg-auto">
          <div class="d-inline-block mb-4">
            <img
              src="~/assets/images/logo.svg"
              class="rounded-3 for-light-logo"
              alt="login"
            />
            <img
              src="~/assets/images/white-logo.svg"
              class="rounded-3 for-dark-logo"
              alt="login"
            />
          </div>
          <h3 class="fs-28 mb-2">Content de te revoir</h3>
          <p class="fw-medium fs-16 mb-4">
            Connectez-vous en saisissant vos coordonnées
          </p>
          <form @submit.prevent="handleLogin">
            <div class="form-group mb-4">
              <label class="label text-secondary"
                >Adresse e-mail ou Nom utilisateur</label
              >
              <input
                v-model="emailOrUsername"
                type="text"
                class="form-control h-55"
                placeholder="E-mail ou nom utilisateur"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label text-secondary">Mot de passe</label>
              <input
                v-model="password"
                type="password"
                class="form-control h-55"
                placeholder="Votre mot de passe"
              />
            </div>
            <div v-if="errorMessage" class="alert alert-danger" role="alert">
              {{ errorMessage }}
            </div>
            <div class="form-group mb-4">
              <NuxtLink
                to="/authentication/forget-password"
                class="text-decoration-none text-primary fw-semibold"
              >
                Mot de passe oublié?
              </NuxtLink>
            </div>
            <div class="form-group mb-4">
              <button
                type="submit"
                class="btn btn-primary fw-medium py-2 px-3 w-100"
                :disabled="loading"
              >
                <div
                  class="d-flex align-items-center justify-content-center py-1"
                >
                  <i
                    v-if="loading"
                    class="material-symbols-outlined text-white fs-20 me-2 spin-loader"
                  >
                    hourglass_empty
                  </i>
                  <span v-if="!loading">Se connecter</span>
                </div>
              </button>
            </div>
            <div class="form-group">
              <p>
                Je n'ai pas de compte.
                <NuxtLink
                  to="/authentication/register"
                  class="fw-medium text-primary text-decoration-none"
                >
                  Inscrivez-vous
                </NuxtLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  data() {
    return {
      emailOrUsername: "",
      password: "",
      errorMessage: "",
      loading: false,
    };
  },
  methods: {
    async handleLogin() {
      console.log("Formulaire soumis");

      // Vérifier que les champs ne sont pas vides avant de soumettre
      if (!this.emailOrUsername || !this.password) {
        this.errorMessage = "Veuillez remplir tous les champs.";
        return;
      }

      this.loading = true;

      try {
        console.log("Tentative de connexion");

        // Envoi de la requête de connexion à l'API avec fetch
        const response = await fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            login: this.emailOrUsername,
            password: this.password,
          }),
        });

        if (!response.ok) {
          // Vérifier si la réponse est une erreur HTTP (status code 4xx ou 5xx)
          const errorData = await response.json();
          throw new Error(errorData.message || "Erreur inconnue");
        }

        const data = await response.json();
        console.log("Connexion réussie", data);

        // Si la réponse est positive, stocker le token
        localStorage.setItem("token", data.token);
        localStorage.setItem("identifiant", data.user.id);
        localStorage.setItem("nom", data.user.name);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("phone", data.user.phone);
        localStorage.setItem("image", data.user.image);
        localStorage.setItem("username", data.user.username);
        localStorage.setItem("website", data.user.website);
        localStorage.setItem("currency", data.user.currency);
        localStorage.setItem("type", data.user.type);
        localStorage.setItem("code", data.user.code);

        // Redirection vers la page du dashboard après connexion réussie
        this.$router.push("/dashboard");
      } catch (error) {
        console.error("Erreur de connexion", error);

        // Gérer les erreurs de connexion
        this.errorMessage = error.message || "Erreur de connexion réseau";
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>

<style scoped>
/* Styles pour le loader circulaire */
.spin-loader {
  animation: spin 1s infinite linear;
  font-size: 24px; /* Taille du loader */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
