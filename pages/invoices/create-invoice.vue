<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Demande de Gadget" subTitle="Gadget" />

    <PagesInvoicesCreateInvoice />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
  
export default defineComponent({
  name: "CreateInvoicePage",
});
</script>
