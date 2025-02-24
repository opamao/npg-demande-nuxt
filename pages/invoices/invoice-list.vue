<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Demandes Gadgets" subTitle="Demandes" />

    <PagesInvoicesInvoicesList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InvoicesPage",
});
</script>
