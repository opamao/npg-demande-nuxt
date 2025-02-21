<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4 pb-0">
      <div class="row">
        <div class="col-xxl-3 col-xl-6 col-sm-6">
          <div
            class="card bg-primary bg-opacity-10 border-primary border-opacity-10 rounded-3 mb-4 stats-box style-three"
          >
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-35">
                <div class="flex-shrink-0">
                  <i class="material-symbols-outlined fs-40 text-primary">
                    settings_account_box
                  </i>
                </div>
                <div class="flex-grow-1 ms-2">
                  <span>En attente</span>
                  <h3 class="fs-20 mt-1 mb-0">7051</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-sm-6">
          <div
            class="card bg-success bg-opacity-10 border-success border-opacity-10 rounded-3 mb-4 stats-box style-three"
          >
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-35">
                <div class="flex-shrink-0">
                  <i class="material-symbols-outlined fs-40 text-success">
                    assignment_return
                  </i>
                </div>
                <div class="flex-grow-1 ms-2">
                  <span>Traitées</span>
                  <h3 class="fs-20 mt-1 mb-0">178</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-sm-6">
          <div
            class="card bg-danger bg-opacity-10 border-danger border-opacity-10 rounded-3 mb-4 stats-box style-three"
          >
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-35">
                <div class="flex-shrink-0">
                  <i class="material-symbols-outlined fs-40 text-danger">
                    discover_tune
                  </i>
                </div>
                <div class="flex-grow-1 ms-2">
                  <span>Rejetées</span>
                  <h3 class="fs-20 mt-1 mb-0">12.21%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecusOverview",
});
</script>
