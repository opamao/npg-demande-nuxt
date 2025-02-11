<script setup>
    const nuxt = useNuxtApp();
    console.log(nuxt);
</script>

<template>
  <div>
    <h1>User Profile</h1>
    <p>User ID: {{ $route.params.id }}</p>
  </div>
</template>
