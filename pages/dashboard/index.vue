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

        <UTable :rows="people" />
         
      </div>

      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
const people = [{
  id: 1,
  name: 'Lindsay Walton',
  title: 'Front-end Developer',
  email: 'lindsay.walton@example.com',
  role: 'Member'
}, {
  id: 2,
  name: 'Courtney Henry',
  title: 'Designer',
  email: 'courtney.henry@example.com',
  role: 'Admin'
}, {
  id: 3,
  name: 'Tom Cook',
  title: 'Director of Product',
  email: 'tom.cook@example.com',
  role: 'Member'
}, {
  id: 4,
  name: 'Whitney Francis',
  title: 'Copywriter',
  email: 'whitney.francis@example.com',
  role: 'Admin'
}, {
  id: 5,
  name: 'Leonard Krasner',
  title: 'Senior Designer',
  email: 'leonard.krasner@example.com',
  role: 'Owner'
}, {
  id: 6,
  name: 'Floyd Miles',
  title: 'Principal Designer',
  email: 'floyd.miles@example.com',
  role: 'Member'
}]
</script>

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
};
</script>
