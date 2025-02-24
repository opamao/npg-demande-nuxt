<template>
  <div class="main-content-container overflow-hidden">
    <div class="row justify-content-center">
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <DashboardCRMRevenueGrowthChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <DashboardCRMLeadConversionChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <DashboardCRMTotalOrdersChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <DashboardCRMAnnualProfitChart />
      </div>
    </div>

    <div class="justify-content-center">
      <div class="col-xxl-12 col-xl-7 col-lg-7">
        <DashboardCRMRecentLeads />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CRMPage",
});
</script>
