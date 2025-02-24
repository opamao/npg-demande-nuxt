<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <OthersSettingsMenu />

      <div class="mb-4">
        <h4 class="fs-20 mb-1">Profil</h4>
        <p class="fs-15">Mettez à jour vos informations personnelles ici.</p>
      </div>

      <form>
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Prénom</label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55"
                  value="Olivia"
                />
                <i
                  class="ri-user-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Nom</label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55"
                  value="John"
                />
                <i
                  class="ri-user-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Adresse email</label>
              <div class="form-group position-relative">
                <input
                  type="email"
                  class="form-control text-dark ps-5 h-55"
                  value="olivia@trezo.com"
                />
                <i
                  class="ri-mail-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Téléphone</label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55"
                  value="+1 444 555 6699"
                />
                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AccountSettings",
});
</script>
