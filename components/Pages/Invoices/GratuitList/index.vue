<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4"
      >
        <h3 class="mb-0">Liste des demandes</h3>
        <NuxtLink
          to="/invoices/create-gratuit"
          class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
            <span>Nouvelle demande</span>
          </span>
        </NuxtLink>
      </div>

      <div class="default-table-area all-products">
        <div class="table-responsive">
          <table id="C" border="0" style="width: 100%; margin-bottom: 12px">
            <tbody>
              <tr>
                <td
                  style="
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                  "
                >
                  <select
                    v-model="itemsPerPage"
                    class="form-select shadow-none"
                    style="
                      float: left;
                      width: 99px !important;
                      margin-right: 10px;
                    "
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                  </select>

                  <input
                    v-model="searchTerm"
                    class="form-control shadow-none"
                    placeholder="Search"
                    type="text"
                    style="width: 145px; height: 40px"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">User</th>
                <th scope="col">Email</th>
                <th scope="col">Location</th>
                <th scope="col">Phone</th>
                <th scope="col">Projects</th>
                <th scope="col">Join Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in paginatedItems" :key="item.userID">
                <td class="text-body">
                  {{ item.userID }}
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14 mb-0">
                        {{ item.user.name }}
                      </h6>
                    </div>
                  </div>
                </td>
                <td class="text-secondary">
                  {{ item.email }}
                </td>
                <td class="text-secondary">
                  {{ item.location }}
                </td>
                <td class="text-secondary">
                  {{ item.phone }}
                </td>
                <td class="text-secondary">
                  {{ item.projects }}
                </td>
                <td class="text-secondary">
                  {{ item.joinDate }}
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <NuxtLink title="Détails"
                      to="/invoices/gratuit-details"
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                    <i class="material-symbols-outlined fs-16 text-primary">
                        {{ item.action.view }}
                      </i>
                    </NuxtLink>
                    <NuxtLink title="Modifier"
                      to="/invoices/edit-gratuit"
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                    <i class="material-symbols-outlined fs-16 text-body">
                        {{ item.action.edit }}
                      </i>
                    </NuxtLink>
                    <button title="Supprimer"
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        {{ item.action.delete }}
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap p-4"
        >
          <span class="fs-12 fw-medium"
            >Items per page: {{ itemsPerPage }}</span
          >

          <div class="d-flex align-items-center">
            <span class="fs-12 fw-medium me-2"
              >{{ startIndex + 1 }} - {{ endIndex }} of
              {{ filteredItems.length }}</span
            >
            <nav aria-label="Page navigation example">
              <ul class="pagination mb-0 justify-content-center">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <a
                    class="page-link icon"
                    href="#"
                    aria-label="Previous"
                    @click.prevent="prevPage"
                  >
                    <i class="material-symbols-outlined">keyboard_arrow_left</i>
                  </a>
                </li>

                <li
                  class="page-item"
                  :class="{ disabled: currentPage === totalPages }"
                >
                  <a
                    class="page-link icon"
                    href="#"
                    aria-label="Next"
                    @click.prevent="nextPage"
                  >
                    <i class="material-symbols-outlined"
                      >keyboard_arrow_right</i
                    >
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "DataTable",
  setup() {
    const items = ref([
      {
        userID: "#JAN-158",
        user: {
          name: "Marcia Baker",
        },
        email: "marcia@trezo.com",
        location: "Washington D.C",
        phone: "+1 555-445-4455",
        projects: 6,
        joinDate: "01 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
      {
        userID: "#JAN-325",
        user: {
          name: "Carolyn Barnes",
        },
        email: "barnes@trezo.com",
        location: "Chicago",
        phone: "+1 555-455-9966",
        projects: 10,
        joinDate: "02 Dec 2024",
        action: {
          view: "visibility",
          edit: "edit",
          delete: "delete",
        },
      },
    ]);

    const searchTerm = ref("");
    const itemsPerPage = ref(10);
    const currentPage = ref(1);

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          userID: any;
          user: { name: any };
          email: any;
          location: any;
          phone: any;
          joinDate: any;
        }) =>
          [
            item.userID,
            item.user.name,
            item.email,
            item.location,
            item.phone,
            item.joinDate,
          ].some((field) =>
            field.toLowerCase().includes(searchTerm.value.toLowerCase())
          )
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredItems.value.length / Number(itemsPerPage.value))
    );

    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * Number(itemsPerPage.value);
      const end = start + Number(itemsPerPage.value);
      return filteredItems.value.slice(start, end);
    });

    const startIndex = computed(
      () => (currentPage.value - 1) * Number(itemsPerPage.value)
    );
    const endIndex = computed(() =>
      Math.min(
        startIndex.value + Number(itemsPerPage.value),
        filteredItems.value.length
      )
    );

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    return {
      items,
      searchTerm,
      itemsPerPage,
      currentPage,
      filteredItems,
      paginatedItems,
      startIndex,
      endIndex,
      totalPages,
      prevPage,
      nextPage,
    };
  },
});
</script>
