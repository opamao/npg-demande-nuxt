<template>
  <div>
    <Nav />
    <Aside />

    <div class="p-4 sm:ml-64">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div
            class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
                Nombre d'utilisateur
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">20</p>
          </div>
        </div>

        <div class="flex items-center justify-center h-48 mb-4 rounded-sm">
          Contenu
        </div>

        <table id="example" class="display" style="width: 100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
            </tr>
          </tbody>
        </table>
         
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Aside from "~/components/Aside.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Nav,
    Aside,
    Footer,
  },
  mounted() {
    if (typeof window.$ !== 'undefined') {
      // Si jQuery est chargé
      const $ = window.$; // Récupérer la référence à jQuery
      $(document).ready(function() {
        $('#example').DataTable();  // Initialisation de DataTable
      });
    } else {
      console.error('jQuery n\'est pas chargé');
    }
  },
};
</script>
