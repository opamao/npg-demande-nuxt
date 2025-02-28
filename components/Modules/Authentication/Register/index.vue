<template>
  <div class="m-auto m-1230">
    <div class="row align-items-center">
      <div class="col-lg-6 d-none d-lg-block">
        <img
          src="~/assets/images/register.jpg"
          class="rounded-3"
          alt="register"
        />
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
          <h3 class="fs-28 mb-2">S'inscrire au tableau de bord</h3>
          <p class="fw-medium fs-16 mb-4">
            Inscrivez-vous en entrant vos coordonnées
          </p>
          <form @submit.prevent="handleRegister">
            <div class="form-group mb-3">
              <label class="label text-secondary">Nom et prénom</label>
              <input
                v-model="nomEtPrenom"
                required
                type="text"
                class="form-control"
                placeholder="Entrez votre nom complet"
              />
            </div>
            <div class="form-group mb-3">
              <label class="label text-secondary">Nom utilisateur</label>
              <input
                v-model="username"
                type="text"
                class="form-control"
                placeholder="Votre nom utilisateur"
              />
            </div>
            <div class="form-group mb-3">
              <label class="label text-secondary">Téléphone</label>
              <input
                v-model="phone"
                type="tel"
                class="form-control"
                placeholder="0101010101"
              />
            </div>
            <div class="form-group mb-3">
              <label class="label text-secondary">Adresse email</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                placeholder="example@yapi.com"
              />
            </div>
            <div class="form-group mb-3">
              <label class="label text-secondary">Mot de passe</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Saisir votre mot de passe"
              />
            </div>
            <div v-if="errorMessage" class="alert alert-danger" role="alert">
              {{ errorMessage }}
            </div>
            <div class="form-group mb-3">
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
                  <span v-if="!loading">S'enregistrer</span>
                </div>
              </button>
            </div>
            <div class="form-group">
              <p>
                Avez-vous déjà un compte.
                <NuxtLink
                  to="/"
                  class="fw-medium text-primary text-decoration-none"
                >
                  Se connecter
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
  name: "Register",
  data() {
    return {
      nomEtPrenom: "",
      username: "",
      phone: "",
      email: "",
      password: "",
      errorMessage: "",
      loading: false,
    };
  },
  methods: {
    async handleRegister() {
      console.log("Formulaire soumis");

      // Vérifier que certains champs ne sont pas vides avant de soumettre
      if (!this.nomEtPrenom || !this.password) {
        this.errorMessage =
          "Veuillez saisir votre nom complet et mot de passe suvis de email et ou nom utilisateur.";
        return;
      }

      this.loading = true;

      try {
        console.log("Tentative de création");

        const response = await fetch("http://localhost:5000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.nomEtPrenom,
            email: this.email,
            phone: this.phone,
            image: "",
            username: this.username,
            website: "",
            currency: "",
            type: "user",
            status: "Active",
            code: "",
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

        this.$router.push("/");
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
