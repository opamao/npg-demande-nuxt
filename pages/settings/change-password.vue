<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Changer mot de passe" subTitle="Paramètres" />

    <OthersSettingsChangePassword />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChangePasswordPage",
});
</script>
