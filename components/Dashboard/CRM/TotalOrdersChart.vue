<template>
  <div
    class="card bg-white border-0 rounded-3 mb-4 stats-box position-relative"
  >
    <div class="card-body p-4">
      <div class="d-flex justify-content-between">
        <div class="mb-35">
          <span>Total Orders</span>
          <h3 class="fs-20 mt-1 mb-0">$72,458</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalOrdersChart",
});
</script>
