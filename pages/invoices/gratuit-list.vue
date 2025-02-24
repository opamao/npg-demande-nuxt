<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Demandes Gratuites" subTitle="Demandes" />

    <PagesInvoicesGratuitList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InvoicesPage",
});
</script>
