<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4"
      >
        <h3 class="mb-0">Liste des demandes</h3>
        <NuxtLink
          to="/users/add-user"
          class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
            <span>Nouveau utilisateur</span>
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
                <th scope="col">Statut</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <p>{{ paginatedItems }}</p>
              <tr v-for="item in paginatedItems" :key="item.id">
                <td class="text-body">
                  {{ item.id }}
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-14 mb-0">
                        {{ item.name }}
                      </h6>
                    </div>
                  </div>
                </td>
                <td class="text-secondary">
                  {{ item.email }}
                </td>
                <td class="text-secondary">
                  {{ item.username }}
                </td>
                <td class="text-secondary">
                  {{ item.phone }}
                </td>
                <td class="text-secondary">
                  {{ item.status }}
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <NuxtLink
                      title="Détails"
                      to="/users/add-user"
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        view
                      </i>
                    </NuxtLink>
                    <NuxtLink
                      title="Modifier"
                      to="/users/add-user"
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </NuxtLink>
                    <button
                      title="Supprimer"
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
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
import { defineComponent, ref, computed, onMounted } from "vue";

export default defineComponent({
  name: "DataTable",
  setup() {
    const items = ref<any[]>([]); // Initialisation avec un tableau vide
    const searchTerm = ref("");
    const itemsPerPage = ref(10);
    const currentPage = ref(1);

    // Fonction pour récupérer les données via l'API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users"); // Remplace par l'URL de ton API
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json(); // Transformation de la réponse en JSON

        console.log("Données récupérées:", JSON.stringify(data, null, 2));
        items.value = data; // Remplacer les données statiques par celles de l'API
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    // Appel de la fonction fetchData lors du montage du composant
    onMounted(() => {
      fetchData();
    });

    // Filtrage des éléments en fonction du terme de recherche
    const filteredItems = computed(() => {
      return items.value.filter(
        (item: { id: any; name: string; email: string; phone: string; status: string; username: string }) =>
          [item.id, item.name, item.email, item.phone, item.status, item.username].some(
            (field) => field.toLowerCase().includes(searchTerm.value.toLowerCase())
          )
      );
    });

    // Total des pages
    const totalPages = computed(() => Math.ceil(filteredItems.value.length / Number(itemsPerPage.value)));

    // Pagination des éléments filtrés
    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * Number(itemsPerPage.value);
      const end = start + Number(itemsPerPage.value);
      return filteredItems.value.slice(start, end);
    });

    // Indices de début et de fin pour l'affichage des éléments paginés
    const startIndex = computed(() => (currentPage.value - 1) * Number(itemsPerPage.value));
    const endIndex = computed(() => Math.min(startIndex.value + Number(itemsPerPage.value), filteredItems.value.length));

    // Fonctions pour changer de page
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

    // Ajouter un log pour vérifier si les données sont bien paginées
    console.log("Total pages: ", totalPages.value);
    console.log("Paginated items: ", paginatedItems.value);

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

