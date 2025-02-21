<template>
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

        <NuxtLink
          to="/ecommerce/create-product"
          class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block fs-18 me-1"></i>
            <span>Nouvelle demande</span>
          </span>
        </NuxtLink>
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
                    <th scope="col">ID</th>
                    <th scope="col">Code article</th>
                    <th scope="col">Désignation</th>
                    <th scope="col">Type d'article</th>
                    <th scope="col">Destinataire</th>
                    <th scope="col">Qté demandée</th>
                    <th scope="col">Qté réçu</th>
                    <th scope="col">Unité</th>
                    <th scope="col">Demander par</th>
                    <th scope="col">Demander le</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in filteredItems" :key="item.id">
                    <td class="text-body">
                      {{ item.id }}
                    </td>
                    <td>
                      <div class="ms-2 ps-1">
                        <h6 class="fw-medium fs-14">
                          {{ item.product.title }}
                        </h6>
                        <span class="fs-12 text-body">
                          {{ item.product.date }}
                        </span>
                      </div>
                    </td>
                    <td class="text-secondary">
                      {{ item.category }}
                    </td>
                    <td class="text-secondary">${{ item.price }}</td>
                    <td class="text-secondary">
                      {{ item.order }}
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
                          <i class="material-symbols-outlined fs-16 text-body">
                            {{ item.action.edit }}
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
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "ProductsList",
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
          view: "visibility",
          edit: "edit",
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
          view: "visibility",
          edit: "edit",
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
