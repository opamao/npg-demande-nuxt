<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body">
          <h3 class="mb-3 mb-lg-4">Infomartions</h3>
          <form>
            <div class="row">
              <div class="col-lg-4 col-sm-6">
                <div class="form-group mb-4">
                  <label class="label text-secondary">Référence</label>
                  <input disabled type="text" class="form-control h-55" />
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="form-group mb-4">
                  <label class="label text-secondary">Demander par</label>
                  <input disabled type="text" class="form-control h-55" />
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="form-group mb-4">
                  <label class="label text-secondary">Division</label>
                  <input disabled type="text" class="form-control h-55" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="form-group mb-0">
                  <label class="label text-secondary">Date besoin</label>
                  <input disabled type="date" class="form-control h-55" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="form-group mb-0">
                  <label class="label text-secondary">Magasin</label>
                  <select
                    class="form-select form-control h-55"
                    aria-label="Default select example"
                  >
                    <option selected>DPF2</option>
                    <option value="1">DPF3</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12 col-sm-12">
                <div class="form-group mb-0">
                  <label class="label text-secondary">Commentaire</label>
                  <textarea
                    class="form-control"
                    name="commentaire"
                    rows="5"
                    id=""
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body">
          <h3 class="mb-3 mb-lg-4">Recherche</h3>

          <form>
            <div class="row">
              <div class="col-lg-8 col-sm-8">
                <div class="form-group mb-4">
                  <input
                    type="text"
                    class="form-control h-55"
                    placeholder="Code article"
                  />
                </div>
              </div>
              <div class="col-lg-4 ol-sm-4">
                <div class="form-group mb-4">
                  <button class="btn btn-primary py-2 px-4 fw-medium fs-16">
                    <i class="ri-search-line text-white fw-medium"></i>
                    RECHERCHER
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              class="btn btn btn-primary py-2 px-4 text-white fw-semibold"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal4"
            >
              Connexion à SAP
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal4"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Veuillez vous connecter à SAP
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <form action="#">
                    <div class="modal-body">
                      <div class="col-lg-12 col-sm-12">
                        <div class="form-group mb-4">
                          <input
                            type="text"
                            required
                            class="form-control h-55"
                            placeholder="Utilisateur"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 col-sm-12">
                        <div class="form-group mb-4">
                          <input
                            type="password"
                            required
                            class="form-control h-55"
                            placeholder="Mot de passe"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-danger text-white"
                        data-bs-dismiss="modal"
                      >
                        Annuler
                      </button>
                      <button type="submit" class="btn btn-primary text-white">
                        Se connecter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <button
              type="button"
              class="btn btn btn-primary py-2 px-4 text-white fw-semibold"
              data-bs-toggle="modal"
              data-bs-target="#recherche"
            >
              Après recherche
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="recherche"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" style="max-width: 1000px;">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Recherche
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <form action="#">
                    <div class="modal-body">
                      <table class="table align-middle">
                        <thead>
                          <tr>
                            <th scope="col">Code article</th>
                            <th scope="col">Désignation</th>
                            <th scope="col">Type d'article</th>
                            <th scope="col">Qté SAP</th>
                            <th scope="col">Qté demandée</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-secondary">
                             code article
                            </td>
                            <td class="text-secondary">designation</td>
                            <td class="text-secondary">
                             type article
                            </td>
                            <td>
                              quantité
                            </td>
                            <td>
                              <input type="number" class="form-control">
                            </td>
                            <td>
                              <div class="d-flex align-items-center gap-1">
                                <button
                                  class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                                >
                                  <i
                                    class="material-symbols-outlined fs-16 text-primary"
                                  >
                                   check
                                  </i>
                                </button>
                                <button
                                  class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                                >
                                  <i
                                    class="material-symbols-outlined fs-16 text-danger"
                                  >
                                   delete
                                  </i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xxl-12 col-lg-12">
    <div class="card bg-white border-0 rounded-3 mb-4">
      <div class="card-body p-4">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-lg-4 mb-3"
        >
          <form class="position-relative table-src-form me-0" @submit.prevent>
            <input
              type="text"
              class="form-control"
              placeholder="Search here"
              v-model="searchTerm"
            />
            <i
              class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y"
            >
              search
            </i>
          </form>
        </div>

        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="all-tab-pane"
            role="tabpanel"
            aria-labelledby="all-tab"
            tabindex="0"
          >
            <div class="default-table-area all-products">
              <div class="table-responsive">
                <table class="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">Code article</th>
                      <th scope="col">Désignation</th>
                      <th scope="col">Type d'article</th>
                      <th scope="col">Division</th>
                      <th scope="col">Qté SAP</th>
                      <th scope="col">Qté demandées CRN</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in filteredItems" :key="item.id">
                      <td class="text-secondary">
                        {{ item.stock.count }}
                      </td>
                      <td class="text-secondary">
                        {{ item.stock.count }}
                      </td>
                      <td class="text-secondary">${{ item.amount }}</td>
                      <td class="text-secondary">
                        {{ item.rating }}
                      </td>
                      <td>
                        <span
                          class="badge bg-opacity-10 p-2 fs-12 fw-normal"
                          :class="computeClass(item.status)"
                        >
                          {{ item.status }}
                        </span>
                      </td>
                      <td>
                        <span
                          class="badge bg-opacity-10 p-2 fs-12 fw-normal"
                          :class="computeClass(item.status)"
                        >
                          {{ item.status }}
                        </span>
                      </td>
                      <td>
                        <div class="d-flex align-items-center gap-1">
                          <button
                            class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                          >
                            <i
                              class="material-symbols-outlined fs-16 text-primary"
                            >
                              {{ item.action.view }}
                            </i>
                          </button>
                          <button
                            class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                          >
                            <i
                              class="material-symbols-outlined fs-16 text-danger"
                            >
                              {{ item.action.delete }}
                            </i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "CreateProduct",
  setup() {
    const items = ref([
      {
        id: "#JAN-999",
        product: {
          title: "Smart Band",
          date: "08 Jun 2024",
        },
        category: "Watch",
        price: "35.00",
        order: 75,
        stock: {
          count: "750",
          className: false,
        },
        amount: "2,625",
        rating: "5.00 (141 reviews)",
        status: "Published",
        action: {
          view: "check",
          delete: "delete",
        },
      },
      {
        id: "#JAN-998",
        product: {
          title: "Headphone",
          date: "07 Jun 2024",
        },
        category: "Electronics",
        price: "49.00",
        order: 25,
        stock: {
          count: "825",
          className: false,
        },
        amount: "1,225",
        rating: "5.00 (69 reviews)",
        status: "Draft",
        action: {
          view: "check",
          delete: "delete",
        },
      },
    ]);

    const searchTerm = ref("");

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          id: string;
          product: { title: string; date: string };
          category: string;
          price: string;
          stock: { count: string };
          amount: string;
          rating: string;
          status: string;
        }) =>
          item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.product.title
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.product.date
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.category
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.price.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.stock.count
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.amount.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.rating.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.status.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    const publishedItems = computed(() =>
      filteredItems.value.filter(
        (item: { status: string }) => item.status === "Published"
      )
    );

    const draftItems = computed(() =>
      filteredItems.value.filter(
        (item: { status: string }) => item.status === "Draft"
      )
    );

    const computeClass = (classValue: string) => {
      return {
        published: classValue === "Published",
        draft: classValue === "Draft",
      };
    };

    return {
      items,
      searchTerm,
      filteredItems,
      publishedItems,
      draftItems,
      computeClass,
    };
  },
});
</script>
