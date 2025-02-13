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
  //   head() {
  //     return {
  //       script: [
  //         {
  //           src: "https://cdn.jsdelivr.net/npm/simple-datatables@9.0.3",
  //           type: "text/javascript",
  //         },
  //       ],
  //     };
  //   },
  components: {
    Nav,
    Aside,
    Footer,
  },
};
</script>
