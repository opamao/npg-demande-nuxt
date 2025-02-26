<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <form class="mb-4">
        <div class="row">
          <div class="col-lg-5 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Gratuit</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Saisir l'article"
              />
            </div>
          </div>
          <div class="col-lg-5 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Attribuer à</label>
              <select
                class="form-select form-control h-55"
                aria-label="Default select example"
              >
                <option selected>Yapi théodore</option>
                <option value="1">Paid</option>
                <option value="2">Unpaid</option>
                <option value="3">Cancelled</option>
              </select>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <div class="form-group mb-4">
              <br /><br />
              <button
                type="submit"
                class="btn border-primary text-primary hover-bg"
                style="right: 24px; top: 24px"
              >
                <i class="ri-add-line"></i>
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </form>

      <div class="default-table-area all-products">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Article</th>
                <th scope="col">Description</th>
                <th scope="col">Quantité</th>
                <th scope="col">Attribué à</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-body">1</td>
                <td>
                  <strong>sodof</strong>
                </td>
                <td>
                  <p>description</p>
                </td>
                <td>
                  <input
                    type="number"
                    class="form-control h-55"
                    placeholder="Entrer quantité"
                  />
                </td>
                <td class="text-body">Yapi théodore</td>
                <td>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-16 text-danger">
                      delete
                    </i>
                  </button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td class="fw-medium text-secondary">Totale Quantité</td>
                <td class="text-secondary">15</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="d-flex flex-wrap gap-3 justify-content-right mt-4" style="float: right;">
        <button class="btn btn-danger py-2 px-4 fw-medium fs-16 text-white">
          Annuler
        </button>
        <button class="btn btn-primary py-2 px-4 fw-medium fs-16">
          <i class="ri-add-line text-white fw-medium"></i> Valider
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreateInvoice",
});
</script>
