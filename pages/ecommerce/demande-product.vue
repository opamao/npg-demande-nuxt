<template>
    <div class="main-content-container overflow-hidden">
      <CommonPageTitle pageTitle="Demandes reçues" subTitle="Demandes" />
  
      <PagesEcommerceRecus />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "DemandeRecuesPage",
  });
  </script>