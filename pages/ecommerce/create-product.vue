<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Nouvelle demande" subTitle="Demandes" />

    <PagesEcommerceCreateProduct />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreateProductPage",
});
</script>
